import { axiosInstance } from "./axiosService";

export const userService = {
  getUserById: async (id: any) => {
    try {
      const res = await axiosInstance.get(`api/user/get/${id}`);

      return res.data;
    } catch (err) {
      console.log("error:", err);
    }
  },
};
