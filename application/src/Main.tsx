import * as React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import {connect} from 'react-redux'
// import configureStore from './store/store'
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
class Main extends React.Component<MainProps,MainStates> {
  constructor(props){
    super(props)
  }
  
  render():JSX.Element {
    return (
        <View style={styles.container}>
          <MainLayout/>
        </View>
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
function select(store){
  return {
      isLoggedIn: store.userStore.isLoggedIn,
      user: store.userStore.user,
      status: store.userStore.status,
  }
}
export default connect(select)(Main)