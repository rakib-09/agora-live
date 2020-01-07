import {StyleSheet, Dimensions} from 'react-native';
import {font, colors} from './theme';

let {width, height} = Dimensions.get('window');

//  let width = 1029;
//  console.log(width);

let brakePointXS = width > 0 && width < 418;
let brakePointSM = width > 417 && width < 768;
let brakePointMD = width > 767 && width < 1024;
let brakePointLG = width > 1023;

const common = StyleSheet.create({
  // conversations

  conversationProductCard: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  conversationsContent: {
    padding: 15,
    paddingLeft: 30,
    paddingBottom: 0,
  },
  dateTime: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  senderContent: {
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  senderContentWrap: {
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 25,
    position: 'relative',
    borderRadius: 25,
    borderTopLeftRadius: 0,
    // borderWidth:.5,
    elevation: 3,
    borderColor: colors.PRIMARY_LIGHT,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  senderImageWrap: {
    width: 35,
    height: 35,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    position: 'absolute',
    top: -0.5,
    left: -15,
    // borderWidth:.5,
    borderColor: colors.PRIMARY_LIGHT,
  },
  senderImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  message: {
    fontSize: 13,
    color: '#333',
  },
  conversationImageWrap: {
    width: 225,
    height: 300,
  },
  conversationImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderRadius: 25,
  },

  receiverContent: {
    width: '90%',
    marginBottom: 15,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  receiverContentWrap: {
    backgroundColor: colors.PRIMARY_LIGHT,
    padding: 12,
    position: 'relative',
    borderRadius: 25,
    borderBottomRightRadius: 0,
    // borderWidth:.5,
    borderColor: colors.WHITE,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiverImageWrap: {
    width: 35,
    height: 35,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: '#fff',
    // elevation:2,
    position: 'absolute',
    top: -0.5,
    left: -15,
    borderWidth: 0.5,
    borderColor: colors.PRIMARY_LIGHT,
  },
  receiverImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  // footer
  conversationFooter: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    elevation: 3,
  },
  conversationFooterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
    padding: 5,
    // elevation:2
    // borderRadius:999
  },
  fileButton: {
    width: 40,
    height: 40,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY_LIGHT,
    borderRadius: 999,
  },
  conversationInput: {
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
    maxHeight: 60,
    zIndex: 999,
  },
  conversationFooterContentCenter: {
    flex: 1,
  },
  sendButton: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    marginRight: -5,
  },

  footerContentOverlayRight: {
    position: 'absolute',
    right: -35,
    top: 0,
    backgroundColor: colors.PRIMARY_LIGHT,
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    height: '160%',
    width: 120,
    transform: [{rotate: '120deg'}],
  },
});

const brakePoints = StyleSheet.create(
  brakePointXS
    ? {
        conversationProductCard: {
          marginHorizontal: 25,
          marginVertical: 10,
        },

        conversationsContent: {
          padding: 15,
          paddingLeft: 3,
          paddingBottom: 0,
        },
        conversationFooter: {
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#f5f5f5',
          elevation: 3,
        },
      }
    : brakePointSM
    ? {
        conversationProductCard: {
          marginHorizontal: 20,
          marginVertical: 12,
        },
        conversationsContent: {
          padding: 20,
          paddingLeft: 35,
          paddingBottom: 0,
        },
        conversationFooter: {
          paddingHorizontal: 20,
          paddingVertical: 12,
          backgroundColor: '#f5f5f5',
          elevation: 3,
        },
      }
    : brakePointMD
    ? {
        conversationProductCard: {
          marginHorizontal: 25,
          marginVertical: 14,
        },
        conversationsContent: {
          padding: 25,
          paddingLeft: 40,
          paddingBottom: 0,
        },
        conversationFooter: {
          paddingHorizontal: 25,
          paddingVertical: 14,
          backgroundColor: '#f5f5f5',
          elevation: 3,
        },
      }
    : brakePointLG
    ? {
        conversationProductCard: {
          marginHorizontal: 30,
          marginVertical: 16,
        },
        conversationsContent: {
          padding: 30,
          paddingLeft: 45,
          paddingBottom: 0,
        },
        conversationFooter: {
          paddingHorizontal: 30,
          paddingVertical: 16,
          backgroundColor: '#f5f5f5',
          elevation: 3,
        },
      }
    : null,
);

const conversationStyles = StyleSheet.flatten([common, brakePoints]);

export default conversationStyles;
