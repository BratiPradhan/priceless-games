import axios from 'axios'

// CALL TO LOCAL STORAGE
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

// CALL TO CHEAPSHARK API
export const getGameInfos = (gameID) => {
    return axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`).then(res => res.data)
}

export const checkChanges = async (arr) => {

    return await Promise.all(arr.map( async game => {
        const gameData = await getGameInfos(game.id)
        const { price } = gameData.deals[0]
        if(game.price !== price){
            return {
                ...game,
                newPrice: price,
                change: true
            }
        } else {
            return game
        }
    }))

}