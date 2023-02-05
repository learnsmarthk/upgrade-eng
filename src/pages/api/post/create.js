// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, body, answer } = req.body;

    try {
      // Create Post
      const data = await prisma.post.create({
        data: {
          title,
          body,
          answer,
        },
      });

      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
