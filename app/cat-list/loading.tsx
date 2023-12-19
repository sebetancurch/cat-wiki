'use client'

import { ClipLoader } from "react-spinners";
import styles from "./page.module.css"

export default async function Loading() {
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
}