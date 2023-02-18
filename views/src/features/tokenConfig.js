/**
 * This function to Setup config/headers and token
 * it gets the token from our main state and attach it to the header
 */
export const tokenConfig = (token = null , optionalParams = null) => {
  // Get token from localstorage
  const authToken = token ? token : null;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {},
  };

  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }

  if (optionalParams) {
    config.params = optionalParams;
  }

  return config;
};