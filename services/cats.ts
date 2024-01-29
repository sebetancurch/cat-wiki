import { database } from '@/firebaseConfig'
import { ref, get, set } from "firebase/database";

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

export const getCatDetails = (id: string) => {

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