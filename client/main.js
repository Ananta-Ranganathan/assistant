const converter = new showdown.Converter();

async function sendRequest() {
    const requestText = document.getElementById('requestText');
    const model = document.getElementById('dropdown').value;
    let url = 'http://localhost:4000/api/proxy';
    let data = {
      model: model,
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
      const html = converter.makeHtml(responseData);
      document.getElementById("responseText").innerHTML = html;
    } catch (error) {
      console.log('There was a problem with your fetch operation: ', error);
    }
  }
  