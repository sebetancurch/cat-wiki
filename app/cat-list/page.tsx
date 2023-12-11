import { ApiKey } from '@/app.constants';
import FullList from './components/full-list';

export async function getCats() {

    const catRes = await Promise.all(
        [
            fetch('https://api.thecatapi.com/v1/breeds', {
                method: 'GET',
                headers: {
                'x-api-key': ApiKey,
                },
            }), 
            fetch('https://api.thecatapi.com/v1/images/search', {
                method: 'GET',
                headers: {
                'x-api-key': ApiKey,
                },
            })
        ])

    if (!catRes[0].ok || !catRes[1].ok) {
        throw new Error('Failed to fetch data')
    }

    const cats = await Promise.all([catRes[0].json(), catRes[1].json()])

    let mergedObjects = cats[0].map((catInfo: any) => {
        let images = cats[1].find((catImage: any) => catImage.id === catInfo.id)
        return { ...catInfo, ...images }
    })

    return mergedObjects
}

export default async function Page() {

    const cats: any[] = await getCats()

    console.log(cats)

    return (
        <>
            <FullList cats={cats}/>
        </>
    )
}
