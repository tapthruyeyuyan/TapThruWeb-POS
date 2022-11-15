import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  storeInfo: {},
  orderList: [
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 1,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 2,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 3,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 4,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 5,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 6,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
    {
      orderType: "walk-in",
      discount: 1,
      tips: 0,
      setTime: null,
      id: 7,
      orderItem: [
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Crab Rangoon",
              cnName: "跟蟹角",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
        {
          restaurantInfoId: 2,
          quantity: 1,
          name: " Almond Chicken",
          cnName: "杏仁鸡",
          price: 10.45,
          itemId: 1687,
          orderItemsOptions: [
            {
              name: "w. Lo Mein",
              cnName: "跟捞面",
              price: 1,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 1,
            },
            {
              name: "w. Spring Roll ",
              cnName: "跟上海春卷",
              price: 0,
              groupId: "CategoryOptionGroup_16",
              categoryCnName: "全天优惠",
              categoryId: 38,
              categoryName: "All Day Combo Special Plates",
              quantity: 2,
            },
          ],
          categoryId: 38,
          categoryName: "All Day Combo Special Plates",
          categoryCnName: "全天优惠",
          specialInstructions: null,
          printerName: "[]",
          printable: true,
          mOrderItem: {
            price: 10.45,
          },
          taxExempt: false,
        },
      ],
      splitEvent: null,
      averageState: null,
      information: {
        phoneNumber: null,
        ext: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        firstName: null,
        lastName: null,
        location: null,
        remark: null,
        note: null,
      },
      groupTable: {
        groupId: null,
        groupName: null,
        groupItem: null,
      },
    },
  ],
  infomation: [],
  table: [],
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
