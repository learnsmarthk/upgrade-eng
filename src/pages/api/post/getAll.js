// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Get prisma to fetch users
      const data = await prisma.post.findMany();
      console.log(data);
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
