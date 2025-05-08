/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: {
        50: "#f0f7ff",
        100: "#e0eefe",
        200: "#badcfd",
        300: "#7dc1fc",
        400: "#38a2f8",
        500: "#0e86e9",
        600: "#0268c7",
        700: "#034f9a",
        800: "#074785",
        900: "#0c3c6e",
        950: "#082649",
      },
      orange: {
        50: "#fbf5ef",
        100: "#f3e2d2",
        200: "#e5c4a2",
        300: "#d8a171",
        400: "#ce8551",
        500: "#be6439",
        600: "#ad4e32",
        700: "#903a2d",
        800: "#772f29",
        900: "#622825",
        950: "#371211",
      },
      sand: {
        50: "#f8f7f4",
        100: "#eeeee6",
        200: "#dddbcb",
        300: "#c7c2aa",
        400: "#b9b196",
        500: "#9f9270",
        600: "#928364",
        700: "#7a6b54",
        800: "#645848",
        900: "#52493c",
        950: "#2b251f",
      },
      dust: {
        50: "#f6f6f6",
        100: "#ebebe9",
        200: "#d6d5d2",
        300: "#bbbab6",
        400: "#a19f99",
        500: "#8c8a83",
        600: "#807d76",
        700: "#6b6763",
        800: "#595753",
        900: "#494745",
        950: "#262524",
      },
      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#1d1d1d",
      },
    },

    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },

    fontSize: {
      "display-desktop": ["6.5rem"],
      "display-mobile": ["3.9rem"],
      "h1-desktop": ["4.8rem"],
      "h1-mobile": ["3.5rem"],
      "h2-desktop": ["4rem"],
      "h2-mobile": ["2.5rem"],
      "h3-desktop": ["2.3rem"],
      "h3-mobile": ["2rem"],
      "h4-desktop": ["1.4rem"],
      "h4-mobile": ["1.2rem"],
      "p-desktop": ["1.1rem"],
      "p-mobile": ["1.02rem"],
      "a-desktop": ["1.1rem"],
      "a-mobile": ["1.02rem"],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    borderRadius: {
      DEFAULT: "1.25rem",
      none: "0px",
      s: "5px",
      sm: "10px",
      m: "15px",
      md: "30px",
      lg: "40px",
      full: "9999px",
    },
    boxShadow: {
      drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)",
      drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.50)",
      inner25: "0 4px 4px 0 rgb(0 0 0 / 0.25) inset",
      inner50: "0 4px 4px 0 rgb(0 0 0 / 0.50) inset",
    },

    extend: {
      spacing: {
        gap: "40px", // Keeps the 30px gap
        "mobil-bottom": "100px", // Slightly reduced bottom spacing for mobile
        "desktop-bottom": "120px", // Reduced bottom spacing for desktop
        "mobil-top": "100px", // Reduced top spacing for mobile
        "desktop-top": "120px", // Reduced top spacing for desktop
      },
      fontSize: {
        large: "1.25rem", // eller vælg en anden størrelse som passer dig
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
