// fileInputHandler.js
const handleFileInputChange = async (e, setMediaAdded) => {
  const file = e.target.files[0];

  try {
    const formData = new FormData();
    formData.append('file', file);

    setMediaAdded(true);
    console.log('File uploaded successfully');

    const response = await fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // File uploaded successfully
      const data = await response.json();
      //console.log('File uploaded successfully', data.content);
      return data.content;
    } else {
      // Error occurred while uploading the file
      console.error('Error uploading file');
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default handleFileInputChange;
