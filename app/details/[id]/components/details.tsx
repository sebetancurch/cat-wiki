'use client'

import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'

function setPunctuation( cat: any, property: string) {
  let punctuationElement = []
  const punctuation = cat[property]
  for(let i = 0; i < 5; i++) {
    punctuationElement.push(
      <div 
        key={property+'rectangle'+i} 
        className={`${i <= punctuation ? styles.darkRectangle : styles.whiteRectangle}`}
      />
    )
  }
  return punctuationElement
}

function Details({ breed, url }: {breed: any, url: string}) {

  if ( breed == null ) {
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
          src={url}
          width={371}
          height={371}
          alt="Picture of kitten"/>
        <div style={{maxWidth: '50%'}}>
          <p style={{fontWeight: '600px', fontSize: '36px'}}>
            {breed.name}
          </p>
          <p>
            {breed.description}
          </p>
          <p>
            <span style={{minWidth: '19%', fontWeight: '700'}}>Temperament: </span>
            <span>
              {breed.temperament}
            </span>
          </p>
          <p>
            <span style={{minWidth: '19%', fontWeight: '700'}}>Origin: </span>
            <span>
              {breed.origin}
            </span>
          </p>
          <p>
            <span style={{minWidth: '19%', fontWeight: '700'}}>Life Span: </span>
            <span>
              {breed.life_span}
            </span>
          </p>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Adaptability:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'adaptability')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Affection level:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'affection_level')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Child Friendly:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'child_friendly')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Grooming:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'grooming')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Intelligence:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'intelligence')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Health issues:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'health_issues')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Social needs:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'social_needs')}
            </div>
          </div>
          <div className={styles.punctuation}>
            <p style={{minWidth: '19%', fontWeight: '700'}}>Stranger friendly:</p>
            <div className={styles.punctuationContainer}>
              {setPunctuation(breed, 'stranger_friendly')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details