import * as React from 'react';
import { 
  View,
  Text,
  Button
 } from 'react-native';
 import {connect} from 'react-redux';
 import {logIn,skipLogin} from '../store/action'
/**
 * 发现模块
 * 
 * @export
 * @class Discover
 * @extends {Component}
 */
interface DiscoverProps{}
interface DiscoverStates{
  username:string,
  password:string,
  btnFlag:boolean
}
class Discover extends React.Component<DiscoverProps,DiscoverStates> {
  constructor(props){
    super(props)
    this.state = {
      username: 'sup1',
      password: '12345we6',
      btnFlag: true,
    };
    this.btnfn.bind(this)
  }
  btnfn(){
    console.log(this)
  }
   render():JSX.Element {
     return (
       <View>
         <Text>discover</Text>
         <Button
          title="12"
          onPress={()=>{console.log('11')}}
         />
       </View>
     );
   }
 }
 function select(store){
  return {
      isLoggedIn: store.userStore.isLoggedIn,
      user: store.userStore.user,
      status: store.userStore.status,
  }
}
export default connect(select)(Discover)