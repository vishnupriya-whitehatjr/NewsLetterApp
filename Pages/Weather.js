import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import AsssetExample from '../components/AssetExample';
import HomeButton from '../components/HomeButton';
import axios from 'axios';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      Weather: '',
    };
  }
  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ Weather: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.Weather === '') {
      return (
        <View style={{ backgroundColor: 'bisque' }}>
          <Text
            style={{
              color: '#fa3454',
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
              height: 800,
              marginTop: 400,
            }}>
            Loading...
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor: 'bisque' }}>
          <AppHeader Text={'Weather'}></AppHeader>
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
          <View style={[styles.articles, { height: 350 }]}>
            <Text style={[styles.textStyle, { fontSize: 21, marginLeft: 5 }]}>
              Weather: {this.state.Weather.weather[0].main} (
              {this.state.Weather.weather[0].description})<br/>Temperature: {this.state.Weather.main.temp}°C<br/>
              Minimun Temperature : {this.state.Weather.main.temp_min}
             <br/>Maximum Temperature : {this.state.Weather.main.temp_max}<br/>
             Pressure : {this.state.Weather.main.pressure}°F<br/>
             Humidity : {this.state.Weather.main.humidity} g/m³<br/> 
             Wind Speed : {this.state.Weather.wind.speed} mph<br/>
             Wind Temperature : {this.state.Weather.wind.deg}°F
            </Text>
          </View>
          <Text
            style={{
              color: 'mediumturquoise',
              fontSize: 18,
               
              marginTop: '8%',
              marginLeft: '4%',
              marginBottom: '4%',
            }}>
            That's it for today's Weather News
          </Text>
          <TouchableOpacity
            style={[styles.articles, { height: 170, marginBottom: '2%' }]}>
            <Text style={styles.textStyle}> Tomorrow's Weather</Text>
          </TouchableOpacity>
         
        </View>
      );
    }
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
