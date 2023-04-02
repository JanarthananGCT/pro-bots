import { Configuration, OpenAIApi } from "openai";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function dallE(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const { prompt } = req.body;
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createImage({
    prompt: prompt,
    n: 3,
    size: "1024x1024",
  });
  console.log(completion.data.data);
  res.json(completion.data.data)
}
