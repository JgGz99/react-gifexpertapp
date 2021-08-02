export const getGif = async (categoria) => {
    const key = '9ufJ7yvIAYK02cSut3fhLro0vl5ZE8NS'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=${key}`;

    try {

        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gifs;
    } catch (error) {
        console.log(error);
    }
}