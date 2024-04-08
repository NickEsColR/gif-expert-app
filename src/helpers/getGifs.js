export const getGifs = async () => {
    const url = `${process.env.VITE_GIPHY_URL}?api_key?=${process.env.VITE_GIPHY_API_KEY}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    ));
    return gifs;
}