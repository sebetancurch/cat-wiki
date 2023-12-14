export async function updateCatViews(id: string) {
    const mysql = require('mysql2/promise');
  
    const pool = mysql.createPool({
      host: "127.0.0.1",
      user: "root",
      password: "sergioevil202395",
      database: 'cat_api',
    });
  
    try {
      const connection = await pool.getConnection();
  
      const [cat] = await connection.execute(`SELECT * FROM cat_api WHERE cat_id = ${id}`);
  
      const [result] = await connection.execute(`UPDATE cat_api SET searches = ${cat[0].searches + 1} WHERE cat_id = ${id}`);
  
      connection.release();
  
      console.log('Rows affected:', result.affectedRows);
    } catch (error: any) {
      console.error('Error updating data:', error.message);
    } finally {
      pool.end();
    }
  }