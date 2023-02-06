const API_URL = import.meta.env.VITE_API_URL;

export async function useFetch(link, options = {}) {
  let token;
  try {
    token = localStorage.getItem("token");
  } catch {}
  if (token) {
    if (!options["headers"]) {
      options["headers"] = {};
    }
    options["headers"]["Authorization"] = "Token " + token;
  }
  const response = await fetch(`${API_URL}/${link}`, options);
  const result = await response.json();
  return result;
}
