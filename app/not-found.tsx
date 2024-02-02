import Image from "next/image";
import Link from 'next/link';
import styles from './page.module.css';
import NotFountImage from '@/public/images/not-found-cat.png'
 
export default function NotFound() {
  return (
    <div className={styles.notFound}>
        <Image
            src={NotFountImage}
            alt="404"
            width={450}
            height={300}
        />
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="./">Return Home</Link>
    </div>
  )
}