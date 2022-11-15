import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  storeInfo: {},
  orderList: [],
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

    /**
     * @description: 保存信息
     * @return {*}
     */
    changeOrderList: (state, { payload }) => {
      const { id } = payload;
      let bol = false;
      if (JSON.stringify(state.orderList) === "[]") {
        bol = true;
      } else {
        for (let i = 0; i < state.orderList.length; i++) {
          if (state.orderList[i].id === id) {
            state.orderList[i] = { ...payload };
            bol = false;
            break;
          } else {
            bol = true;
          }
        }
      }

      if (bol) {
        state.orderList.push({ ...payload });
      }
    },

    /**
     * @description: 保存分单
     * @return {*}
     */
    saveSpiltEvent: (state, { payload }) => {
      const { id, data, averageState } = payload;
      for (let i = 0; i < state.orderList.length; i++) {
        if (state.orderList[i].id === id) {
          // console.log(state.orderList[i]);
          state.orderList[i].splitEvent = data;
          state.orderList[i].averageState = averageState;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStoreInfo, changeTips, changeDiscount, changeInfomation, changeTable, changeUserInfo, changeOrderList, saveSpiltEvent } =
  storeInfo.actions;

export default storeInfo.reducer;
