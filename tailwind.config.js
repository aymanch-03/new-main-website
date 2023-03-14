/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Covered By Your Grace"', "cursive"],
        secondary: ['"Bebas Neue"', "cursive"],
      },
      colors: {
        bg: "#F3F2EC",
        darkYellow: "#F09D30",
        purple: "#AF3DF9",
        primary: "#F87171",
      },
      backgroundImage: {
        background:
          "url('../public/Website Images/Page 1 - Landing/City Banner Final.png')",
        beDifferent:
          "url('../public/Website Images/Page 1 - Landing/be very different text.png')",
        backgroundApps:
          "url('../public/Website Images/Page 2 - Apps/Background.png')",
        partnerBg:
          "url('../public/Website Images/Page 3 - Partnerships/BVD logo_subt transp.png')",
        streetCorner:
          "url('../public/Website Images/Page 4 - About/Street Corner background.png')",
        bvdLabs:
          "url('../public/Website Images/Page 7 - Bvdlabs/BVDlabs background.png')",
      },
    },
  },
  plugins: [],
};
