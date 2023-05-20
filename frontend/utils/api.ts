import { Session } from "@/frontend/types/session";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "/api",
});

interface ErrorResponse {
  error: string;
}

interface GetSessionsOptions {
  short_title?: string;
  status?: string;
}

export async function getSessionList(options?: GetSessionsOptions) {
  try {
    const response = await api.get<Session[]>("sessions", { params: options });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw new Error(axiosError.response?.data?.error || "An error occurred.");
  }
}
