// utils.js
import {jwtDecode} from 'jwt-decode';

export const getUserIdFromAccessToken = () => {
  try {
    // Retrieve the access token from local storage
    const accessToken = localStorage.getItem('token');

    // Check if the token exists
    if (!accessToken) {
      console.error('Access token not found in local storage');
      return null;
    }

    // Decode the token
    const decodedToken = jwtDecode(accessToken);

    // Assuming your user ID is stored in the 'sub' field of the token payload
    const userId = decodedToken.sub;

    return userId;
  } catch (error) {
    console.error('Error decoding access token:', error);
    return null;
  }
};
