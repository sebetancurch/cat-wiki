import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { ApiKey } from '@/app.constants';
import CatInfo from '../components/cat-info';
import List from './components/list';

async function getMostSearched() {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
      });
      
      con.connect(function(err: string) {
        if (err) throw err;
        console.log("Connected!");
      });
}

async function Page() {

  const [loading, setLoading] = useState<boolean>(true)

  return (
    <>
        <List cats={[]}/>
    </>
  )
}

export default Page