import React from 'react'
import { database } from '@/firebaseConfig'
import { ref, get, set } from "firebase/database";
import styles from './page.module.css'
import Image from 'next/image'

async function updateCatViews(id: string) {

  const mostSearchedRef = ref(database, 'Most-searched/');
  const catToUpdate = await get(mostSearchedRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        let catList: any[] = []
        const ids = Object.keys(snapshot.val())
        const values = Object.values(snapshot.val()).map((cat: any) => {
          return { cat_id: cat.id, views: cat.views }
        })
        for (let i = 0; i < ids.length ; i++) {
          catList.push({ id: ids[i], cat_id: values[i].cat_id, views: values[i].views })
        }
        return catList.find(item => item.cat_id == id)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  set(ref(database, 'Most-searched/' + catToUpdate.id), {
    id: catToUpdate.cat_id,
    views: catToUpdate.views + 1
  });
}

async function getCatDetails(id: string) {

  const queryParams = new URLSearchParams({ breed_ids: id });
  return Promise.all([
    fetch(` https://api.thecatapi.com/v1/images/search?${queryParams}`, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.API_KEY || "",
      },
    }),
    updateCatViews(id)
  ])
  .then(async (response) => {
    const cat = await response[0].json()
    const catInfo = cat[0].breeds[0]
    const image = await fetch('https://api.thecatapi.com/v1/images/' + cat[0].breeds[0].reference_image_id, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.API_KEY || "",
      },
    }).then(response => {
      return response.json()
    })

    return { catInfo, image }
  })
  .catch(error => {
    return console.error('Error fetching data:', error);
  });
}

async function Page({ params }: { params: { id: string } }) {

  const { catInfo, image }: { catInfo: any, image: any } | any = await getCatDetails(params.id)

  const properties = [
    'adaptability',
    'affection_level',
    'child_friendly',
    'grooming',
    'intelligence',
    'health_issues',
    'social_needs',
    'stranger_friendly'
  ]

  function setPunctuation( property: string ) {

    let punctuationElement = []
    const punctuation = catInfo[property]
    for(let i = 0; i < 5; i++) {
      punctuationElement.push(
        <div 
          key={property+'rectangle'+i} 
          className={`${i <= punctuation ? styles.darkRectangle : styles.whiteRectangle}`}
        />
      )
    }
    return (
      <div id={property} className={styles.punctuation}>
          <p style={{minWidth: '19%', fontWeight: '700'}}>{property.replace('_', ' ')}</p>
          <div className={styles.punctuationContainer}>
            {punctuationElement}
          </div>
      </div>
    )
  }

  if ( catInfo == null ) {
    return(
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img
          src="https://placekitten.com/300/300"
          alt="Not Found"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <h2>Data not found</h2>
        <p>Sorry, the page you're looking for does not exist.</p>
      </div>
    )
  }

  const imageComponent = () => {
    'use client'

    return (
      <Image
        style={{borderRadius: '24px', margin: '50px 70px'}}
        src={image.url}
        width={371}
        height={371}
        alt="Picture of kitten"/>
    )

  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {
          imageComponent()
        }
        <div style={{maxWidth: '50%'}}>
          <p style={{fontWeight: '600px', fontSize: '36px'}}>
            {catInfo.name}
          </p>
          <p>
            {catInfo.description}
          </p>
          <p>
            <span style={{minWidth: '19%', fontWeight: '700'}}>Temperament: </span>
            <span>
              {catInfo.temperament}
            </span>
          </p>
          <p>
            <span style={{minWidth: '19%', fontWeight: '700'}}>Origin: </span>
            <span>
              {catInfo.origin}
            </span>
          </p>
          <p>
            <span style={{minWidth: '19%', fontWeight: '700'}}>Life Span: </span>
            <span>
              {catInfo.life_span}
            </span>
          </p>
            {
              properties.map((property: string) => {
                return setPunctuation(property)
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Page