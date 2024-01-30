import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { getCatDetails } from '@/services/cats';

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
          <p style={{minWidth: '9rem', fontWeight: '700'}}>{property.replace('_', ' ')}</p>
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

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className={styles.infoGrid}>
        <Image
          style={{borderRadius: '24px', margin: '50px 70px'}}
          src={image.url}
          width={371}
          height={371}
          alt="Picture of kitten"/>
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