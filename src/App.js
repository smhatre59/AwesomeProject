import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import Home from './pages/Home';
import News from './pages/News'
 class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="modal" component={Modal} >
        <Scene key="root" hideNavBar>
          <Scene key="Home" component={News} title="Home" initial />
        </Scene>
      </Scene>
    </Router>
            )
          }
}
export default App;
