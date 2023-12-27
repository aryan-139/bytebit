export async function handleCompress(data, mediaAdded) {
  try {
    if (!mediaAdded) {
      alert('Please add a media file first in .txt format only');
      console.error('Error: No media added');
      return null;
    }
    //console.log('Compress button clicked');
    const response = await fetch('http://localhost:3001/api/compress/details', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Response:', data);
      if (data) {
        return data;
      }
      else {
        console.error('Error: Invalid response from the server');
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
