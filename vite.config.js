import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 路径别名
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },

  // less 配置
  css: {
    preprocessorOptions: {
      less: {
        charset: true,
        // less全局变量
        // additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
});
