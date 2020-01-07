import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from './theme';

let {width, height} = Dimensions.get('window');

//  let width = 1029;
//  console.log(width);

let brakePointXS = width > 0 && width < 418;
let brakePointSM = width > 417 && width < 768;
let brakePointMD = width > 767 && width < 1024;
let brakePointLG = width > 1023;

const common = StyleSheet.create({
  // form
  form: {
    padding: 20,
    borderRadius: 4,
    elevation: 4,
    backgroundColor: colors.WHITE,
  },
  formGroup: {
    marginBottom: 10,
  },
  formLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  formValue: {
    fontSize: 14,
    color: '#999',
  },
  formInput: {
    fontSize: 15,
    color: '#666',
    borderBottomWidth: 1.3,
    borderBottomColor: '#ddd',
    height: 30,
    padding: 0,
    ...Platform.select({
      ios: {
        height: 40,
      },
    }),
  },
  commentInput: {
    fontSize: 15,
    borderWidth: 1.3,
    padding: 8,
    borderColor: '#ddd',
    color: '#666',
    ...Platform.select({
      ios: {
        height: 100,
      },
    }),
    textAlignVertical: 'top',
  },
  switchWrap: {
    padding: 6,
    borderRadius: 2,
    backgroundColor: '#eee',
  },
  switchTitle: {
    fontSize: 14,
    color: '#333',
  },
  radioButton: {
    padding: 0,
    borderWidth: 0,
    marginRight: 0,
    backgroundColor: 'transparent',
  },
  required: {
    borderBottomColor: colors.DANGER_LIGHT,
  },
  requiredMultiline: {
    borderColor: colors.DANGER_LIGHT,
  },
  requiredLabel: {
    fontSize: 12,
    color: colors.DANGER_LIGHT,
    fontStyle: 'italic',
    fontWeight: '100',
  },
  requiredColor: {
    color: colors.DANGER_LIGHT,
  },
  submitButton: {
    padding: 7,
    borderRadius: 999,
    elevation: 5,
    backgroundColor: colors.PRIMARY_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  submitButtonTitle: {
    fontSize: 16,
    color: colors.WHITE,
    marginRight: 5,
  },
  pickerWrap: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#eee',
    backgroundColor: '#f5f5f5',
    height: 30,
    ...Platform.select({
      ios: {
        height: 40,
      },
    }),
  },
  picker: {
    height: 30,
    height: 30,
    ...Platform.select({
      ios: {
        height: 40,
      },
    }),
    width: '100%',
  },
  datePicker: {
    width: '100%',
    height: 35,
    ...Platform.select({
      ios: {
        height: 40,
      },
    }),
  },
  switchGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  label: {
    fontSize: 13,
    color: '#666',
    marginRight: 4,
  },
  value: {
    fontSize: 13,
    color: '#555',
    fontWeight: 'bold',
  },
});

