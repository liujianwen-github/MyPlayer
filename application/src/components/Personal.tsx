import * as React from 'react';
import { 
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  ScrollView,
  SectionList,
  RefreshControl,
  SectionListData
 } from 'react-native';
/**
 * 创建歌单
 * 
 * @interface createData
 */
// interface createData{
//   [index:number]:{
//     data:{
//       [index:number]:{
//         title:string,
//         totalCount:number,
//         downloadCount?:number,
//         headImage?:string,
//         key?:string
//       }
//     },
//     key:string,
//     // length:number
//   }
// }
/**
 * 下半部分列表模拟数据
 */
 const createData= [{
   data:[{
     title:'我喜欢的',
     totalCount:12,
     headImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
     downloadCount:0,
   },{
    title:'我喜欢的1',
    totalCount:12,
    headImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
    downloadCount:0,
  }],
   key:'创建'
 },{
  data:[{
    title:'bilibli',
    totalCount:12,
    headImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
    downloadCount:0,
  },{
    title:'bilibli1111',
    totalCount:12,
    headImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',    
    downloadCount:0,
  }],
  key:'收藏'
}]
// const test:SectionListData<any> = createData

 interface PersonalProps{}
 interface PersonalStates{
   list:Array<any>,
   isRefreshing:boolean,
   collectedStatus:boolean,
   createdStatus:boolean
 }
 //style
 import basicStyle from '../styles/basicStyle'
 import listStyle from '../styles/personal'
 import theme from '../theme/default'
 
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
          count:0,
          key:0
        },{
          title:'最近播放',
          count:0,
          key:1
        },{
          title:'下载管理',
          count:0,
          key:2
        },{
          title:'我的电台',
          count:0,
          key:3
        },{
          title:'我的收藏',
          count:0,
          key:4
        }],
        isRefreshing:false,
        createdStatus:true,
        collectedStatus:true
      }
      this.listRender = this.listRender.bind(this)
      this.onRefresh = this.onRefresh.bind(this)
      this.skip = this.skip.bind(this)
      this.renderItemTitle = this.renderItemTitle.bind(this)
    }
    /**
     * 跳转到子界面
     * 
     * @param {any} arg 
     * @memberof Personal
     */
    skip(arg?:any){
      console.log('====================================');
      console.log(arg);
      console.log('====================================');
    }
    /**
     * 上半部分列表渲染
     * 
     * @param {any} {item,index} 
     * @returns 
     * @memberof Personal
     */
    listRender({item,index}){
      // todo fetchdata
      let count = 10
      return(
        <View key={index}>
          <TouchableHighlight
            onPress={this.skip.bind(this,item)}
            underlayColor={basicStyle.lightGrey}
            activeOpacity={0.4}>
            <View style={listStyle.line}>
              <Image
              style={listStyle.itemImage}
              source={require('../../assets/img/Personal.png')}></Image>
              <View style={listStyle.itemTextGroup}>
                <Text style={listStyle.itemText}>{item.title}</Text>
                <Text>{`(${count})`}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
    /**
     * 下拉刷新事件
     * 
     * @memberof Personal
     */
    onRefresh(){
      console.log(this)
      this.setState({isRefreshing:true})
      setTimeout(()=>{
        console.log(this)
        this.setState({isRefreshing:false})
      },3000)
    }
    /**
     * 下半部分列表项渲染
     * 
     * @param {any} {item,index} 
     * @returns 
     * @memberof Personal
     */
    renderItemGroup({item,index}){
      // console.log(require(`'${item.headImage}'`))
      return(
        <View key={index}>
          <TouchableHighlight>
            <View style={listStyle.line}>
              <Image
              style={listStyle.itemImage}
              source={{uri:`${item.headImage}`}}/>
              <View>
                <Text>{item.title}</Text>
                <Text>{`${item.totalCount}首`}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
    /**
     * 下半部分列表标题渲染
     * 
     * @param {any} {item,index} 
     * @returns 
     * @memberof Personal
     */
    renderItemTitle({section}){
      console.log(section)
      return(
        <View key={section} style={listStyle.lineContainer} >
          <TouchableHighlight style={listStyle.outerTouch}>
            <View style={listStyle.sectionTitleGroup}>
              <Image
                source={require('../../assets/img/Personal.png')}
              />
              <Text>{section.key}</Text>
              <Image
              style={listStyle.settings}
              source={require('../../assets/img/Personal.png')}/>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
   render():JSX.Element {
     return (
       <View>
         <ScrollView
          refreshControl={
            <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="red"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor='white'
            />
          }
         >
          <FlatList
          data={this.state.list}
          renderItem={this.listRender}
          ></FlatList>
          <SectionList
            renderItem={this.renderItemGroup}
            renderSectionHeader={this.renderItemTitle}
            sections={createData}
          />
         </ScrollView>
       </View>
     );
   }
 }
