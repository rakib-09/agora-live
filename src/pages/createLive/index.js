/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import MultiSelect from 'react-native-multiple-select';
import {CheckBox} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  PermissionsAndroid,
  Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Config} from '../../Config';
import ImagePicker from 'react-native-image-crop-picker';

import helpers from '../../styles/helpers';
import global from './../../styles/global';
import Auth from '../../helpers/Auth';
async function requestCameraAndAudioPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
export default class CreateLive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      note: null,
      position: 'bottom',
      banner: null,
      checked: false,
      start_at: null,
      selectedItems: [],
      items: [
        {
          id: '92iijs7yta',
          name: 'Ondo',
        },
        {
          id: 'a0s0a8ssbsd',
          name: 'Ogun',
        },
        {
          id: '16hbajsabsd',
          name: 'Calabar',
        },
        {
          id: 'nahs75a5sg',
          name: 'Lagos',
        },
        {
          id: '667atsas',
          name: 'Maiduguri',
        },
        {
          id: 'hsyasajs',
          name: 'Anambra',
        },
        {
          id: 'djsjudksjd',
          name: 'Benue',
        },
        {
          id: 'sdhyaysdj',
          name: 'Kaduna',
        },
        {
          id: 'suudydjsjd',
          name: 'Abuja',
        },
      ],
      products: [],
      activeProduct: [],
    };
    this.auth = new Auth();
  }

  componentWillMount = () => {
    if (Platform.OS === 'android') {
      requestCameraAndAudioPermission().then(_ => {});
    }
  };


  onSelectedItemsChange = selectedItems => {
    console.log('selectedItems', selectedItems);

    this.setState(
      {
        selectedItems,
      },
      () => {
        console.log('selectedItems', this.state.selectedItems);
      },
    );
  };


  chooseImage() {
    ImagePicker.openPicker({
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          banner: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
            fileName: 'name.jpg',
          },
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  login = async () => {
      let url = Config.URL+'auth/login'
      console.log("login", url)
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: Config.EMAIL,
            password: Config.PASSWORD
        }),
        })
        .then(response => response.json())
        .then( responseJson => {
            try{
               this.setToken(responseJson)
            }
            catch (error) {
                Alert.alert(error)
            }
            
        });
 }

 async setToken(responseJson) {
     await AsyncStorage.setItem('userToken', responseJson.token);
 }

 checkToken = async () => {
     try {
         const value = await AsyncStorage.getItem('userToken');
         if(value) { 
             return value
         }
         else {
             this.login()
         }
     }
     catch (error) {
			console.log('loading error');
		}
 }  

  //add new live
  async addNewLive() {
      await this.login();
      // TODO: check will be added
    // if(!this.checkToken()) {
    //    await this.login();
    // }
    let actionURL = Config.URL + 'lives';
    let formData = new FormData();
    formData.append("title", this.state.title);
    // formData.append('products', JSON.stringify(this.state.selectedItems));
    // formData.append("note", this.state.note);
    // formData.append('start_at', this.state.start_at);
    if (this.state.banner) {
      let banner = this.state.banner;
      formData.append("cover_photo", {
        uri: banner.uri,
        name: banner.fileName,
        type: banner.mime,
      });
    }
    console.log("formData", formData)
    this.fetchData(actionURL, formData)
  }

  async fetchData(actionURL ,formData) {
      const token = await AsyncStorage.getItem('userToken');
      console.log("token", token, actionURL, formData )
      fetch(actionURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'token': 'bearer '+ token
      },
      body: formData,
    })
      .then(response => response.json())
      .then(responseJson => {
          console.log(responseJson)
          

// TODO: some feature will be added
        // if (!this.state.checked) {
        //   console.log(
        //     'props from addnewLive2',
        //     this.props,
        //     this.props.shop,
        //     this.props.shop.user_id,
        //   );
        //   console.log({
        //     channeleName: session_id,
        //     live_id: responseJson.live_id,
        //   });
        //   Actions.pop();
        //   if (responseJson.live_id) {
            // setTimeout(function() {
            //   console.log('inside:', {
            //     channelName: responseJson.session_id,
            //     live_id: responseJson.live_id,
            //     shop: responseJson.user_id,
            //   });
			// 			}, 300);
        //   }
        // } else {
        //   Actions.pop();
        // }
        //   Actions.streamming({
            //     channelName: responseJson.session_id,
            //     live_id: responseJson.live_id,
            //     user_id: responseJson.user_id,
            //   });
      })
     .catch((error) => {
        console.log(error)
        });
  }

