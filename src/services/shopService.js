import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urlDb } from '../database/realTimeDatabase'; 

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlDb }),
  endpoints: (builder) => ({
    getMarcas: builder.query({
      query: () => 'marcas.json',
    }),
    getZapatillasByMarca: builder.query({
      query: (marca) => `zapatillas.json?orderBy="marca"&equalTo="${marca}"`,
      transformResponse: (response) =>{
        const newResponse = Object.values(response)
        return newResponse
      }
    }),
    getZapatillasById: builder.query({
      query: (id) => `zapatillas.json?orderBy="id"&equalTo=${id}`, 
      transformResponse: (response) =>{
        const newResponse = Object.values(response) 
        if(newResponse.length)return newResponse[0] 
        return newResponse
        
      }
    }),
  }),
});

export const {
  useGetMarcasQuery, useGetZapatillasByMarcaQuery,useGetZapatillasByIdQuery} = shopApi;
