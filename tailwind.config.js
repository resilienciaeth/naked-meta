module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/banner.png')",
        banner1: "url('/assets/banner1.png)",
        banner2: "url('/assets/banner2.png)",
        banner3: "url('/assets/banner3.png)",
        bannermobile: "url('/assets/bannermobile.png')",
        bannermobile1: "url('/assets/bannermobile1.png')",
        bannermobile2: "url('/assets/bannermobile2.png')",
        bannermobile3: "url('/assets/bannermobile3.png')",
        background1: "url('/assets/image1.png')",
        card1: "url('/assets/card1.png')",
        cardmobile1: "url('./assets/cardmobile1.png')",
        cardmobile2: "url('./assets/cardmobile2.png')",

      },
      colors: {
        'regal-blue': '#243c5a',
        'nft-dark': '#24252D',
        'nft-gray-1': '#E3E1E3',
        'nft-gray-2': '#888888',
        'nft-gray-3': '#4F4F4F',
        'nft-black-1': '#2D2E36',
        'nft-black-2': '#1B1A21',
        'nft-black-3': '#2A2D3A',
        'nft-black-4': '#24252D',
        'nft-red-violet': '#DA18A3',
        'file-active': '#2196f3',
        'file-accept': '#00e676',
        'file-reject': '#ff1744',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
        'meta-1': '#888AB8',
        'meta-3': '#313044',
        'meta-gray': '#EFF5F8',
        'meta-gray-2': '#E8F1F2',
        'meta-gray-3': '#D1D6D8',
      },
      width: {
        60: '60px',
        125: '125px',
        215: '215px',
        218: '218px',
        246: '246px',
        288: '288px',
        357: '357px',
        308: '308px',
        362: '362px',
        430: '430px',
        474: '474px',
        557: '557px',
        628: '628px',
        1538: '1538px',
        1822: '1822px',
        2100: '2100px',
        31: '30%',

      },
      minWidth: {
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
      },
      minHeight: {
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
        380: '380px',
      },
      height: {
        0: '0px',
        60: '60px',
        126: '126px',
        220: '220px',
        275: '275px',
        300: '300px',
        311: '311px',
        317: '317px',
        362: '362px',
        380: '380px',
        420: '420px',
        477: '477px',
        537: '537px',
        557: '557px',
        628: '628px',
        662: '662px',
        890: '890px',
        1822: '1822px',

      },
      margin: {
        110: '28rem',
        120: '32rem',
        130: '40rem',
        140: '50rem',

      },
      inset: {
        45: '45px',
        65: '65px',
        66: '66px',
        83: '83px',
        95: '95px',
        100: '28rem',
        102: '102px',
        105: '105px',
        138: '138px',
        139: '139px',
        192: '192px',
        222: '222px',
        225: '225px',
        258: '258px',
        278: '278px',
        283: '283px',
        345: '345px',
        380: '380px',
        420: '420px',
        460: '460px',
        489: '489px',
        503: '503px',
        537: '537px',
        640: '640px',
        808: '808px',
        843: '843px',
        1384: '1384px',
        1353: '1353px',
        1188: '1188px',
        1250: '1250px',
        1450: '1450px',
      },

      maxWidth: {
        2100: '2100px',
      },

      spacing: {
        65: '65px',
      },
      flex: {
        2: '2 2 0%',
      },
      lineHeight: {
        70: '70px',
      },
      zIndex: {
        '-5': '-5',
        0: '0',
        1: '1',
      },
    },
    screens: {
      lg: { max: '1800px' },
      nm: { max: '1300px' },
      md: { max: '850px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      minmd: '1700px',
      minlg: '2100px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      finlandica: ['Finlandica', 'italic'],
      integral: ['Integral'],
      sfpro: ['sfpro', 'sans-serif'],

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