//   RENDER SINGLE IMAGE
    renderSingleImage(image) {
		if (typeof (image) == 'string') {
			return <Image style = {
				[helpers.avatar_img]
			}
			source = {
				{
					image
				}
			}
			/>
		} else {
			return <Image style = {
				[helpers.avatar_img]
			}
			source = {
				image
			}
			/>
		}
	}

  render() {
    const {checked} = [this.state];
    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
        <ScrollView showsVerticalScrollIndicator={false} ref="scrollView">
          <View style={[global.pageBody]}>
            <View style={[global.form]}>
              <View style={[global.formGroup, helpers.mb_20]}>
                <Text style={[global.formLabel]}>Title:</Text>
                <TextInput
                  style={global.formInput}
                  value={this.state.title}
                  onChangeText={text => {
                    this.setState({title: text.toString()});
                  }}
                  placeholder="Enter title"
                />
              </View>

              <View style={[global.formGroup, helpers.mb_20]}>
                <Text style={[global.formLabel]}>Banner:</Text>
                <TouchableOpacity
                  style={[styles.bannerImageWrap]}
                  onPress={() => {
                    this.chooseImage();
                  }}>
                  {this.state.banner ? (
                    this.renderSingleImage(this.state.banner)
                  ) : (
                    <Image
                      style={styles.bannerImage}
                      source={require('../../assets/images/upload.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <View style={[global.formGroup, helpers.mb_20]}>
                {/* <Text style={[global.formLabel]}>Select product:</Text> */}
                {/* <MultiSelect
                  state={{
                    padding: 50,
                  }}
                  hideTags
                  items={this.state.activeProduct}
                  uniqueKey="id"
                  ref={component => {
                    this.multiSelect = component;
                  }}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={this.state.selectedItems}
                  selectText="Pick Items"
                  searchInputPlaceholderText="Search product..."
                  onChangeInput={text => console.log(text)}
                  // altFontFamily="ProximaNova-Light"
                  tagRemoveIconColor="#CCC"
                  tagBorderColor="#CCC"
                  tagTextColor="#CCC"
                  selectedItemTextColor="#288ee2"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{color: '#CCC'}}
                  submitButtonColor="#CCC"
                  submitButtonText="Done"
                /> */}
                <View>
                  {/* {this.multiSelect.getSelectedItemsExt(this.state.selectedItems)} */}
                </View>
              </View>

              <View style={[global.formGroup, helpers.mb_20]}>
                <Text style={[global.formLabel]}>Note:</Text>
                <TextInput
                  style={global.commentInput}
                  value={this.state.note}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={value => {
                    this.setState({note: value});
                  }}
                  placeholder="Enter note"
                />
              </View>

              <CheckBox
                title="Start later?"
                checked={this.state.checked ? true : false}
                onPress={() => {
                  this.setState({checked: !this.state.checked});
                  this.refs.scrollView.scrollToEnd({duration: 500});
                }}
                checkedColor={{color: 'GREEN'}}
                containerStyle={{
                  width: '100%',
                  marginLeft: 0,
                  marginBottom: 10,
                  marginTop: 0,
                }}
              />

              {this.state.checked && (
                <View style={[global.formGroup]}>
                  <Text style={[global.formLabel]}>Start Time:</Text>
                  <DatePicker
                    style={[global.datePicker]}
                    date={this.state.start_at}
                    mode="datetime"
                    placeholder="Start time"
                    format="YYYY-MM-DD h:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: -3,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 38,
                        height: 35,
                        ...Platform.select({
                          ios: {
                            height: 40,
                          },
                        }),
                        borderColor: '#eee',
                        backgroundColor: '#eee',
                      },
                    }}
                    onDateChange={start_at => {
                      this.setState({start_at});
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={[global.pageFooter]}>
          <TouchableOpacity
            onPress={() => this.addNewLive()}
            style={[global.submitButton]}>
            <Text style={[global.submitButtonTitle, {fontSize: 18}]}>
              {''}
              {this.state.checked ? 'CREATE' : 'START NOW'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  bannerImageWrap: {
    flex: 1,
    height: 130,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  bannerImage: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 4,
    resizeMode: 'contain',
  },
});
