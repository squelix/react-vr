import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VideoPano,
  MediaPlayerState,
} from 'react-vr';

const EventsType =  {
  'KeyboardInputEvent': 'KeyboardInputEvent',
  'TouchInputEvent': 'TouchInputEvent',
  'GamepadInputEvent': 'GamepadInputEvent',
  'MouseInputEvent': 'MouseInputEvent',
};

const EventsKeyboardType =  {
  'keydown': 'keydown',
  'keyup': 'keyup',
  'keypress': 'keypress',
};

export default class WelcomeToVR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerState: {
        autoPlay: true,
        muted: false,
        playControl: 'play',
      }
    };
  }

  onInput(e, type, eventType = undefined) {
    const event = e.nativeEvent.inputEvent;

    if (eventType) {
        if (event.type === type && event.eventType === eventType) {
            if (event.keyCode === 32) {
              const playControl = this.state.playerState.playControl === 'play' ? 'pause' : 'play';
              this.setState({
                  ...this.state,
                  playerState: {
                    ...this.state.playerState,
                    playControl
                  }
              });
            } else if (event.keyCode === 77) {
                const muted = !this.state.playerState.muted;
                this.setState({
                    ...this.state,
                    playerState: {
                        ...this.state.playerState,
                        muted
                    }
                });
            }
        }
    } else {
        if (event.type === type) {
            console.log(event);
        }
    }
  }

  render() {
    return (
      <View onInput={e => this.onInput(e, EventsType.KeyboardInputEvent, EventsKeyboardType.keydown)}>
        <VideoPano
            autoPlay={this.state.playerState.autoPlay}
            muted={this.state.playerState.muted}
            playControl={this.state.playerState.playControl}
            source={asset('video-360.mp4', { layout: 'SPHERE' })}
        />
        {/*<Pano source={asset('chess-world.jpg')}/>*/}
        {/*<Text*/}
          {/*style={{*/}
            {/*backgroundColor: '#777879',*/}
            {/*fontSize: 0.8,*/}
            {/*fontWeight: '400',*/}
            {/*layoutOrigin: [0.5, 0.5],*/}
            {/*paddingLeft: 0.2,*/}
            {/*paddingRight: 0.2,*/}
            {/*textAlign: 'center',*/}
            {/*textAlignVertical: 'center',*/}
            {/*transform: [{translate: [0, 0, -3]}],*/}
          {/*}}>*/}
          {/*hello*/}
        {/*</Text>*/}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
