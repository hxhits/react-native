import React, {Component} from 'react';
import { View,Text} from 'react-native';

export default class Hhoangcsc extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text>
        {this.props.myname} - {this.props.mybod}
        </Text>
      </View>
    );
  }
}

Hhoangcsc.propType = {
  myname:React.PropTypes.string,
  mybod:React.PropTypes.string
};
