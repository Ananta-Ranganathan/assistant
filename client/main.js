const requestText = document.getElementById('requestText');

async function sendRequest() {
    let url = 'http://localhost:4000/api/proxy';
    let data = {
      model: "deepseek-coder:6.7b",
      prompt: requestText.value,
      stream: false
    };
    console.log(JSON.stringify(data))
    try {
      const response = await fetch(
        url,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }
        );
      if (!response.ok) throw new Error('Network error');
      
      const responseData = await response.json();
      console.log(responseData);
      document.getElementById("responseText").innerText = JSON.stringify(responseData, null, 2); // Pretty-print the JSON data
    } catch (error) {
      console.log('There was a problem with your fetch operation: ', error);
    }
  }
  