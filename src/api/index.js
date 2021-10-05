import Router from "express";
import books from "./books";
import users from "./users";
const router = new Router();

router.use("/books", books);
router.use("/user", users);
module.exports = router;
