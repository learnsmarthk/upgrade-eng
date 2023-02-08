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
    const { questionsArray } = req.body;
    console.log(questionsArray);

    const dataValidation = checkValidDataArray(questionsArray);
    console.log(dataValidation);

    // Validate input data
    if (dataValidation === false) {
      return res.status(500).json({
        message: "receive empty input, please review your data in csv",
      });
    }

    try {
      // Create Post
      const data = await prisma.post.createMany({
        data: questionsArray,
      });

      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

const checkValidDataArray = (dataArray) => {
  let booleanResult = true;
  dataArray?.forEach((element) => {
    if (!element.question) return (booleanResult = false);
  });

  return booleanResult;
};
