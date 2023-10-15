import express from 'express';
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourse, getCourseLectures } from '../controllers/courseController.js';
import singleUpload from '../middlewares/multer.js';
import { authorizeAdmin, isAuthenticated ,authorizeSubscribers} from '../middlewares/auth.js';

const router = express.Router();
// get all course 
router.route("/courses").get(getAllCourse)
// Create new  course-  only admin 
router.route("/createcourse").post(isAuthenticated,authorizeAdmin,singleUpload,createCourse)
 //
 router.route("/course/:id")
 .get(isAuthenticated,authorizeSubscribers,getCourseLectures)
 .post(isAuthenticated,authorizeAdmin,singleUpload,addLecture)
 .delete(isAuthenticated,authorizeAdmin,deleteCourse)
 //delete lecture
 router.route("/lecture").delete(isAuthenticated,authorizeAdmin,deleteLecture)
export default router; 