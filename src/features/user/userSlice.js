import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


export const fetchAddress = createAsyncThunk('user/fetchAdress', async function() {
  const positionObj = await getPosition();

  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  const addressObj = await getAddress(position);
  const address = 
  `
    ${addressObj?.locality},
    ${addressObj?.city} ${addressObj?.postcode},
    ${addressObj?.countryName}
  `;
  //payload of the fullfilled state
  return { position, address };
})

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  adress: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
     state.username = action.payload;
    },
  },
  extraReducers: (builder) => 
    builder
    .addCase(fetchAddress.pending, (state, action) => 
    {
      state.status = 'loading';
    })
    .addCase(fetchAddress.fulfilled, (state, action) => 
    {
      state.position = action.payload.position;
      state.adress = action.payload.address;
      state.state = 'idle';
    })
    .addCase(fetchAddress.rejected, (state, action) => 
    {
      state.status = 'error';
      state.error = 'You denied to use Geolocation to get your Adress'
    })
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state) => state.user.username;