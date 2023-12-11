/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontWeight: {
      "extra-light": 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      colors: {
        beaver: "#9e7f66",
        "cod-gray": "#111",
        mirage: "#17192b",
        "ebony-clay": "#242b37",
        "shuttle-gray": "5c6779",
      },
      backgroundImage: {
        "hero-mobile":
          "url('images/homepage/hero-bg-mobile.jpg')",
        "ready-mobile":
          "url('images/homepage/ready-bg-mobile.jpg')",
        "hero-tablet":
          "url('images/homepage/hero-bg-tablet.jpg')",
        "ready-tablet":
          "url('images/homepage/ready-bg-tablet.jpg')",
        "hero-desktop":
          "url('images/homepage/hero-bg-desktop.jpg')",
        "ready-desktop":
          "url('images/homepage/ready-bg-desktop.jpg')",
        "hero-mobile-booking":
          "url('images/booking/hero-bg-mobile.jpg')",
        "hero-tablet-booking":
          "url('images/booking/hero-bg-tablet.jpg')",
        "hero-desktop-booking":
          "url('images/booking/hero-bg-desktop.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};