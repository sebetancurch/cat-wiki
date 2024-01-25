import React from 'react'
import { ref, get } from "firebase/database";
import { database } from '@/firebaseConfig';
import CatInfo from '@/components/shared/CatInfo/CatInfo';
import { getCats } from '@/services/cats';

async function getMostSearched() {

  const catList = await getCats()
  const mostSearchedRef = ref(database, "Most-searched");
  return get(mostSearchedRef)
    .then((snapshot) => {
      const catViewsList = Object.values(snapshot.val()).sort((a: any , b: any) => a.views - b.views).slice(0, 10);
      return catViewsList.map((cat: any) => {
        return catList.find((catViews: any) => cat.id == catViews.id)
      });
    }).catch ((error) => {
      console.error(error);
    })
}

async function Page() {

  const mostSearched: any = await getMostSearched()

  return (
    <div>
      {
          mostSearched.map((cat: any) => {
              return (
                  <CatInfo key={cat.id} cat={cat}/>
              )
          })
      }
    </div>
  )
}

export default Page