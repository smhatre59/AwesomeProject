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
import News from './pages/News';
import Music from './pages/Music';
 class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="modal" component={Modal} >
        <Scene key="root" hideNavBar>
          <Scene key="Home" component={Music} title="Home" initial />
        </Scene>
      </Scene>
    </Router>
            )
          }
}
export default App;
