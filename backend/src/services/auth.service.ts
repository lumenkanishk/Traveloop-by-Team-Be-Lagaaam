import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import prisma from "../config/db";

const JWT_SECRET =
  process.env.JWT_SECRET || "secret";

export async function registerUser(data: any) {

  const existingUser =
    await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword =
    await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      city: data.city,
      country: data.country,
    },
  });

  return user;
}

export async function loginUser(data: any) {

  const user =
    await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const validPassword =
    await bcrypt.compare(
      data.password,
      user.password
    );

  if (!validPassword) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user,
  };
}