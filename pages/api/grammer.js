import { Configuration, OpenAIApi } from "openai";
import CircularJSON from "circular-json";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function grammer(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const { prompt } = req.body;
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Correct this to standard English :  ${prompt}`,
    temperature: 0,
    max_tokens: 4000,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  res.json(JSON.parse(CircularJSON.stringify(completion)).data.choices);
}
