const API_KEY = 'AIzaSyAYqJV_8or3lVD0AsO9bTtEFzkiVBJQgxM'
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

const histroy = [];

export async function getApiResponse(url, inputValue) {
  histroy.push({
    role: 'user',
    parts: [{text: "hello"}]
  });
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({contents: histroy}),
    });
     const data = await response.json();
     //const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
     //return apiResponse;
     //console.log(apiResponse);

     if(!response.ok) throw new Error(data.error.message);

     console.log(data);
  } catch (error) {
    console.log(error);
  }
}