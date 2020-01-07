import { StyleSheet } from 'react-native';

import {colors} from './theme';

export default StyleSheet.create({
     avatar_img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: colors.WHITE
  },
    flexRow: {
        flexDirection: 'row'
    }, 
    border: {
        borderWidth: 1,
        borderColor: colors.BORDER,
    }, 
    borderRight: {
        borderRightColor: colors.BORDER,
        borderRightWidth: 1,
    },
    borderLeft: {
        borderLeftColor: colors.BORDER,
        borderLeftWidth: 1,
    },
    borderTop: {
        borderTopColor: colors.BORDER,
        borderTopWidth: 1,
    },
    borderBottom: {
        borderBottomColor: colors.BORDER,
        borderBottomWidth: 1,
    }, 
    noBorder: (...edge) => {
        const edges = {};
        edge.length > 0 ? edge.forEach(e => edges[`border${e}Width`] = 0) : edges.borderWidth = 0;
        return edges;
    },
    padding: (...values) => {
        if (values.length === 0) {
            throw new Error('Padding value must me provided!');
        } else if (values.length > 4) {
            throw new Error("Padding values can not be more than 4");
        }

        const padding = {};
        switch(values.length) {
            case 2: {
                padding.paddingTop = padding.paddingBottom = values[0];
                padding.paddingLeft = padding.paddingRight = values[1];
                break;
            }
            case 3: {
                padding.paddingTop = values[0];
                padding.paddingLeft = padding.paddingRight = values[1];
                padding.paddingBottom = values[2]
                break;
            }
            case 4: {
                padding.paddingTop = values[0];
                padding.paddingRight = values[1];
                padding.paddingBottom = values[2];
                padding.paddingLeft = values[3];
                break;
            }
            default: {
                padding.padding = values[0];
                break;
            }
        }
        return padding;
    },
    margin: (...values) => {
        if (values.length === 0) {
            throw new Error('margin value must me provided!');
        } else if (values.length > 4) {
            throw new Error("margin values can not be more than 4");
        }

        const margin = {};
        switch(values.length) {
            case 2: {
                margin.marginTop = margin.marginBottom = values[0];
                margin.marginLeft = margin.marginRight = values[1];
                break;
            }
            case 3: {
                margin.marginTop = values[0];
                margin.marginLeft = margin.marginRight = values[1];
                margin.marginBottom = values[2]
                break;
            }
            case 4: {
                margin.marginTop = values[0];
                margin.marginRight = values[1];
                margin.marginBottom = values[2];
                margin.marginLeft = values[3];
                break;
            }
            default: {
                margin.margin = values[0];
                break;
            }
        }
        return margin;
    },
    radius: (value) => ({borderRadius: value}),
    color: (value) => ({color: value}), 



    // margins

    m_0:{
        margin: 0,
    },
    m_1:{
        margin:1,
    },
    m_2:{
        margin:2,
    },
    m_3:{
        margin:3,
    },
    m_4:{
        margin:4,
    },
    m_5:{
        margin:5,
    },
    m_6:{
        margin:6,
    },
    m_7:{
        margin:7,
    },
    m_8:{
        margin:8,
    },
    m_9:{
        margin:9,
    },
    m_10:{
        margin:10,
    },

    ml_0:{
        marginLeft: 0,
    },
    ml_1:{
        marginLeft: 1,
    },
    ml_2:{
        marginLeft: 2,
    },
    ml_3:{
        marginLeft: 3,
    },
    ml_4:{
        marginLeft: 4,
    },
    ml_5:{
        marginLeft: 5,
    },
    ml_6:{
        marginLeft: 6,
    },
    ml_7:{
        marginLeft: 7,
    },
    ml_8:{
        marginLeft: 8,
    },
    ml_9:{
        marginLeft: 9,
    },
    ml_10:{
        marginLeft: 10,
    },


    mr_0:{
        marginRight: 0,
    },
    mr_1:{
        marginRight: 1,
    },
    mr_2:{
        marginRight: 2,
    },
    mr_3:{
        marginRight: 3,
    },
    mr_4:{
        marginRight: 4,
    },
    mr_5:{
        marginRight: 5,
    },
    mr_6:{
        marginRight: 6,
    },
    mr_7:{
        marginRight: 7,
    },
    mr_8:{
        marginRight: 8,
    },
    mr_9:{
        marginRight: 9,
    },
    mr_10:{
        marginRight: 10,
    },
    mr_15:{
        marginRight: 15,
    },


    mt_0:{
        marginTop:0
    },
    mt_1:{
        marginTop:1
    },
    mt_2:{
        marginTop:2
    },
    mt_3:{
        marginTop:3
    },
    mt_4:{
        marginTop:4
    },
    mt_5:{
        marginTop:5
    },
    mt_6:{
        marginTop:6
    },
    mt_7:{
        marginTop:7
    },
    mt_8:{
        marginTop:8
    },
    mt_9:{
        marginTop:9
    },
    mt_10:{
        marginTop:10
    },
    mt_15:{
        marginTop:15
    },
    mt_20:{
        marginTop:20
    },


    mb_0:{
        marginBottom: 0
    },
    mb_1:{
        marginBottom: 1
    },
    mb_2:{
        marginBottom: 2
    },
    mb_3:{
        marginBottom: 3,
    },
    mb_4:{
        marginBottom: 4,
    },
    mb_5:{
        marginBottom: 5,
    },
    mb_6:{
        marginBottom: 6,
    },
    mb_7:{
        marginBottom: 7,
    },
    mb_8:{
        marginBottom: 8,
    },
    mb_9:{
        marginBottom: 9,
    },
    mb_10:{
        marginBottom: 10,
    },
    mb_15:{
        marginBottom: 15,
    },
    mb_20:{
        marginBottom: 20,
    },


    p_0:{
        padding: 0
    },
    p_1:{
        padding: 1
    },
    p_2:{
        padding: 2
    },
    p_3:{
        padding: 3
    },
    p_4:{
        padding: 4
    },
    p_5:{
        padding: 5
    },
    p_6:{
        padding: 6
    },
    p_7:{
        padding: 7
    },
    p_8:{
        padding: 8
    },
    p_9:{
        padding: 9
    },
    p_10:{
        padding: 10
    },
    p_15:{
        padding: 15
    },
    p_20:{
        padding: 20
    },



    pl_0:{
        paddingLeft: 0,
    },
    pl_1:{
        paddingLeft: 1,
    },
    pl_2:{
        paddingLeft: 2,
    },
    pl_3:{
        paddingLeft: 3,
    },
    pl_4:{
        paddingLeft: 4,
    },
    pl_5:{
        paddingLeft: 5,
    },
    pl_6:{
        paddingLeft: 6,
    },
    pl_7:{
        paddingLeft: 7,
    },
    pl_8:{
        paddingLeft: 8,
    },
    pl_9:{
        paddingLeft: 9,
    },
    pl_10:{
        paddingLeft: 10,
    },



    pr_0:{
        paddingRight: 0,
    },
    pr_1:{
        paddingRight: 1,
    },
    pr_2:{
        paddingRight: 2,
    },
    pr_3:{
        paddingRight: 3,
    },
    pr_4:{
        paddingRight: 4,
    },
    pr_5:{
        paddingRight: 5,
    },
    pr_6:{
        paddingRight: 6,
    },
    pr_7:{
        paddingRight: 7,
    },
    pr_9:{
        paddingRight: 9,
    },
    pr_9:{
        paddingRight: 9,
    },
    pr_10:{
        paddingRight: 10,
    },


    pb_0:{
        paddingBottom: 0,
    },
    pb_1:{
        paddingBottom: 1,
    },
    pb_2:{
        paddingBottom: 2,
    },
    pb_3:{
        paddingBottom: 3,
    },
    pb_4:{
        paddingBottom: 4,
    },
    pb_5:{
        paddingBottom: 5,
    },
    pb_6:{
        paddingBottom: 6,
    },
    pb_7:{
        paddingBottom: 7,
    },
    pb_8:{
        paddingBottom: 8,
    },
    pb_9:{
        paddingBottom: 9,
    },
    pb_10:{
        paddingBottom: 10,
    },


    pt_0:{
        paddingTop: 0,
    },
    pt_1:{
        paddingTop: 1,
    },
    pt_2:{
        paddingTop: 2,
    },
    pt_3:{
        paddingTop: 3,
    },
    pt_4:{
        paddingTop: 4,
    },
    pt_5:{
        paddingTop: 5,
    },
    pt_6:{
        paddingTop: 6,
    },
    pt_7:{
        paddingTop: 7,
    },
    pt_8:{
        paddingTop: 8,
    },
    pt_9:{
        paddingTop: 9,
    },
    pt_10:{
        paddingTop: 10,
    },



    flexWrap:{
        flexWrap: 'wrap',
    },
    flexWrapReverse:{
        flexWrap: 'wrap-reverse',
    },
    alignCenter:{
        alignItems: 'center',
    },
    alignStart:{
        alignItems: 'flex-start',
    },
    alignEnd:{
        alignItems: 'flex-end',
    },
    justifyStart:{
        justifyContent: 'flex-start',
    },
    justifyEnd:{
        justifyContent: 'flex-end',
    },
    justifyCenter:{
        justifyContent: 'center',
    },
    justifyAround:{
        justifyContent: 'space-around',
    },
    justifyAround:{
        justifyContent: 'space-around',
    },
    justifyBetween:{
        justifyContent: 'space-between',
    },

    textCenter:{
        width: '100%',
        textAlign: 'center',
    },
    textLeft:{
        width: '100%',
        textAlign: 'left',
    },
    textRight:{
        width: '100%',
        textAlign: 'right',
    },
    textBold:{
        fontWeight: 'bold'
    },

    textLite:{
        color: '#888',
        fontSize: 13
    },
    highlight_black:{
        color: '#333',
    },
    borderBottom_0:{
        borderBottomWidth:0
    },
    borderTop_0:{
        borderTopWidth:0
    },
    borderLeft_0:{
        borderLeftWidth:0
    },
    borderRight_0:{
        borderRightWidth:0
    },
    border_0:{
        borderWidth:0
    },



    // row col
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginRight: -5
      },
      col_6: {
        width: "100%",
        paddingRight: 5,
        marginBottom: 5
      },
      col_5: {
        width: (100/6)*5+'%',
        paddingRight: 5,
        marginBottom: 5
      },
      col_4: {
        width: (100/6)*4+'%',
        paddingRight: 5,
        marginBottom: 5
      },
      col_3: {
        width: (100/6)*3+'%',
        paddingRight: 5,
        marginBottom: 5
      },
      col_2: {
        width: (100/6)*2+'%',
        paddingRight: 5,
        marginBottom: 5
      },
    
      col_1: {
        width: (100/6)*1+'%',
        paddingRight: 5,
        marginBottom: 5
      },
      selfCenter: {
        alignSelf: "center"
      },
});