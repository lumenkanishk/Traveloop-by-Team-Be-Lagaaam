import express from "express";

const router = express.Router();

router.post("/", (_req, res) => {

  res.status(201).json({
    success: true,
    message: "Trip created",
  });

});

router.get("/", (_req, res) => {

  res.status(200).json({
    success: true,
    trips: [],
  });

});

export default router;