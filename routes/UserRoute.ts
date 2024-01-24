const { Router } = require('express')
const {getUser, addUser, updateUser, deleteUser} = require('../controllers/UserController')

const user = Router();

user.get("/api/user/getuser", getUser);
user.post("/api/user/adduser", addUser);
user.put("/api/user/updateuser/:id", updateUser);
user.delete("/api/user/deleteuser/:id", deleteUser);

export default user;