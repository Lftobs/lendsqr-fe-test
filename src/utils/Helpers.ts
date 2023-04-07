interface stat {
  [key: string]: string;

}

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