const brakePoints = StyleSheet.create(
  brakePointXS
    ? {
        form: {
          padding: 14,
          borderRadius: 4,
          elevation: 4,
          backgroundColor: colors.WHITE,
        },
        formLabel: {
          fontSize: 14,
          color: '#333',
          marginBottom: 5,
        },
        formValue: {
          fontSize: 14,
          color: '#999',
        },
        formInput: {
          fontSize: 15,
          color: '#666',
          borderBottomWidth: 1.3,
          borderBottomColor: '#ddd',
          height: 30,
          padding: 0,
          ...Platform.select({
            ios: {
              height: 40,
            },
          }),
        },
        commentInput: {
          fontSize: 15,
          borderWidth: 1.3,
          padding: 8,
          borderColor: '#ddd',
          color: '#666',
          ...Platform.select({
            ios: {
              height: 100,
            },
          }),
          textAlignVertical: 'top',
        },
        switchWrap: {
          padding: 6,
          borderRadius: 2,
          backgroundColor: '#eee',
        },
        switchTitle: {
          fontSize: 14,
          color: '#333',
        },

        //

        submitButton: {
          width: '100%',
          alignSelf: 'center',
          padding: 7,
          borderRadius: 999,
          elevation: 5,
          backgroundColor: colors.PRIMARY_LIGHT,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        },
        submitButtonTitle: {
          fontSize: 16,
          color: colors.WHITE,
          marginRight: 5,
        },
        pickerWrap: {
          width: '100%',
          borderBottomWidth: 1.5,
          borderBottomColor: '#eee',
          backgroundColor: '#f5f5f5',
          height: 30,
          ...Platform.select({
            ios: {
              height: 40,
            },
          }),
        },
        picker: {
          height: 30,
          ...Platform.select({
            ios: {
              height: 40,
            },
          }),
          width: '100%',
        },
        datePicker: {
          width: '100%',
          height: 30,
          ...Platform.select({
            ios: {
              height: 40,
            },
          }),
        },
        switchGroup: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        },

        label: {
          fontSize: 13,
          color: '#666',
          marginRight: 4,
        },
        value: {
          fontSize: 13,
          color: '#555',
          fontWeight: 'bold',
        },
      }
    : brakePointSM
    ? {
        form: {
          padding: 20,
          borderRadius: 4,
          elevation: 4,
          backgroundColor: colors.WHITE,
        },
        formLabel: {
          fontSize: 15,
          color: '#333',
          marginBottom: 6,
        },
        formValue: {
          fontSize: 15,
          color: '#999',
        },
        formInput: {
          fontSize: 16,
          color: '#666',
          borderBottomWidth: 1.3,
          borderBottomColor: '#ddd',
          height: 32,
          padding: 0,
          ...Platform.select({
            ios: {
              height: 45,
            },
          }),
        },
        commentInput: {
          fontSize: 16,
          borderWidth: 1.3,
          padding: 8,
          borderColor: '#ddd',
          color: '#666',
          ...Platform.select({
            ios: {
              height: 110,
            },
          }),
          textAlignVertical: 'top',
        },
        switchWrap: {
          padding: 8,
          borderRadius: 2,
          backgroundColor: '#eee',
        },
        switchTitle: {
          fontSize: 15,
          color: '#333',
        },

        //

        submitButton: {
          width: '80%',
          alignSelf: 'center',
          padding: 8,
          borderRadius: 999,
          elevation: 5,
          backgroundColor: colors.PRIMARY_LIGHT,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 12,
        },
        submitButtonTitle: {
          fontSize: 17,
          color: colors.WHITE,
          marginRight: 5,
        },
        pickerWrap: {
          width: '100%',
          borderBottomWidth: 1.5,
          borderBottomColor: '#eee',
          backgroundColor: '#f5f5f5',
          height: 35,
          ...Platform.select({
            ios: {
              height: 45,
            },
          }),
        },
        picker: {
          height: 35,
          ...Platform.select({
            ios: {
              height: 45,
            },
          }),
          width: '100%',
        },
        datePicker: {
          width: '100%',
          height: 32,
          ...Platform.select({
            ios: {
              height: 45,
            },
          }),
        },
        switchGroup: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        },

        label: {
          fontSize: 14,
          color: '#666',
          marginRight: 4,
        },
        value: {
          fontSize: 14,
          color: '#555',
          fontWeight: 'bold',
        },
      }
    : brakePointMD
    ? {
        form: {
          padding: 25,
          borderRadius: 4,
          elevation: 4,
          backgroundColor: colors.WHITE,
        },

        formLabel: {
          fontSize: 16,
          color: '#333',
          marginBottom: 6,
        },
        formValue: {
          fontSize: 16,
          color: '#999',
        },
        formInput: {
          fontSize: 17,
          color: '#666',
          borderBottomWidth: 1.3,
          borderBottomColor: '#ddd',
          height: 34,
          padding: 0,
          ...Platform.select({
            ios: {
              height: 50,
            },
          }),
        },
        commentInput: {
          fontSize: 17,
          borderWidth: 1.3,
          padding: 10,
          borderColor: '#ddd',
          color: '#666',
          ...Platform.select({
            ios: {
              height: 120,
            },
          }),
          textAlignVertical: 'top',
        },
        switchWrap: {
          padding: 10,
          borderRadius: 2,
          backgroundColor: '#eee',
        },
        switchTitle: {
          fontSize: 16,
          color: '#333',
        },

        //

        submitButton: {
          width: '60%',
          alignSelf: 'center',
          padding: 9,
          borderRadius: 999,
          elevation: 5,
          backgroundColor: colors.PRIMARY_LIGHT,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 14,
        },
        submitButtonTitle: {
          fontSize: 18,
          color: colors.WHITE,
          marginRight: 5,
        },
        pickerWrap: {
          width: '100%',
          borderBottomWidth: 1.5,
          borderBottomColor: '#eee',
          backgroundColor: '#f5f5f5',
          height: 40,
          ...Platform.select({
            ios: {
              height: 50,
            },
          }),
        },
        picker: {
          height: 40,
          ...Platform.select({
            ios: {
              height: 50,
            },
          }),
          width: '100%',
        },
        datePicker: {
          width: '100%',
          height: 34,
          ...Platform.select({
            ios: {
              height: 50,
            },
          }),
        },
        switchGroup: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        },

        label: {
          fontSize: 15,
          color: '#666',
          marginRight: 4,
        },
        value: {
          fontSize: 15,
          color: '#555',
          fontWeight: 'bold',
        },
      }
    : brakePointLG
    ? {
        form: {
          padding: 30,
          borderRadius: 4,
          elevation: 4,
          backgroundColor: colors.WHITE,
        },
        formLabel: {
          fontSize: 17,
          color: '#333',
          marginBottom: 7,
        },
        formValue: {
          fontSize: 17,
          color: '#999',
        },
        formInput: {
          fontSize: 18,
          color: '#666',
          borderBottomWidth: 1.3,
          borderBottomColor: '#ddd',
          height: 36,
          padding: 0,
          ...Platform.select({
            ios: {
              height: 55,
            },
          }),
        },
        commentInput: {
          fontSize: 18,
          borderWidth: 1.3,
          padding: 10,
          borderColor: '#ddd',
          color: '#666',
          ...Platform.select({
            ios: {
              height: 130,
            },
          }),
          textAlignVertical: 'top',
        },
        switchWrap: {
          padding: 12,
          borderRadius: 2,
          backgroundColor: '#eee',
        },
        switchTitle: {
          fontSize: 17,
          color: '#333',
        },

        //

        submitButton: {
          width: '40%',
          alignSelf: 'center',
          padding: 10,
          borderRadius: 999,
          elevation: 5,
          backgroundColor: colors.PRIMARY_LIGHT,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 16,
        },
        submitButtonTitle: {
          fontSize: 19,
          color: colors.WHITE,
          marginRight: 5,
        },
        pickerWrap: {
          width: '100%',
          borderBottomWidth: 1.5,
          borderBottomColor: '#eee',
          backgroundColor: '#f5f5f5',
          height: 45,
          ...Platform.select({
            ios: {
              height: 55,
            },
          }),
        },
        picker: {
          height: 45,
          ...Platform.select({
            ios: {
              height: 55,
            },
          }),
          width: '100%',
        },
        datePicker: {
          width: '100%',
          height: 36,
          ...Platform.select({
            ios: {
              height: 55,
            },
          }),
        },
        switchGroup: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        },

        label: {
          fontSize: 16,
          color: '#666',
          marginRight: 4,
        },
        value: {
          fontSize: 16,
          color: '#555',
          fontWeight: 'bold',
        },
      }
    : null,
);

const formStyles = StyleSheet.flatten([common, brakePoints]);

export default formStyles;
