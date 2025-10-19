import axiosClient from "../api/axios";

export const registerUser = async (userData) => {
  await axiosClient.get("/sanctum/csrf-cookie");

  // දැන් register request එක යවනවා
  const response = await axiosClient.post("/api/register", userData);
  return response.data;
};
