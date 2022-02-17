import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    error: '#d73a4a',
    appBarBackGround: 'rgba(36, 41, 46, .7)'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  images: {
    ownerAvatar: {
      width: 50,
      height: 50,
      borderRadius: 8
    }
  }
};

export default theme;