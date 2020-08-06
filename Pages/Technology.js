import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import AsssetExample from '../components/AssetExample';
import HomeButton from '../components/HomeButton';

export default class Technology extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'bisque' }}>
        <AppHeader Text={'Technolgy'}></AppHeader>
        <TouchableOpacity
          style={{
            marginRight: 370,
            marginTop: -50,
            marginLeft: 15,
            marginBottom: 20,
          }}
          onPress={
            (this.goHome = () => {
              this.props.navigation.navigate('HomeScreen');
            })
          }>
          <HomeButton />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.articles, { height: 150 }]}>
          <Text style={styles.textStyle}> Article 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}> Article 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}> Article 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}> Article 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}> Article 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}> Article 6</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'mediumturquoise',
            fontSize: 17,
             
            marginTop: '5%',
            marginLeft: '4%',
            marginBottom: '4.5%',
          }}>
          That's it for today's Technology News
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  articles: {
    backgroundColor: '#fa3454',
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: 100,
    marginTop: '3%',
    marginLeft: '5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'mediumturquoise',
  },
  textStyle: {
    color: 'white',
         fontSize : 18
  },
});
