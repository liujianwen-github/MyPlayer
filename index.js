import { AppRegistry } from 'react-native';
import App from './App';
import {userStore} from './application/public/store/store'

const renderer = AppRegistry.registerComponent('MyPlayer', () => App);
// renderer()
// userStore.subscribe(renderer)
