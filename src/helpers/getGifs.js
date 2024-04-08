export const getGifs = async (category) => {
    const url = `${import.meta.env.VITE_GIPHY_URL}?api_key=${import.meta.env.VITE_GIPHY_KEY}&q=${category}&limit=12`;
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