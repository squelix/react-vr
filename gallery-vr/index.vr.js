import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  Pano,
} from 'react-vr';

import UI from './components/UI';

const Config = [
  {
    key: 0,
    name: 'Inside Building',
    imageSrc: 'vr1.jpg',
  },
  {
    key: 1,
    name: 'Witcher',
    imageSrc: 'vr2.jpg',
  },
  {
    key: 2,
    name: 'Disney',
    imageSrc: 'vr3.jpg',
  },
  {
    key: 3,
    name: 'R2D2',
    imageSrc: 'vr4.jpg',
  }
];

export default class GalleryVr extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      src: 'vr1.jpg',
    };
  }

  render() {

    return (
      <View>
        <Pano
            source={asset(this.state.src)}
        />
        <UI
          buttonConfig={Config}
          onClick={(key)=>{
            this.setState({src: Config[key].imageSrc});
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('GalleryVr', () => GalleryVr);
