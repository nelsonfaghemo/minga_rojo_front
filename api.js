let apiUrl = "http://localhost:8000/";

if (import.meta.env.NODE_ENV === "production") {
  apiUrl = import.meta.process.env.REACT_APP_API;
}

export default apiUrl;
