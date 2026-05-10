import express from "express";

import prisma from "../config/db";

const router = express.Router();

router.get("/", async (_req, res) => {

  try {

    const activities =
      await prisma.activity.findMany({
        take: 30,
      });

    res.json({
      success: true,
      activities,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

export default router;