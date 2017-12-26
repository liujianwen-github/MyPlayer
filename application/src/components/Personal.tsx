import * as React from 'react';
import { 
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  ScrollView,
  SectionList,
  
 } from 'react-native';

 interface PersonalProps{}
 interface PersonalStates{
   list:Array<any>
 }
 import listStyle from '../styles/personal'
/**
 * 个人模块
 * 
 * @export
 * @class Personal
 * @extends {Component}
 */
export default class Personal extends React.Component<PersonalProps,PersonalStates> {
    constructor(props){
      super(props)
      this.state = {
        list:[{
          title:'本地音乐',
          count:0
        },{
          title:'最近播放',
          count:0
        },{
          title:'下载管理',
          count:0
        },{
          title:'我的电台',
          count:0
        },{
          title:'我的收藏',
          count:0
        }]
      }
      this.listRender = this.listRender.bind(this)
    }
    listRender({item,index}){
      // todo fetchdata
      let count = 10
      return(
        <TouchableHighlight>
          <View style={listStyle.partOne.line}>
            <Image
            style={listStyle.partOne.itemImage}
            source={require('../../assets/img/Conversation.png')}></Image>
            <View style={listStyle.partOne.itemTextGroup}>
              <Text style={listStyle.partOne.itemText}>{item.title}</Text>
              <Text>{`(${count})`}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
   render():JSX.Element {
     return (
       <View>
         <ScrollView>
          <FlatList
          data={this.state.list}
          renderItem={this.listRender}
          ></FlatList>
          <SectionList
            renderItem={({item}) => <Text >{item}</Text>}
            renderSectionHeader={({section}) => <Text>{section.key}</Text>}
            sections={[ // 不同section渲染相同类型的子组件
              {data: [1,2,3], key: '创建'},
              {data: [4,5,6], key: '收藏'}
            ]}
          />
         </ScrollView>
       </View>
     );
   }
 }