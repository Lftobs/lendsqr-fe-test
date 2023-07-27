import { Await } from "react-router-dom"
import { randomStatus, status } from "./Helpers"

let request: IDBOpenDBRequest
let db: IDBDatabase
let version: number = 1
const dbName: string = 'mDb'


const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'

export enum Stores {
    Test = 'test'
}

export const initDB = (): Promise<boolean | string> => {
    return new Promise((resolve) => {
        request = indexedDB.open(dbName, version)
        request.onupgradeneeded = () => {
            db = request.result
            if (!db.objectStoreNames.contains(Stores.Test)) {
                console.log('creating users db')
                let objectStore = db.createObjectStore(Stores.Test, { keyPath: 'id', autoIncrement: true });
                objectStore.createIndex('statusIndex', 'status', {unique: false})
                objectStore.createIndex('orgs', 'orgName', {unique: false})
                objectStore.createIndex('orgs_status', ['orgName', 'status'], {unique: false})
            }

        }

        request.onsuccess = () => {
            //db = request.result           
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let allUser = data
                console.log(allUser)
                db = request.result
                version = db.version
                console.log('request.onsuccess - initDB', version)
                console.log(Stores.Test)
                const transaction = db.transaction([Stores.Test], 'readwrite')
                const store = transaction.objectStore(Stores.Test)
                for (const items in allUser ) {
                    
                    allUser[items] = Object.assign({status : randomStatus(status)}, allUser[items])
                    store.add(allUser[items])
                    
                    resolve(items)
                }
                
            })
            //resolve(true)
        }

        request.onerror = () => {
            resolve(false)
        }
    })
}


export const fillDb = (storeName: string =Stores.Test )  => {
  return new Promise((resolve) => {
    request = indexedDB.open(dbName, version)
    

    request.onsuccess = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let allUser = data
                console.log(allUser)
                db = request.result
                console.log(storeName)
                const transaction = db.transaction([storeName], 'readwrite')
                const store = transaction.objectStore(storeName)
                for (const items in allUser ) {
                    
                    allUser[items] = Object.assign({status : randomStatus(status)}, allUser[items])
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


export const getData = <T>(storeName: string =Stores.Test): Promise<T[]> => {
    return new Promise((resolve) => {
        request = indexedDB.open(dbName)
        

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

export const getDataId = <T>(id: string | undefined): Promise<T[]> => {
    return new Promise((resolve) => {
        request = indexedDB.open(dbName)

        request.onsuccess = () => {
            db = request.result
            const transaction = db.transaction([Stores.Test], 'readwrite')
            const store = transaction.objectStore(Stores.Test)
            if (id != undefined) {
                const r = store.get(id)
                r.onsuccess = () => {
                    resolve(r.result)
                }
            }
            
            
        }
        


    })
}

export const updateStatus = <T>(id: string, status: string, users: null | ((Users: any[]) => void)): Promise<T[]> => {
    return new Promise((resolve) => {
        request = indexedDB.open(dbName)

        request.onsuccess = () => {
            db = request.result
            const transaction = db.transaction([Stores.Test], 'readwrite')
            const store = transaction.objectStore(Stores.Test)
            if (id != undefined) {
                const r = store.get(id)
                r.onsuccess = () => {
                    const data = r.result
                    console.log(data)
                    data.status = status
                    const updateData = store.put(data)
                    updateData.onsuccess = async () => {
                        console.log('Success in updating record');
                        const updateData = await getData()
                        users!=null && users(updateData)
                    };
                    console.log(data)
                    console.log(data.status)
                    resolve(r.result)
                }
            }            
            
        }

    })
}