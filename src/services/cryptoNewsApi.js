import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoNewsHeader = {
    method: 'GET',
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
    headers: {
      'X-RapidAPI-Key': 'a7e9c6dbe2msh9e228fd6f48521ep17a464jsncacc10badb9e',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  };
  
  const createRequest = (url) => ({url, headers: cryptoNewsHeader})

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk' }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
            
                    }),
                }),
              });

    export const {useGetCryptoNewsQuery} = cryptoNewsApi;          
            