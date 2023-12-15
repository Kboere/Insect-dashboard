// Add the submit button event listener
document.getElementById('submitButton').addEventListener('click', handleSubmit);

function handleFile(file) {
  if (file) {
    const formData = new FormData();
    formData.append('excelFile', file);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data, e.g., update the graph
        console.log('Server response:', data);
        // Add your D3.js visualization code here using the 'data' variable
        createVisualization(data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  }
}

function handleSubmit() {
  // Trigger file upload when the submit button is clicked
  const fileInput = document.getElementById('excelFileInput');
  const file = fileInput.files[0];
  handleFile(file);
}

function createVisualization(data) {
  // Your D3.js visualization code here
}