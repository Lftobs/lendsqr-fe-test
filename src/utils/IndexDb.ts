let  request: IDBOpenDBRequest
let db: IDBDatabase
let version = 1


const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'

export enum Stores {
    Test = 'test'
}

export const initDB = (): Promise<boolean> => {
    return new Promise((resolve) => {
        request = indexedDB.open('mDb')
        request.onupgradeneeded = () => {
            db  = request.result

            if (!db.objectStoreNames.contains(Stores.Test)) {
                console.log('creating users db')
                db.createObjectStore(Stores.Test, { keyPath: 'id', autoIncrement: true });
            }
        }

        request.onsuccess = () => {
            db = request.result
            version = db.version
            console.log('request.onsuccess - initDB', version)
            resolve(true)
        }

        request.onerror = () => {
            resolve(false)
        }
    })
}


export const fillDb = (storeName: string)  => {
  return new Promise((resolve) => {
    request = indexedDB.open('mDb', version)
    

    request.onsuccess = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let allUser= data
                db = request.result
                const transaction = db.transaction([storeName], 'readwrite')
                const store = transaction.objectStore(storeName)
                for (const items in allUser) {
                    store.add(allUser[items])
                    
                    resolve(items)
                }
                
            })

    }

    request.onerror = () => {
        const error = request.error?.message
        if (error) {
            resolve(error)
        } else {
            resolve('unknown error')
        }
    }
    
  })
}


export const getData = <T>(storeName: string): Promise<T[]> => {
    return new Promise((resolve) => {
        request = indexedDB.open('mDb')

        request.onsuccess = () => {
            db = request.result
            const transaction = db.transaction([storeName], 'readwrite')
            const store = transaction.objectStore(storeName)
            
            const res = store.getAll()
            
            res.onsuccess = () => {
                resolve(res.result)
            }
            
        }
        


    })
}

export const getDataId = <T>(id: string): Promise<T[]> => {
    return new Promise((resolve) => {
        request = indexedDB.open('mDb')

        request.onsuccess = () => {
            db = request.result
            const transaction = db.transaction([Stores.Test], 'readwrite')
            const store = transaction.objectStore(Stores.Test)
            
            const r = store.get(id)
            r.onsuccess = () => {
                resolve(r.result)
            }
            
        }
        


    })
}
