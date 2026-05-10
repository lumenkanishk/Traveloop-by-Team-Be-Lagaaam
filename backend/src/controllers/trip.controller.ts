import { Request, Response } from "express";

export const createTrip = async (
  req: Request,
  res: Response
) => {

  try {

    res.status(201).json({
      success: true,
      message: "Create trip working",
      body: req.body,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getTrips = async (
  _req: Request,
  res: Response
) => {

  try {

    res.status(200).json({
      success: true,
      trips: [],
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};