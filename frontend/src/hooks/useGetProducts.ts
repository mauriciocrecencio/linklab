import Api from "@/lib/api";
import { useQuery, useQueryClient, useMutation } from "react-query";

const useAllProducts = () => {
  return useQuery(["products"], Api.getAllProducts);
};




export { useAllProducts };