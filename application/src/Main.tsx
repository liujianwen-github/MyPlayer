import * as React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/store'
// let store = configureStore(()=>{console.log('store创建参数')})
// components
import MainLayout from './UI/BaseDrawer'
interface MainProps{}
interface MainStates{
  isLoading:boolean,
  store:any
}
/**
 * 主入口文件
 * 
 * @export
 * @class
 * @extends {React.Component}
 */
export default class  extends React.Component<MainProps,MainStates> {
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      store:'1'
    }
  }
  render():JSX.Element {
    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <MainLayout/>
        </View>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    // height:100,
    // backgroundColor:"red"
  },
  safeArea:{
    // flex:1,
    // flexDirection:"column"
  }
})