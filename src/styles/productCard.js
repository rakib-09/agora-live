import {StyleSheet, Platform} from 'react-native';
import {font, colors} from './theme';

const pCardStyles = StyleSheet.create({
  //product card grid
  productRowHorizontal: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: -4,
  },
  productRowHorizontalItem: {
    width: 150,
    paddingRight: 4,
  },

  productRowVertical: {
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginRight: -4,
  },
  productRowVerticalItem: {
    width: '50%',
    paddingRight: 4,
    marginBottom: 4,
  },
  // productCard:{
  //     flex: 1,
  //     height: 200,
  //     backgroundColor: '#fff'
  // },

  pCard: {
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    borderRadius: 4,
    overflow: 'hidden',
  },
  batchGroup: {
    position: 'absolute',
    left: 6,
    top: 6,
    zIndex: 999,
  },
  offerBatch: {
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(33, 170, 147, .9)',
    elevation: 2,
  },
  offerBatchTitle: {
    fontSize: font.size.SMALL,
    color: colors.WHITE,
    fontWeight: font.weight.NORMAL,
  },

  halalBatch: {
    width: 30,
    height: 30,
  },
  halalBatchIcon: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
  percentBatch: {
    position: 'absolute',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    right: 4,
    top: 4,
    zIndex: 999,
    backgroundColor: 'rgba(255, 87, 34, .9)',
    elevation: 4,
    borderRadius: 2,
  },
  percentAmount: {
    fontSize: font.size.SMALL,
    color: colors.WHITE,
    fontWeight: font.weight.NORMAL,
  },

  pCardBody: {},
  pCardImageWrap: {
    height: 146,
    borderBottomColor: '#eee',
    borderBottomWidth: 0.5,
  },
  pCardImageWrap2: {
    height: 175,
    borderBottomColor: '#eee',
    borderBottomWidth: 0.5,
  },
  pCardImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  pCardDetails: {
    padding: 6,
    paddingBottom: 0,
  },
  pCardTitle: {
    fontSize: 14,
    color: colors.HEADING_COLOR,
    fontWeight: '400',
  },
  pCardPriceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pCardPrice: {
    // color: '#000',
    margin: 0,
    fontSize: 12,
    // fontWeight: '600',
  },
  oldPriceBorder: {
    alignSelf: 'center',
    position: 'absolute',
    borderBottomColor: '#999',
    borderBottomWidth: 0.5,
    height: '44%',
    width: '110%',
  },
  pCardOldPrice: {
    fontSize: 10,
  },
  pCardDiscount: {
    marginLeft: 5,
    fontSize: 11,
    fontWeight: '600',
    color: colors.SECONDARY,
  },
  pCardFooter: {
    padding: 5,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ratingStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCount: {
    fontSize: 10,
  },

  pCardShipping: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shippingIcon: {
    transform: [
      {
        rotate: '-45deg',
      },
    ],
    color: colors.PRIMARY,
  },
  shippingIconLocal: {
    color: colors.PRIMARY,
    marginRight: 2,
  },
  shippingCountry: {
    fontSize: font.size.SMALL,
    color: colors.PRIMARY,
  },
  pLeft: {
    fontSize: font.size.SMALL,
    color: colors.PRIMARY,
  },
  minOrderTitle: {
    fontSize: font.size.SMALL,
  },
  minOrderValue: {
    fontSize: font.size.SMALL,
    color: colors.DANGER,
  },
});

export default pCardStyles;
