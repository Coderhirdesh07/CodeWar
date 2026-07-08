import express from "express";
import { handleUserAccountDelete,handleUserSignup,handleUserLogout,handleCurrentUserInfo,handleUserLogin } from "../controllers/user.controllers";

const router = express.Router();

router.post("/login",handleUserLogin);
router.post("/signup",handleUserSignup);
router.post("/logout",handleUserLogout);
router.get("/profile/:id",handleCurrentUserInfo);
router.delete("/delete/:id",handleUserAccountDelete);





export default router;