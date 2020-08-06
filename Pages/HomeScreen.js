import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import AsssetExample from '../components/AssetExample';
import HomeButton from '../components/HomeButton';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }
  likePressed = (action) => {
    var likes = db.ref('Ratings');
    var likeCount;
    likes.once('value', (data) => {
      db.ref('Ratings').update({
        likeCount: data.val()[action] + 1,
      });
      db.ref('Ratings/likeCount').once('value', (data) => {
        likeCount = data.val();
      });
      this.setState({ likes: likeCount });
    });
  };
  dislikePressed = (action) => {
    var dislikes = db.ref('Ratings');
    var dislikeCount;
    dislikes.once('value', (data) => {
      db.ref('Ratings').update({
        dislikeCount: data.val()[action] + 1,
      });
      db.ref('Ratings/dislikeCount').once('value', (data) => {
        dislikeCount = data.val();
      });
      this.setState({ dislikes: dislikeCount });
    });
  };
  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: 'bisque' }}>
          <AppHeader Text={'News'}></AppHeader>
          <TouchableOpacity
            style={[styles.buttons, { height: 100 }]}
            onPress={
              (this.gotoTopNews = () => {
                this.props.navigation.navigate('TopNews');
              })
            }>
            <Text style={styles.textStyle}>Top News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={
              (this.gotoWeather = () => {
                this.props.navigation.navigate('Weather');
              })
            }>
            <Text style={styles.textStyle}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={
              (this.gotoScience = () => {
                this.props.navigation.navigate('Science');
              })
            }>
            <Text style={styles.textStyle}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={
              (this.gotoTechnology = () => {
                this.props.navigation.navigate('Technology');
              })
            }>
            <Text style={styles.textStyle}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={
              (this.gotoSports = () => {
                this.props.navigation.navigate('Sports');
              })
            }>
            <Text style={styles.textStyle}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={
              (this.gotoPuzzles = () => {
                this.props.navigation.navigate('Puzzles');
              })
            }>
            <Text style={styles.textStyle}>Puzzles</Text>
          </TouchableOpacity>

          <View style ={{display:'flex',flexDirection:'row',marginTop:10}}>
          <TouchableOpacity
            onPress={() => {
              var action = 'likeCount';
              this.likePressed(action);
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginLeft:80
              }}
              source={require('../assets/123.png')}></Image>
            <Text style={{ color: 'mediumturquoise',marginLeft:120 ,marginTop:20}}>
              {this.state.likes}
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
              var action = 'dislikeCount';
              this.dislikePressed(action);
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginLeft:80
              }}
              source={require('../assets/321.png')}></Image>
            <Text
              style={{
                color: 'mediumturquoise',
                marginLeft:115,
                marginTop:20
              }}>
              {this.state.dislikes}
            </Text>
          </TouchableOpacity>
        </View>
          <Text
            style={{
              color: '#fa3454',
              fontSize: 26,
              marginLeft: '40%',
              marginBottom:5
            }}>
            Rate Us
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#fa3454',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 72,
    marginTop: '8%',
    marginLeft: '20%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'mediumturquoise',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});
