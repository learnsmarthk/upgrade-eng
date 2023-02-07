// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../prisma/client";

export default async function handler(req, res) {
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
