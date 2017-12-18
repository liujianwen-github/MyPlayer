import * as React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
// components
import MainLayout from './UI/BaseDrawer'
/**
 * 主入口文件
 * 
 * @export
 * @class
 * @extends {React.Component}
 */
export default class  extends React.Component {
  render():JSX.Element {
    return (
      <View style={styles.container}>
        {/* <Text>11</Text> */}
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
    backgroundColor:"red"
  },
  safeArea:{
    // flex:1,
    // flexDirection:"column"
  }
})