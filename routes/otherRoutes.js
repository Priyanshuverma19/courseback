import express from 'express';

import {isAuthenticated,authorizeAdmin} from "../middlewares/auth.js"
import { contact, courseRequest, getDashbordStats } from '../controllers/otherController.js';

const router = express.Router();
//contect form
router.route("/contact").post(contact);
//Request form
router.route("/courserequest").post(courseRequest);
//Get Admin Dashbord Stats

router.route("/admin/stats").get(isAuthenticated,authorizeAdmin,getDashbordStats)
export default router;