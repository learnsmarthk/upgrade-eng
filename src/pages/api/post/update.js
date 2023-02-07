// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    // Get postId from request url /update?postId=xxx
    const { postId } = req.query;
    const { body, isPublic } = req.body;
    console.log({ body, isPublic });

    try {
      // Create Post
      const data = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          body,
          isPublic,
        },
      });

      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
