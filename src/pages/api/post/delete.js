// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    // Get postId from request url /deletePost?postId=xxx
    const { postId } = req.query;

    try {
      // Create Post
      const data = await prisma.post.delete({
        where: {
          id: postId,
        },
      });

      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
