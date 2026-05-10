import { Request, Response } from "express";

import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator";

import {
  registerUser,
  loginUser,
} from "../services/auth.service";

export async function register(
  req: Request,
  res: Response
) {

  try {

    const validatedData =
      registerSchema.parse(req.body);

    const user =
      await registerUser(validatedData);

    res.status(201).json({
      success: true,
      user,
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
}

export async function login(
  req: Request,
  res: Response
) {

  try {

    const validatedData =
      loginSchema.parse(req.body);

    const result =
      await loginUser(validatedData);

    res.status(200).json({
      success: true,
      ...result,
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
}