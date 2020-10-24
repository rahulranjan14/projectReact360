import React from 'react';
import { asset,  Pano, Text, View   } from 'react-vr';


export default class Labelagain extends React.Component {
  render() {
    return (
      <View>
    
      <Text
      style={{
          backgroundColor: '#888c8d',
          fontSize: 2,
          fontWeight: '900',
          layoutOrigin: [0.1, 0.3],
          paddingLeft: 2,
          paddingRight: 2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [-50, 9, -35]},
          {rotateY: 95},
          
            ],
          
         

      }}>
      Nandi Hills
    </Text>


    <Text
    style={{
        backgroundColor: '#2B2B52',
        fontSize: 1.5,
        fontWeight: '400',
        layoutOrigin: [0.5, 0.5],
        paddingLeft: 0.2,
        paddingRight: 0.2,
        textAlign: 'center',
        textAlignVertical: 'center',
        transform: [{translate: [4, 10, -40]},
        {rotateY: 0}
          ],
        
       

    }}>
    College
  </Text>

      </View>
    );
  }
};

