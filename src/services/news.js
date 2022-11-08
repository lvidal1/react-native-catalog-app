import { NEWSAPI_KEY } from '@env'

export const getNews = async (query) => {
    try {
        const response = await fetch(`http://newsapi.org/v2/everything?q=${query}&apiKey=${NEWSAPI_KEY}`)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}