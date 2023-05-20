import axios from "axios";

export type SessionResponse = {
  id: string;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  created_at: string;
  program: {
    id: string;
    display_title: string;
    thumbnail_img_url: string;
    short_title: string;
  }[];
};

class DataRepository {
  private externalService = axios.create({
    baseURL: process.env.EXTERNAL_API_BASE_URL,
    timeout: 180 * 1000,
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    },
  });

  async getSessionList() {
    try {
      const response = await this.externalService.get<SessionResponse[]>(
        `sessions`
      );

      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data from the external API.");
    }
  }
}

export const dataRepository = new DataRepository();
