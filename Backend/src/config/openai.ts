import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const isPlaceholder = !apiKey || apiKey.includes('your_openai') || apiKey.length < 15;

export const isOpenAIConfigured = (): boolean => !isPlaceholder;

const openai = new OpenAI({
  apiKey: !isPlaceholder ? apiKey : 'sk-placeholder-key-for-initialization-only'
});

export default openai;
