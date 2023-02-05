// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    // Get postId from request url /update?postId=xxx
    const { postId } = req.query;
    const { title, body, answer } = req.body;

    try {
      // Create Post
      const data = await prisma.post.update({
        where: {
          id: postId,
        },
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
