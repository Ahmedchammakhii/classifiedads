const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ads'
}).promise();
connection.connect().then(res=>console.log("connected")).catch(er=>console.log(er))

module.exports = {
  selectusers : function () {
return connection.query("select * from users")
  },
  selectoneuser: function (id) {
    return connection.query("select * from users where idusers= ? ",[id])
      },
  adduser : async function(user) {
   await connection.query("insert into users (name,email,password,phone) values (?,?,?,?)",[user.name,user.email,user.password,user.phone])
   return connection.query("select * from users")
  },
  updateuser : async function (id,user){
    await connection.query("update users set phone=? , name = ? , password = ? , email = ? where idusers=?",[user.phone,user.name,user.password,user.email,id])
   return connection.query("select * from users")
  
  },
  deleteuser : async function(id) {
    await connection.query("delete from users where idusers=?",[id]) ;
    return connection.query("select * from users")
  },
  //posts
  selectposts :  async function () {
      return connection.query("select ad.* , c.name as catname from adposted as ad inner join users as u on (u.idusers=ad.authorId) inner join categories as c on(c.idcategories=ad.categories_idcategories)")
  },
  insertposts :  async function (ad) {
    await connection.query("insert into adposted (name,description,authorId,price,imageurl,categories_idcategories) values (?,?,?,?,?,?)",[ad.name,ad.description,ad.author,ad.price,ad.image,ad.category])
    return connection.query("select * from adposted")
},
deletepost : async function (id) {
  await connection.query("delete from adposted where idads=?",[id]) ;
  return connection.query("select * from adposted")
},
getpostdet : async function (id) {
  return connection.query("select ad.*,u.name as author,u.phone,c.name as cname from adposted as ad inner join users as u on (u.idusers=ad.authorId) inner join categories as c on (c.idcategories=ad.categories_idcategories) where ad.idads=?",[id])
},
getuserposts : async function (id) {
  return connection.query("select ad.* , c.name from adposted as ad inner join users as u on (u.idusers=ad.authorId) inner join categories as c on(c.idcategories=ad.categories_idcategories) where ad.authorId=?",[id])
},
getallCat : async function ( ) {
  return connection.query("select name from categories")
  }
}