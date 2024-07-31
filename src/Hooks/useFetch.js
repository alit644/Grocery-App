import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Api";
import axios from "axios";

export const useFetch = ({ queryKey, URL }) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const res = await axios.get(`${baseURL}/${URL}`);
        return {
          data: res.data,
        };
      } catch (error) {
        console.log(`axios error ${error}`);
      }
    },
  });
};
