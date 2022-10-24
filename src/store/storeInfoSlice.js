import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeInfo: {},
  orderList: {
    orderItems: [],
  },
};

export const storeInfo = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /**
     * @description: 获取商户信息
     * @return {*}
     */
    getStoreInfo: (state, action) => {
      state.storeInfo = action.payload;
    },
    /**
     * @description: 添加目录
     * @return {*}
     */
    addOrderItems: (state, action) => {
      // console.log(action.payload);
      // console.log(state.orderList.orderItems);
      state.orderList.orderItems.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStoreInfo, addOrderItems } = storeInfo.actions;

export default storeInfo.reducer;
