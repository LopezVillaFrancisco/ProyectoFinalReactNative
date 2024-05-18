import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shop', 
    initialState: {
        value : { 
            marcaSeleccionada: "",
            nombreZapatillaSeleccionada:'',
        }
    },
    reducers: {
        setMarcaSeleccionada: (state, {payload}) => {
            state.value.marcaSeleccionada = payload
        },
        setNombreZapatillaSeleccionada: (state, {payload}) => {
            state.value.nombreZapatillaSeleccionada = payload
        },
        resetMarcaSeleccionada: (state) => {
            state.value.marcaSeleccionada = '';
        },
        resetNombreZaptilla: (state) => {
            state.value.nombreZapatillaSeleccionada = '';
        },
    }
}) 

export const { setMarcaSeleccionada, setNombreZapatillaSeleccionada, resetMarcaSeleccionada,resetNombreZaptilla } = shopSlice.actions 

export default shopSlice.reducer;
