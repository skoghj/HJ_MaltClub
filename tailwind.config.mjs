/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#DFF1ED",
        100: "##C3E4DD",
        200: "#88C9BB",
        300: "#4CA995",
        400: "#316D5F",
        500: "#16312B",
        600: "#112722",
        700: "#0C1C19",
        800: "#091513",
        900: "#050B09",
        950: "#020403",
      },
      accent: {
        50: "#FFFFFF",
        100: "#FFFDFA",
        200: "#FFFBF5",
        300: "#FFFBF5",
        400: "#FFF9F0",
        500: "#FFF7EA",
        600: "#FFD28A",
        700: "#FFAD29",
        800: "#C27800",
        900: "#613C00",
        950: "#331F00"
      },
      neutral: {
        50: "#FCFAF8",
        100: "#F7F3EE",
        200: "#EEE6DD",
        300: "#E6DACC",
        400: "#DDCDBB",
        500: "#D5C1AA",
        600: "#BC9B76",
        700: "#9A754C",
        800: "#664E33",
        900: "#332719",
        950: "#1B150D"
      },
    },
    spacing: {
      none: "0px",
      xxxs: "4px",
      xxs: "8px",
      xs: "16px",
      s: "20px",
      sm: "20px",
      md: "24px",
      ml: "32px",
      lg: "48px",
      xl: "64px",
      "2xl": "128px",
    },
    fontFamily: {
      title: ["Urbanist", "sans-serif"],
      body: ["Lora", "serif"],
    },
    fontSize: { 
      /* Mobile, Minor Second */
      "body-sm": ["0.875rem", { lineHeight: "1.25rem" }], // 14px, line-height: 20px
      "body-md": ["1rem", { lineHeight: "1.5rem" }], // 16px, line-height: 24px
      "body-lg": ["1.125rem", { lineHeight: "1.75rem" }], // 18px, line-height: 28px

      "h5-mobile": ["1.125rem", { lineHeight: "1.75rem" }], // 18px, line-height: 28px
      "h4-mobile": ["1.25rem", { lineHeight: "1.75rem" }], // 20px, line-height: 28px
      "h3-mobile": ["1.438rem", { lineHeight: "2rem" }], // 23px, line-height: 32px
      "h2-mobile": ["1.625rem", { lineHeight: "2.25rem" }], // 26px, line-height: 36px
      "h1-mobile": ["1.813rem", { lineHeight: "2.5rem" }], // 29px, line-height: 40px

      "display-mobile": ["2.25rem", { lineHeight: "2rem" }], // 36px, line-height: 48px

        /* Tablet, Intermediate Scale (larger sizes for heading and display) */
      "body-sm-tablet": ["1rem", { lineHeight: "1.5rem" }], // 16px
      "body-md-tablet": ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      "body-lg-tablet": ["1.375rem", { lineHeight: "1.875rem" }], // 22px

      "h5-tablet": ["1.5rem", { lineHeight: "2rem" }], // 24px
      "h4-tablet": ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      "h3-tablet": ["2rem", { lineHeight: "2.5rem" }], // 32px
      "h2-tablet": ["2.5rem", { lineHeight: "3rem" }], // 40px
      "h1-tablet": ["3rem", { lineHeight: "3.25rem" }], // 48px

      "display-tablet": ["5rem", { lineHeight: "5.25rem" }], // 52px
      "display-tablet2": ["3rem", { lineHeight: "3.25rem" }], // 52px

      /* Desktop, Perfect Fourth */

      "body-sm-desktop": ["1.125rem", { lineHeight: "1.75rem" }], // 18px, line-height: 28px
      "body-md-desktop": ["1.313rem", { lineHeight: "2rem" }], // 21px, line-height: 32px
      "body-lg-desktop": ["1.75rem", { lineHeight: "2.5rem" }], // 28px, line-height: 40px
    
      "h5-desktop": ["1.75rem", { lineHeight: "2.5rem" }], // 28px, line-height: 40px
      "h4-desktop": ["2.375rem", { lineHeight: "3rem" }], // 38px, line-height: 48px
      "h3-desktop": ["3.188rem", { lineHeight: "4rem" }], // 51px, line-height: 64px
      "h2-desktop": ["4.188rem", { lineHeight: "5rem" }], // 67px, line-height: 80px
      "h1-desktop": ["5.625rem", { lineHeight: "6rem" }], // 90px, line-height: 96px
    
      "display-desktop": ["6.5rem", { lineHeight: "6.25rem" }], // 120px, line-height: 128px
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
  },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries')
    ],
  }}
