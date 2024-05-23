import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urlDb } from '../database/realTimeDatabase'; 

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlDb }), 
  tagTypes: ["profileImageGet"],
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
        return null
        
      }
    }), 
    postOrder: builder.mutation({
      query: ({...order}) =>({
          url:'orders.json', 
          method:'POST',
          body: order
      }),  
    }),
      getProfileImage: builder.query ({
        query: (localId) => `profileImages/${localId}.json`, 
        providesTags:["profileImageGet"]
      }), 
      postProfileImage: builder.mutation({
        query: ({image,localId}) => ({
          url:`profileImages/${localId}.json`, 
          method: 'PUT',
          body: {
            image
          }
        }), 
        invalidatesTags: ["profileImageGet"]
      })
    })
  })

export const { 
  useGetMarcasQuery, 
  useGetZapatillasByMarcaQuery,
  useGetZapatillasByIdQuery,
  usePostOrderMutation, 
  usePostProfileImageMutation,  
  useGetProfileImageQuery
} = shopApi;
