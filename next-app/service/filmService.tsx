import { axiosInstance } from "./axiosService";

interface GetFilmsProps {
  limit?: number;
  offset?: number;
  name?: string;
}

export const FilmService = {
  getFilms: async ({ limit = 10, offset = 0, name = "" }: GetFilmsProps) => {
    try {
      const res = await axiosInstance.get(
        `api/films/get/all?limit=${limit}&offset=${offset}&name=${name}`
      );

      return res.data;
    } catch (err) {
      console.log("error:", err);
    }
  },
};
