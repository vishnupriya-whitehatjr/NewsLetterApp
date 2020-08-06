import * as React from 'react';
import { Image } from 'react-native';

class HomeButton extends React.Component {
  render() {
    return (
      <Image
        style={{
          width: 30,
          height: 30,
        }}
        source={require('../assets/1234 .png')}></Image>
    );
  }
}
export default HomeButton;
