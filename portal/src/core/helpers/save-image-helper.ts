export const calculateScore = async (base64String: string, imageName: string) => {
  try {
    const response = await fetch('http://localhost:5173/compare-images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        userImage: base64String,
        randomImageName: imageName,
      }),
    });

    const data = await response.json();
    console.log('Comparison data:', data);
    return data.response;
  } catch (error) {
    console.error('Error fetching saved images from server', error);
    return null;
  }
};
