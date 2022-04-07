import { Platform, Dimensions } from "react-native";

const ratingWidth = 40;
const parentPadding = 8;
const windowWidth = Dimensions.get('window').width;
const reviewDetailsContainerPaddingLeft = 12;


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

export const reviewStyles = {
  
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: parentPadding,
    paddingTop: 8,
    width: windowWidth
  },

  rating: {
    width: ratingWidth,
    height: 40,
    borderWidth: 2,
    borderRadius: ratingWidth / 2,
    borderColor: theme.colors.primary,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  reviewDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 2,
    paddingLeft: reviewDetailsContainerPaddingLeft,
  },

  detailsText: {
    width: 0,
    paddingTop: 2,
    minWidth: windowWidth - ratingWidth - parentPadding * 2 - reviewDetailsContainerPaddingLeft
  }
};

export default theme;