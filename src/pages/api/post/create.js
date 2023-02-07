// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../prisma/client";
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  // Check if request provide jwt
  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  });

  if (!token) {
    return res.status(500).json({
      message: "unauthorized",
    });
  }

  // process mutation
  if (req.method === "POST") {
    const { body, isPublic } = req.body;

    try {
      // Create Post
      const data = await prisma.post.create({
        data: {
          isPublic,
          body,
        },
      });

      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
