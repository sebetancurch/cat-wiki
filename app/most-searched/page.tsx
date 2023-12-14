import React from 'react'
import List from './components/list';
import { getCats } from '../cat-list/page';

async function getMostSearched() {

  var mysql = require('mysql2/promise');

  var connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "sergioevil202395",
      database: 'cat_api',
    });

  try {
    const catsList = await getCats()
    const [rows] = await connection.execute(`
      SELECT * FROM most_searched
      ORDER BY searches DESC
      LIMIT 10  
    `);
    const mostSearched = rows.map((cat: any) => {
      return catsList.find((item: any) => cat.cat_id === item.id) 
    })
    return mostSearched;
  } catch (error: any) {
    console.error('Error executing query:', error.message);
  } finally {
    connection.end();
  }
}

async function Page() {

  const mostSearched = await getMostSearched()

  return (
    <>
        <List cats={mostSearched}/>
    </>
  )
}

export default Page