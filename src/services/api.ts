import axios from "axios"

const baseURL = import.meta.env.VITE_API

export const api = axios.create({ baseURL })

export function handleResponse(response: any) {
  return {
    data: response.data,
    errorMessage: null,
  }
}

export function handleError(error: any) {
  console.error(error);
  return {
    data: null,
    errorMessage: error.response?.data?.message || "An unexpected error occurred.",
  }
}
