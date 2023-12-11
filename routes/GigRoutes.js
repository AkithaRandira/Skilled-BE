import { Router } from "express";
import {
  addGig,
  checkGigOrder,
  editGig,
  getGigData,
  getUserAuthGigs,
  searchGigs,
  addReview,
  deleteGig,
  getAllGigs
} from "../controllers/GigsControllers.js";
import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { isAdmin } from "../middlewares/AdminMiddleware.js";

const upload = multer({ dest: "uploads/" });

const gigRoutes = Router();

gigRoutes.post("/add", verifyToken, upload.array("images"), addGig);
gigRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs);
gigRoutes.get("/get-gig-data/:gigId", getGigData);
gigRoutes.put("/edit-gig/:gigId", verifyToken, upload.array("images"), editGig);
gigRoutes.delete("/delete-gig/:gigId",  deleteGig);
gigRoutes.get("/search-gigs", searchGigs);
gigRoutes.post("/add-review", verifyToken, addReview);
gigRoutes.get("/check-gig-order/:gigId", verifyToken, checkGigOrder);
gigRoutes.post("/add-review/:gigId", verifyToken, addReview);

gigRoutes.get("/get-all-gigs", verifyToken,isAdmin, getAllGigs);

export default gigRoutes;