export const getCats = async () => {
  
    const catRes = await fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        headers: {
        'x-api-key': process.env.API_KEY || "",
        },
    })

    if (!catRes.ok) {
        throw new Error('Failed to fetch data')
    }

    return await catRes.json()
}