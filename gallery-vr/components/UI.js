import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

export default class UI extends React.Component {

  render () {
    const buttons = this.props.buttonConfig.map((button) =>
      <Button
        key={button.key}
        onClick={()=>{
          this.props.onClick(button.key);
        }}
        src={button.imageSrc}
        name={button.name}
      />
    );

    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          transform: [
            {rotateX: -12},
            {translate: [-1.5, 0, -3]},
          ],
          width: 3,
        }}
      >
        {buttons}
      </View>
    );
  }
}
