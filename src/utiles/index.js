// HERE CALL TO LOCAL STORAGE
export const setStorage = (arr) => {
    const str = JSON.stringify(arr);
    localStorage.setItem('favGames', str)
}

export const getStorage = () => {
    const resp = JSON.parse(localStorage.getItem('favGames'))
    if(resp === null){
        return []
    } else {
        return resp
    }
}

export const checkChanges = (arr) => {
     return arr
}