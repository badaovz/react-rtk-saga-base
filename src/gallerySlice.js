import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: [],
        isLoading: false,
    },
    reducers: {
        getImagesFetch: (state) => {
            state.isLoading = true;
        },
        getImagesSuccess: (state, action) => {
            state.images = action.payload;
            state.isLoading = false;
        },
        getImagesFailure: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getImagesFetch, getImagesSuccess, getImagesFailure } =
    gallerySlice.actions;

export default gallerySlice.reducer;
