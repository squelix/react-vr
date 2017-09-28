import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';

import VideoVR from './components/VideoVR';

export default class WelcomeToVR extends React.Component {

  constructor(props) {
    super(props);
  }

  helloWorld() {
      return(
          <View>
              <Pano source={asset('vr2.jpg')}/>
              <Text
                  style={{
                      backgroundColor: '#777879',
                      fontSize: 0.8,
                      fontWeight: '400',
                      layoutOrigin: [0.5, 0.5],
                      paddingLeft: 0.2,
                      paddingRight: 0.2,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      transform: [{translate: [0, 0, -10]}],
                  }}>
                  HELLO
              </Text>
          </View>
      );
  }

  render() {
    return (
      <View>
          <VideoVR/>
          {/*{ this.helloWorld() }*/}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
