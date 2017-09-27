import React from 'react';
import {
    Animated,
    Text,
    Image,
    VrButton,
    asset,
} from 'react-vr';

const Easing = require('Easing');

export default class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animatedTranslation: new Animated.Value(0),
    };
  }

  animateIn() {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 0.125,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
  }

  getNewColor() {
      return 'rgb(' + this.getRandomArbitrary(0, 255) + ', ' + this.getRandomArbitrary(0, 255) + ', ' + this.getRandomArbitrary(0, 255) + ')';
  }

  animateOut() {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 0,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  render() {

    return (
      <Animated.View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0.0125,
          transform: [
            {
                translateZ: this.state.animatedTranslation
            },
          ],
          width: 0.7,
        }}
      >
        <VrButton
          onClick={() => this.props.onClick()}
          onEnter={() => this.animateIn}
          onExit={() => this.animateOut}
          style={{
              width: 0.7,
              height: 0.7,
              backgroundColor: this.getNewColor()
          }}
        >
            <Image
                style={{
                    width: 0.5,
                    height: 0.5,
                    marginLeft: 0.1,
                    marginRight: 0.1,
                    marginTop: 0.1,
                    marginBottom: 0.1,
                }}
                source={asset(this.props.src)}
            >
                <Text
                    style={{
                        width: 0.5,
                        height: 0.5,
                        fontSize: 0.1,
                        fontWeight: '400',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                    }}
                >
                    {this.props.name}
                </Text>
            </Image>
        </VrButton>
      </Animated.View>
    );
  }
}
