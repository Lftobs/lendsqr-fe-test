import { createContext, useState } from 'react'

interface stat {
  [key: string]: string;
}

export type msgContextType ={
    msg: string | null,
    setMsg: (msg: string) => void,
    isMsg: boolean,
    setIsMsg: (isMsg: boolean) => void,
    msgStatus: string,
    setMsgStatus: (msgStatus: string) => void
  }
//const [msg, setMsg] = useState<string>(`kkk`)
export const msgContext = createContext<msgContextType | null>(null)

export const status: stat = {
    Blacklist: 'r',
    Active: 'g',
    Inactive: 'i',
    Pending: 'y'
}

export const residence: string[] = ['Personal apartment', `Parent's apartment`, `Friend's apartment`]
export const relationship: string[] = ['Brother', 'Sister', 'Father', 'Mother', 'Friend', 'Aunty', 'Uncle']

export const randomStatus = (status: {}) => {
    const keys = Object.keys(status)

    return keys[Math.floor(Math.random() * keys.length)]
}

export const randomItem = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)]
}
