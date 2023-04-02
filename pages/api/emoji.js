import { Configuration, OpenAIApi } from "openai";
import CircularJSON from "circular-json";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function emoji(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const { prompt } = req.body;
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert movie titles into emoji.${prompt}`,
    temperature: 0.8,
    max_tokens: 4000,
    
  });

  res.json(JSON.parse(CircularJSON.stringify(completion)).data.choices);
}
