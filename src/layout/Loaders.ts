import { initDB, getData, getDataId } from '../utils/IndexDb';
import { LoaderFunctionArgs } from 'react-router-dom';

//root loader
export const rootLoader = async <T>(): Promise<void> => {
    await initDB()
    console.log('hi')
}

// loader for all users ( for Users.tsx )
export const loader = async <T>(): Promise<T[]> => {
    await initDB()
    //await fillDb()
    const users = await getData()
    console.log(users)
    return { users } as any 
}


// loader for userdetails ( for Details.tsx )
export const detailsLoader = async <T>({ params }: LoaderFunctionArgs): Promise<T[]> => {
    const user = await getDataId(params.userId)
    console.log(params.userId)
    console.log(user)
    return { user } as any
}