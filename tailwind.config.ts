import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00d8b7",

          secondary: "#00afe4",

          accent: "#ee8200",

          neutral: "#000910",

          "base-100": "#edffff",

          info: "#00c1ff",

          success: "#00ef93",

          warning: "#ff8e00",

          error: "#ff7282",
          body: {
            "background-color": "#e3e6e6", //this way we can add a dark theme with a dift
          },
        },
      },
    ],
  },
};
export default config;
