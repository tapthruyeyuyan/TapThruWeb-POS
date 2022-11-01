import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  storeInfo: {},
  orderList: {
    orderType: "",
    setTime: "",
    orderItems: [],
    tips: 0,
    discount: 1,
  },
  infomation: [],
  table: [
    {
      id: "001",
      groupName: "Group A",
      groupItem: [
        {
          id: "001-01",
          name: "A1",
          x: 50,
          y: 100,
        },
        {
          id: "001-02",
          name: "A2",
          x: 0,
          y: 10,
        },
      ],
    },
    {
      id: "002",
      groupName: "Group B",
      groupItem: [
        {
          id: "002-01",
          name: "B1",
          x: 50,
          y: 100,
        },
        {
          id: "002-02",
          name: "B2",
          x: 0,
          y: 10,
        },
      ],
    },
  ],
  setupPW: [],
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
      const { type, data, quantity } = action.payload;

      if (type === "reduce") {
        if (data.length === 1) {
          if (state.orderList.orderItems[data[0]].quantity <= quantity) {
            state.orderList.orderItems.splice(data[0], 1);
          } else if (state.orderList.orderItems[data[0]].quantity > quantity) {
            state.orderList.orderItems[data[0]].quantity -= quantity;
          }
        }

        if (data.length === 2) {
          if (
            state.orderList.orderItems[data[0]].orderItemsOptions[data[1]]
              .quantity <= quantity
          ) {
            state.orderList.orderItems[data[0]].orderItemsOptions.splice(
              data[1],
              1
            );
          } else if (
            state.orderList.orderItems[data[0]].orderItemsOptions[data[1]]
              .quantity > quantity
          ) {
            state.orderList.orderItems[data[0]].orderItemsOptions[
              data[1]
            ].quantity -= quantity;
          }
        }
      }

      if (type === "add") {
        if (data.length === 1) {
          state.orderList.orderItems[data[0]].quantity += quantity;
        }
        if (data.length === 2) {
          state.orderList.orderItems[data[0]].orderItemsOptions[
            data[1]
          ].quantity += quantity;
        }
      }
    },

    /**
     * @description: 改变商店类型
     * @return {*}
     */
    changeOrderType: (state, action) => {
      state.orderList.orderType = action.payload;
    },

    /**
     * @description: 修改tips
     * @return {*}
     */
    changeTips: (state, action) => {
      state.orderList.tips = action.payload;
    },

    /**
     * @description: 修改discount
     * @return {*}
     */
    changeDiscount: (state, action) => {
      state.orderList.discount = action.payload;
    },

    /**
     * @description: 修改信息表单
     * @return {*}
     */
    changeInfomation: (state, action) => {
      state.infomation.push(action.payload);
    },

    /**
     * @description: 修改桌子信息
     * @return {*}
     */
    changeTable: (state, action) => {
      state.table = action.payload;
    },

    /**
     * @description: 修改用户信息
     * @return {*}
     */
    changeUserInfo: (state, action) => {
      const { type, data, index } = action.payload;
      if (type === "add") {
        state.setupPW.push(data);
      }

      if (type === "change") {
        state.setupPW[index] = data;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getStoreInfo,
  addOrderItems,
  changeOrderItems,
  changeOrderType,
  changeTips,
  changeDiscount,
  changeInfomation,
  changeTable,
  changeUserInfo,
} = storeInfo.actions;

export default storeInfo.reducer;
