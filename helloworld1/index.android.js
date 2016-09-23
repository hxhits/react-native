/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ListView,
  Navigator
} from 'react-native';
import MyListView from './components/listview.js';

var DATA = [
    {title:"Microsoft office mobile", content:"access view and edit your file through out ubuntu",starcount:2.5,downloadCount:"10M+download" ,img:require('./images/outlook.png')},
    {title:"Microsoft outlook", content:"outlook will have you easy to manage your email and update something more", starcount:4.5,downloadCount:"20M+download",img:require('./images/office.png')},
    {title:"One drive cloud storage", content:"if you have an account you can access cloud to storage database",starcount:3,downloadCount:"13M+download", img:require('./images/word.jpg')},
    {title:"React Native", content:"React Native build app on mobile- facebook copyright",starcount:1,downloadCount:"2M+download", img:require('./images/outlook.png')}
  ];

class helloworld1 extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

            <View>
              <Navigator renderScene={(route)=>{
                return(
                  <Text>hhh</Text>
                )
              }}/>
            
              <MyListView mydata={DATA}/>
            </View>
          );
  }
}



AppRegistry.registerComponent('helloworld1', () => helloworld1);
