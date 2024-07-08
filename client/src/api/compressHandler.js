export async function handleCompress(data, mediaAdded) {
  try {
    if (!mediaAdded) {
      alert('Please add a media file first in .txt format only');
      console.error('Error: No media added');
      return null;
    }
    else{
      console.log(data);
    }
    const response = await fetch('http://localhost:3001/api/compress/details', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      if (data) {
        return data;
      }
      else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
