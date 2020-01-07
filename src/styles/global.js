import {
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    colors
} from './theme';


let {
    width,
    height
} = Dimensions.get("window");

//  let width = 1029;
//  console.log(width);


let brakePointXS = width > 0 && width < 418;
let brakePointSM = width > 417 && width < 768;
let brakePointMD = width > 767 && width < 1024;
let brakePointLG = width > 1023;




import formStyles from './form'
import pCardStyles from './productCard'
import modalStyles from './modal'
import conversationStyles from './conversation'

const common = StyleSheet.create({

    blackWrap: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    blackMsg: {
        fontSize: 14,
        color: colors.DANGER_LIGHT
    },


    // page body
    pageBody: {
        padding: 10,
        paddingTop: 0,
    },
    pageFooter: {
        padding: 10,
        backgroundColor: colors.WHITE,
        elevation: 4
    },


    // pickerItemRender
    optionContainer: {
        padding: 10,
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row'
    },

});

const brakePoints = StyleSheet.create(

    brakePointXS ? {

        pageBody: {
            padding: 15,
            paddingTop: 0,
        },
        pageFooter: {
            paddingVertical:10,
            paddingHorizontal:15,
            backgroundColor: colors.WHITE,
            elevation: 4
        },

    }

    :
    brakePointSM ? {

        pageBody: {
            padding: 20,
            paddingTop: 0,
        },
        pageFooter: {
            paddingVertical:12,
            paddingHorizontal:20,
            backgroundColor: colors.WHITE,
            elevation: 4
        },

    }


    :
    brakePointMD ? {

        pageBody: {
            padding: 25,
            paddingTop: 0,
        },
        pageFooter: {
            paddingVertical:14,
            paddingHorizontal:25,
            backgroundColor: colors.WHITE,
            elevation: 4
        },


    }

    :
    brakePointLG ? {

        pageBody: {
            padding: 30,
            paddingTop: 0,
        },
        pageFooter: {
            paddingVertical:16,
            paddingHorizontal:30,
            backgroundColor: colors.WHITE,
            elevation: 4
        },

    } :

    null

);

const globalStyles = StyleSheet.flatten([common, brakePoints]);


const styles = StyleSheet.flatten([globalStyles, formStyles, pCardStyles, modalStyles, conversationStyles]);

export default styles;