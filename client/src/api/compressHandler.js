export async function handleCompress(data, mediaAdded) {
  try {
    if (!mediaAdded) {
      alert('Please add a media file first in .txt format only');
      console.error('Error: No media added');
      return null;
    }
    //console.log('Compress button clicked');
    const response = await fetch('http://localhost:3001/api/compress', {
      method: 'POST',
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Response:', data);
      if (data.parsedData) {
        // Successfully received parsed data, return the parsed data
        return data.parsedData;
      } else {
        // Handle the case where the server response doesn't contain the expected data
        console.error('Error: Invalid Response from the server');
        return null;
      }
    } else {
      console.error('Error:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
