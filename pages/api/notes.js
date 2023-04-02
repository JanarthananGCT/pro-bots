import { Configuration, OpenAIApi } from "openai";
import CircularJSON from "circular-json";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function chatGPT(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const { prompt } = req.body;
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `What are 7 key points I should know when studying ${prompt}?`,
    temperature: 0.3,
    max_tokens: 4000,
    
  });

  res.json(JSON.parse(CircularJSON.stringify(completion)).data.choices);
}
