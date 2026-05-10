import express from "express";

const router = express.Router();

router.get("/test", (_req, res) => {
  res.json({
    success: true,
    message: "Auth route working",
  });
});

export default router;