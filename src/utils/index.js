let backendHost;
const apiVersion = "v1";

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:3001";
} else {
  backendHost = "https://thenewappapi.herokuapp.com";
}

export const API_URL = `${backendHost}/api/${apiVersion}`;
export const jwt = JSON.parse(localStorage.getItem("jwt"));
export const signOut = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("auth_token");
  window.location.replace("/");
};
