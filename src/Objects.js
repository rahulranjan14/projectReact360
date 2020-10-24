import React from 'react';
import { asset, View, Model, StyleSheet} from 'react-vr';


export default class Objects extends React.Component {
  render() {
    return (
      <View>
        <Model 
            source={{
                obj: asset('/Objects/IronMan.obj'),
                mtl: asset('/Objects/IronMan.mtl')
            }}
            style={{
                position:"absolute",
                transform: [
                    {translate: [-80,-12, -25]},
                    {scale: 0.1},
                    {rotateX: 0},
                    {rotateY: 90},
                    {rotateZ: 0}
                ]
            }}
          />  


        <Model 
            source={{
                
                obj: asset(''),
                mtl: asset('')
          
            }}
            style={{
                transform: [
                    {translate: [-100,-20, -60]},
                    {scale: 0.5},
                    {rotateX: 25},
                    {rotateY: -10},
                    {rotateZ: 0}
                ]
            }}
        />  


      </View>
    );
  }
};


