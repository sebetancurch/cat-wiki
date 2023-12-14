'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { ApiKey } from '@/app.constants';
import { ClipLoader } from "react-spinners"
import { updateCatViews } from './update-cats';

function setPunctuation( cat: any, property: string) {
  let punctuationElement = []
  const punctuation = cat[property]
  for(let i = 0; i < 5; i++) {
    punctuationElement.push(<div key={property+'rectangle'+i} className={`${i <= punctuation ? styles.darkRectangle : styles.whiteRectangle}`}/>)
  }
  return punctuationElement
}

function Page({ params }: { params: { id: string } }) {

  const [cat, setCat] =  useState<any>(null)

  const [image, setImage] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() =>{
    Promise.all([
      window.fetch('https://api.thecatapi.com/v1/images/' + params.id, {
        method: 'GET',
        headers: {
          'x-api-key': ApiKey,
        },
      }),
      updateCatViews(params.id)
    ])
    .then((response) => {
      return response[0].json();
    }).then((data) => {
      setCat(data.breeds ? data.breeds[0] : null)
      setImage(data.url)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  }, [])

  if (loading) {
    return (
      <div className={styles.loader}>
        <ClipLoader
          color='#000000'
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  } else if ( cat == null ) {
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
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Image
          style={{borderRadius: '24px', margin: '50px 70px'}}
          src={image}
          width={371}
          height={371}
          alt="Picture of kitten"/>
        <div style={{maxWidth: '50%'}}>
          <p style={{fontWeight: '600px', fontSize: '36px'}}>
            {cat.name}
          </p>
          <p>
            {cat.description}
          </p>
          <p>
            <span style={{minWidth: '16%', fontWeight: '700'}}>Temperament: </span>
            <span className="">
              {cat.temperament}
            </span>
          </p>
          <p>
            <span style={{minWidth: '16%', fontWeight: '700'}}>Origin: </span>
            <span className="">
              {cat.origin}
            </span>
          </p>
          <p className="">
            <span style={{minWidth: '16%', fontWeight: '700'}}>Life Span: </span>
            <span className="">
              {cat.life_span}
            </span>
          </p>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Adaptability:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'adaptability')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Affection level:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'affection_level')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Child Friendly:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'child_friendly')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Grooming:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'grooming')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Intelligence:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'intelligence')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Health issues:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'health_issues')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Social needs:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'social_needs')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '16%', fontWeight: '700'}}>Stranger friendly:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(cat, 'stranger_friendly')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page