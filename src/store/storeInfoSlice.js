import { createSlice, current } from "@reduxjs/toolkit";

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

    /**
     * @description: 修改目录
     * @return {*}
     */
    changeOrderItems: (state, action) => {
      const { type, data } = action.payload;
      if (type === "reduce") {
        if (data.length === 1) {
          if (state.orderList.orderItems[data[0]].quantity === 1) {
            state.orderList.orderItems.splice(data[0], 1);
          } else if (state.orderList.orderItems[data[0]].quantity > 1) {
            console.log(2);
            state.orderList.orderItems[data[0]].quantity--;
          }
        }

        if (data.length === 2) {
          if (state.orderList.orderItems[data[0]].orderItemsOptions[data[1]].quantity === 1) {
            state.orderList.orderItems[data[0]].orderItemsOptions.splice(data[1], 1);
          } else if (state.orderList.orderItems[data[0].orderItemsOptions[data[1]]].quantity > 1) {
            state.orderList.orderItems[data[0].orderItemsOptions[data[1]]].quantity--;
          }
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStoreInfo, addOrderItems, changeOrderItems } = storeInfo.actions;

export default storeInfo.reducer;
