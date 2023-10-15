import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetpassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetpassword, updateProfile, updateUserRole, updateprofilepicture } from "../controllers/userController.js";
import {authorizeAdmin, isAuthenticated}  from "../middlewares/auth.js"
import singleUpload from "../middlewares/multer.js";
const router= express.Router();
//to register anew user
router.route("/register").post(singleUpload,register);
//login
router.route("/login").post(login);
//Logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated,  getMyProfile);

// Delete my profile

router.route("/me").delete(isAuthenticated,deleteMyProfile);
//Change Password
router.route("/changepassword").put(isAuthenticated,  changePassword);
//Update profile
router.route("/updateprofile").put(isAuthenticated,  updateProfile);
//update profile picture
router.route("/updateprofilepicture").put(isAuthenticated, singleUpload, updateprofilepicture);
// forget passwod
router.route("/forgetpassword").post( forgetpassword);
// resetpassword
router.route("/resetpassword/:token").put( resetpassword,);
//Add toplaylist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist );
//Remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist );

//Admin routes
router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers);

router.route("/admin/users/:id")
.put(isAuthenticated,authorizeAdmin,updateUserRole)
.delete(isAuthenticated,authorizeAdmin,deleteUser);
export default router; 