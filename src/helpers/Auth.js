import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import {Config} from '../Config'


export default class Auth extends Component{
    constructor(props) {
        super(props)
    }

 login = async () => {

    fetch(Config.URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            email: Config.EMAIL,
            password: Config.PASSWORD
        },
        })
        .then(response => response.json())
        .then(responseJson => {
            try{
                AsyncStorage.setItem('userToken', responseJson.token);
            }
            catch (error) {
                Alert.alert(error)
            }
            
        });
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
}

