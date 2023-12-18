'use client'

import { QueryClient, QueryClientProvider } from "react-query";
import api from "./api";


const pathSeparator = "/";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) =>
        api
          .get(queryKey.join(pathSeparator))
          .then(({ data }) => data),
    },
  },
});

// @ts-ignore
export const ReactQueryProvider = ({children}) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)
