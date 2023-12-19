import { ApiKey } from '@/app.constants';
import MainCard from '@/app/components/main-card';

export async function getCats() {
  
  const catRes = await fetch('https://api.thecatapi.com/v1/breeds', {
    method: 'GET',
    headers: {
      'x-api-key': ApiKey,
    },
  })

  if (!catRes.ok) {
    throw new Error('Failed to fetch data')
  }


  const cats = await catRes.json()
  return cats
}

export async function getImages() {

  const imageRes = await fetch('https://api.thecatapi.com/v1/images/search?limit=4', {
    method: 'GET',
    headers: {
      'x-api-key': ApiKey,
    },
  })

  if (!imageRes.ok) {
    throw new Error('Failed to fetch data')
  }
  const images = await imageRes.json()
  return images
}

export default async function Home() {

  const catsData = getCats()
  const imagesData = getImages()

  const [cats, images] = await Promise.all([catsData, imagesData])

  return (
    <>
      <MainCard cats={cats} images={images}/>
    </>
  )
}
