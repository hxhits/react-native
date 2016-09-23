import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Navigator
} from 'react-native';
import StarRating from 'react-native-star-rating';
import PageDetail from '../components/pagedetail.js';

export default class MyListView extends Component{

  constructor(props){
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      this.state = {
        dataSource: this.ds.cloneWithRows(this.props.mydata),
        starCount: 3.5
      }
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  openPageDetail(item){
    debugger
    this.props.navigator.push({
      title:'title page detail',
      component:PageDetail
    });
  }
/*
  createItem(property){
   return(
     <TouchableHighlight onPress={()=>{}} underlayColor='gray'>
       <View>
         <View style={styles.rowContainer}>
           <Image style={styles.thumb} source={{uri:property.img}} />
           <View style={styles.textContainer}>
               <Text style={styles.title}>{property.title}</Text>
               <Text style={styles.content}>{property.content}</Text>
               <View style={styles.more}>
                 <View style={styles.rating}>
                   <StarRating
                     disabled={false}
                     emptyStar={'ios-star-outline'}
                     fullStar={'ios-star'}
                     halfStar={'ios-star-half'}
                     iconSet={'Ionicons'}
                     maxStars={5}
                     //rating={this.state.starCount}

                     selectedStar={(rating) => this.onStarRatingPress(rating)}
                     starColor={'red'}
                     starSize={15}
                   />
                 </View>
                 <View style={styles.rating}>
                 </View>
                 <View style={styles.rating}>
                 </View>
                 <View style={styles.rating}>
                 </View>
               </View>
           </View>
         </View>
         <View style={styles.separator}/>
       </View>
     </TouchableHighlight>
   );
  }
*/
  render() {
    return (
            <View>
              <ListView
                dataSource={this.state.dataSource}
                //renderRow = {this.createItem}
                renderRow = {(property)=>{
                  return(
                    <View style={styles.layout}>
                    <TouchableHighlight onPress={this.openPageDetail.bind(this,property)} underlayColor='gray'>
                      <View style={styles.containerItem}>
                        <View style={styles.rowContainer}>
                          <Image style={styles.thumb} source={property.img} />
                          <View style={styles.textContainer}>
                              <Text style={styles.title}>{property.title}</Text>
                              <Text style={styles.content}>{property.content}</Text>
                              <View style={styles.more}>
                                <View style={styles.rating}>
                                  <StarRating
                                    disabled={false}
                                    emptyStar={'ios-star-outline'}
                                    fullStar={'ios-star'}
                                    halfStar={'ios-star-half'}
                                    iconSet={'Ionicons'}
                                    maxStars={5}
                                  //  rating={this.state.starCount}
                                    rating={property.starcount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    starColor={'red'}
                                    starSize={11}
                                  />
                                </View>
                                <View style={styles.textDownload}>
                                  <Text>{property.downloadCount}</Text>
                                </View>
                                <View style={styles.install}>
                                  <Image style={styles.iconInstall} source={require('../images/checked.png')} />
                                  <Text style={styles.textInstall} > INSTALLED</Text>
                                </View>
                              </View>
                          </View>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                  )
                }}
              />
            </View>
          );
  }
}

var styles = StyleSheet.create({
  layout:{
  //  resizeMode:'cover',
    backgroundColor:'#FFFFFF'
  },
  containerItem:{
    borderWidth:1,
    backgroundColor:'white',
    borderColor:'#dddddd',
    margin: 5,
    padding: 5
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  content: {
    fontSize: 14,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  more: {
    flex:1,
    flexDirection:'row'
  },
  rating: {
    flex: 0.2,
    justifyContent:'center'
  },
  textDownload: {
    flex: 0.4,
    marginLeft:5
  },
  install:{
    flex: 0.4,
    flexDirection:'row'
  },
  checkInstall:{
    width: 10,
    height: 10
  },
  textInstall:{
    color:'#0099ff'
  },
  iconInstall:{
    width:20,
    height:20,
    justifyContent:'center'
  }
});
