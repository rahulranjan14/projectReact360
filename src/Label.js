import React from 'react';
import { asset,  Pano, Text, View   } from 'react-vr';


export default class Label extends React.Component {
  render() {
    return (
      <View>
    
      <Text
      style={{
          backgroundColor: '#888c8d',
          fontSize: 1.5,
          fontWeight: '600',
          layoutOrigin: [0.1, 0.3],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [-13, 8, 21]},
          {rotateY: 180}
            ],
          
         

      }}>
      Nandi Hills
    </Text>


    <Text
    style={{
        backgroundColor: '#2B2B52',
        fontSize: 2,
        fontWeight: '500',
        layoutOrigin: [2.5, 1],
        paddingLeft: 0.2,
        paddingRight: 0.2,
        
        textAlign: 'center',
        textAlignVertical: 'center',
        transform: [{translate: [2, 7, -50]},
        {rotateY: 0}
          ],
        
       

    }}>
    College
  </Text>

      </View>
    );
  }
};


