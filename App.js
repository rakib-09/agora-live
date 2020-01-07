import React, {Component} from 'react';
import {
  View,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import Routes from './src/routes/Routes.js';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1, backgroundColor: '#f5f5f5'}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <StatusBar barStyle="light-content" />
            <Routes />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
export default App;
