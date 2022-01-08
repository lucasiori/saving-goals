const theme = {
  breakpoints: {
    xs: '360px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xls: '1440px',
  },
  width: {
    fluid: '100vw',
    maxWidth: '1440px',
  },
  colors: {
    blueGray: {
      '10': '#f4f8fA',
      '50': '#e9eef2',
      '100': '#cbd5dc',
      '300': '#8a9ca9',
      '400': '#708797',
      '600': '#4d6475',
      '900': '#1e2a32',
    },
    default: '#fff',
    dark: '#000',
    primary: '#1b31a8',
    secondary: '#0079ff',
  },
  font: {
    families: {
      heading: 'Rubik',
      content: 'Work Sans',
    },
    sizes: {
      xxxs: '0.75rem',
      xxs: '0.875rem',
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2rem',
    },
    weights: {
      regular: 400,
      medium: 400,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {
      md: 1,
      lg: 1.5,
    },
  },
  spacings: {
    xxxs: '0.25rem',
    xxs: '0.5rem',
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xlg: '2.5rem',
    xxlg: '3rem',
    xxxlg: '3.5rem',
  },
  borders: {
    width: {
      sm: '1px',
      lg: '2px',
    },
    radius: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '30px',
      circle: '50%',
    },
  },
};

export default theme;
