// HERE CALL TO LOCAL STORAGE
export const setStorage = (arr) => {
    const str = JSON.stringify(arr);
    localStorage.setItem('favGames', str)
}

export const getStorage = () => {
    return JSON.parse(localStorage.getItem('favGames'))
}