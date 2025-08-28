

export type Message = {
  id: number;
  role: string;
  text: string;
}

/*export async function getApiResponse(apiUrl:string, apiKey:string, messages: Message[]) {
  const payload = {
    contents: [
      {
        parts: [
          { text: messages.filter(message => message.sender !== 'bot') },
        ],
      },
    ],
  };

  const options: RequestInit  = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': String(apiKey),
    },
    body: JSON.stringify(payload)
  };

  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json()

    if(!response.ok) throw new Error('failed');

    console.log(data);
    
  } catch (error) {
    console.log(error);
  }
}*/

/*import fetch from 'node-fetch';

const GEMINI_API_URL = 'https://api.gemini.com/v1/endpoint'; // Replace with the actual endpoint
const API_KEY = 'your-api-key-here'; // Replace with your API key

async function fetchGeminiData(): Promise<void> {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`, // Add authorization if required
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Gemini API Response:', data);
  } catch (error) {
    console.error('Failed to fetch data from Gemini API:', error);
  }
}

fetchGeminiData();*/
