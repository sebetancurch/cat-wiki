import CatList from '@/components/cat-list/CatList/CatList';
import { getCats } from '@/services/cats';

export default async function Page() {

    const cats: any[] = await getCats()

    return (
        <>
            <p style={{fontWeight: '700', fontSize: '36px'}}>List of breeds</p>
            <CatList cats={cats}/>
        </>
    )
}
