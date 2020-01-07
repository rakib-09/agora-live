import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Welcome from '../pages/welcome';
import CreateLive from '../pages/createLive';

export default function Routes() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome" component={Welcome} title="Welcome" hideNavBar />
        <Scene keys="createLive" component={CreateLive} title="Create Live"  initial/>
      </Scene>
    </Router>
  );
}
