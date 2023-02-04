const API_URL = import.meta.env.VITE_API_URL;

export async function useFetch(link, options = {}) {
  const response = await fetch(`${API_URL}/${link}`, options);
  const result = await response.json();
  return result;
}
