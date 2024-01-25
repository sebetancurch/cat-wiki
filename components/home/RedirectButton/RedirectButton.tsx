'use client'

import Button from "@mui/material/Button"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import styles from "./RedirectButton.module.css"

export const RedirectButton = ({ href }: {href: string}) => {
    return (
        <Link
            className={styles.link}
            href={href}>
            <Button
                className={styles.button}
                color='inherit'
                size='small'
                endIcon={<ArrowForwardIcon />}>
                See more
            </Button>
        </Link>
    )
}