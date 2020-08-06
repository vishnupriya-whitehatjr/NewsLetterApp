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

export default class Puzzles extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ backgroundColor: 'bisque' }}>
        <AppHeader Text={'Puzzles'}></AppHeader>
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
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}>Puzzle 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.articles}>
          <Text style={styles.textStyle}>Puzzle 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.articles, { height: 90 }]}>
          <Text style={styles.textStyle}>Puzzle 3</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'mediumturquoise',
            fontSize: 20,
            marginTop: '8%',
            marginLeft: '10%',
            marginBottom: '2.5%',
          }}>
          That's it for today's Puzzles
        </Text>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  articles: {
    backgroundColor: '#fa3454',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 290,
    marginTop: '3%',
    marginLeft: '5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'mediumturquoise',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});
