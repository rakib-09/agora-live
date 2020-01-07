import {StyleSheet, Dimensions} from 'react-native';
import {colors} from './theme';

let {width, height} = Dimensions.get('window');

//  let width = 1029;
//  console.log(width);

let brakePointXS = width > 0 && width < 418;
let brakePointSM = width > 417 && width < 768;
let brakePointMD = width > 767 && width < 1024;
let brakePointLG = width > 1023;

const common = StyleSheet.create({

    // action modal
  modalWrap: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,.1)',
    position: 'relative',
  },
  overlayCloseButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  modalContainer: {
    width: '100%',
    maxHeight: '70%',
    elevation: 10,
    backgroundColor: '#fff',
    // borderTopLeftRadius:  30,
    // borderTopRightRadius: 30,
    borderRadius: 10,
    overflow: 'hidden',
    // transform: [
    //     {scaleX:1.5}
    // ],
  },
  modal_head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: colors.PRIMARY_LIGHT,
  },
  modal_title: {
    fontSize: 18,
    color: colors.WHITE,
  },
  modal_btn_close: {
    padding: 6,
  },
  modal_body: {
    padding: 30,
  },
  modal_btn: {
    width: 120,
    padding: 5,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  modal_btn_text: {
    color: colors.WHITE,
    fontSize: 13,
  },
  modalBtnSubmit: {
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});

const brakePoints = StyleSheet.create(
  brakePointXS
    ? {
        modalWrap: {
          flex: 1,
          padding: 15,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,.1)',
          position: 'relative',
        },

        modal_head: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 4,
          backgroundColor: colors.PRIMARY_LIGHT,
        },
        modal_title: {
          fontSize: 18,
          color: colors.WHITE,
        },

        modal_body: {
          padding: 15,

        },
        modal_btn: {
          width: 120,
          padding: 5,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
        modal_btn_text: {
          color: colors.WHITE,
          fontSize: 13,
        },
        modalBtnSubmit: {
          padding: 10,
          paddingHorizontal: 35,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
      }
    : brakePointSM
    ? {
        modalWrap: {
          flex: 1,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,.1)',
          position: 'relative',
        },
        modal_head: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 6,
          backgroundColor: colors.PRIMARY_LIGHT,
        },
        modal_title: {
          fontSize: 19,
          color: colors.WHITE,
        },

        modal_body: {
          padding: 20,
        },
        modal_btn: {
          width: 130,
          padding: 6,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
        modal_btn_text: {
          color: colors.WHITE,
          fontSize: 14,
        },
        modalBtnSubmit: {
          padding: 10,
          paddingHorizontal: 40,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
      }
    : brakePointMD
    ? {
        modalWrap: {
          flex: 1,
          padding: 25,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,.1)',
          position: 'relative',
        },
        modal_head: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          paddingVertical: 8,
          backgroundColor: colors.PRIMARY_LIGHT,
        },
        modal_title: {
          fontSize: 20,
          color: colors.WHITE,
        },

        modal_body: {
          padding: 25,

        },
        modal_btn: {
          width: 140,
          padding: 7,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
        modal_btn_text: {
          color: colors.WHITE,
          fontSize: 15,
        },
        modalBtnSubmit: {
          padding: 10,
          paddingHorizontal: 45,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
      }
    : brakePointLG
    ? {
        modalWrap: {
          flex: 1,
          padding: 30,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          position: 'relative',
        },
        modal_head: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: colors.PRIMARY_LIGHT,
        },
        modal_title: {
          fontSize: 21,
          color: colors.WHITE,
        },

        modal_body: {
          padding: 30,

        },
        modal_btn: {
          width: 150,
          padding: 8,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },
        modal_btn_text: {
          color: colors.WHITE,
          fontSize: 16,
        },
        modalBtnSubmit: {
          padding: 10,
          paddingHorizontal: 50,
          borderRadius: 999,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        },

    }
    : null,
);

const modalStyles = StyleSheet.flatten([common, brakePoints]);

export default modalStyles;
