/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [],
  // 解决与ant-design-vue样式冲突
  corePlugins: {
    preflight: false
  }
}

