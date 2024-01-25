import { AutocompleteField } from '@/components/home/AutocompleteField/AutocompleteField';
import { Mystery_Quest } from 'next/font/google';
import styles from './page.module.css'
import { RedirectButton } from '@/components/home/RedirectButton/RedirectButton';
import { CatsCollague } from '@/components/home/CatsCollague/CatsCollague';
import { CatImageLink } from '@/components/home/CatImageLink/CatImageLink';
import { getCats } from '@/services/cats';
import { getImages } from '@/services/images';

const mysteryQuest = Mystery_Quest({ 
  weight: '400', 
  subsets: ['latin'],
  style: 'normal'
});

export default async function Home() {

  const cats = await getCats()

  return (
    <>
        <div className={styles.mainCard}>
            <div style={{fontSize: '64px'}} className={styles.kittenImage}>
                <div style={{color: 'white', paddingTop: "5%", paddingLeft: '5%'}}>
                    <div style={{display:"flex"}}>
                        <p style={{fontSize: '64px'}} className={mysteryQuest.className}>CatWiki</p>
                        {/* <Image src={require("../../images/CatImage.svg")} alt={''} height={42.67} width={127.72}/> */}
                    </div>
                    <p style={{fontSize: '24px', fontWeight: '500'}}>Get to know more about your cat breed</p>
                    <AutocompleteField cats={cats} />
                </div>
            </div>
            <div className={styles.mainInfo}>
                <div style={{margin: '6%'}}>
                    <p style={{fontWeight: 500, fontSize: '18px'}}>Most searched Breeds</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <p style={{fontWeight: 700, fontSize: '48px'}}>66+ Breeds for you to discober</p>
                    <RedirectButton href={"/cat-list"}/>
                    </div>
                    <div className={styles.catsList}>
                    {
                        cats.slice(0, 4).map((cat: any) => {
                            return (
                                <div key={cat.id} style={{display: 'flex', flexDirection: 'column'}}>
                                  <CatImageLink id={cat.id} url={cat.image.url}/>
                                  <label>{cat.name}</label>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        <div style={{display: 'flex', margin: '100px'}}>
            <div style={{flex: '1'}}>
            <p style={{fontWeight: 700, fontSize: '48px'}}>
                Why should you have a cat?
            </p>
            <p style={{fontWeight: 500, fontSize: '18px'}}>
                Having a cat around you can actually trigger the
                realise of claiming chemicals  in your body wich
                lower your stress and anxiety levels
            </p>
            <RedirectButton href={'/most-searched'}/>
            </div>
            <CatsCollague />
        </div>
    </>
  )
}
