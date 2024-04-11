
const expres = require("express");
const userRouter = expres.Router();
const { import_data,edit_user, delete_user } = require("../controllers/userController");

/**
 * Routes For User Import,Edit & Delete..
 * @name get /import
 * @name put /edit/:id
 * @name delete /delete/:id
 */
userRouter.get("/import", import_data);
userRouter.put('/edit/:id',edit_user)
userRouter.delete('/delete/:id',delete_user)

module.exports = {
  userRouter,
};
