export const getImages = async () => {

    const imageRes = await fetch('https://api.thecatapi.com/v1/images/search?limit=4', {
        method: 'GET',
        headers: {
        'x-api-key': process.env.API_KEY || "",
        },
    })

    if (!imageRes.ok) {
        throw new Error('Failed to fetch data')
    }

    return await imageRes.json()
}