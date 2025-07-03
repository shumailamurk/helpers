import { createSlice } from '@reduxjs/toolkit';
import ServiceDummy from '../utilities/serviceDummy';

const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    list: ServiceDummy
  },
  reducers: {}
});

export default serviceSlice.reducer;
export const selectServices = (state) => state.services.list; 