const key = 'GGFq1XjY7jVp2GBy9ddaKBu6f5ZhJMQ0'

export const getGift = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(category)}&limit=6`;
    const response = await fetch( url );
    const {data} = await response.json();

    const gifs = data.map( ({id, title, images: {downsized_medium:{url}}}) => {
        return { 
            id,
            title,
            url 
        }
    })
    
    return [...gifs];
}