let connection = mysql.createConnection(mysql_setting);
connection.connect();
export const getAllRooms = async () => {
  return await connection.query(
    "SELECT * from room",
    (error, results, fields) => {
      if (error !== null) {
        throw new Error("something went wrong");
      }
      // for(let i = 0; i <= Object.keys(results).length; i++){
      return results[0].room_name;
      // console.log(Object.keys(results).length)
      // }
    }
  );
};
