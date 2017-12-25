/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux/dist/react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './application/public/Main'
// import configureStore from './application/public/store/store'
import store from './application/public/store/store'
// const store = configureStore();
// export default class App extends React.Component {
//   render() {
//     return (
//         <View style={styles.container}>
//           <Main/>
//         </View>
//     );
//   }
// }
export default class App extends React.Component{
  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <Main/>
        </View>
      </Provider>  
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
