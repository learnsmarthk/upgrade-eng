// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    try {
      // Get prisma to fetch posts
      const data = await prisma.user.create({
        data: {
          email: req.body.email,
          name: req.body.name,
        },
      });
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
