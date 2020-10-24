import React from 'react';
import {
 
  asset,
  Pano,
  Text,
  View,
  Sound,
  VrButton,
  StyleSheet,
  VrHeadModel
} from 'react-vr';

import Objects from './Objects';
import Label from './Label';
import Labelagain from './Labelagain';

export default class App extends React.Component {

    constructor(props){
        super();
        this.state = {
            background: 'scene.jpg',
            visible: true,
        };
    }

    

    changeScene(){

       
        this.setState({
            background: 'scene1.jpg',
            visible: false,
        })
      
    }

    changeSceneagain(){

       
        this.setState({
            background: 'scene.jpg',
            visible: false,
        })
      
    }

    renderItems(){
        if(this.state.visible === true){
            return <Objects />
        }
    }

    renderLabel(){
        if(this.state.visible === true){
            return <Label />
        }
    }

    renderLabelagain(){
        if(this.state.visible === false){
            return <Labelagain />
        }
    }


    renderChangeScene(){
        if(this.state.visible === true){
            return (
            <VrButton   onClick={this.changeScene.bind(this)}>
            <Text
                style={{
                    backgroundColor: '#4834DF',
                    fontSize: 0.9,
                    fontWeight: '600',
                    layoutOrigin: [0.1, 0.3,1.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',  
                    transform: [{translate: [4, 2, -8]}],
                }}>
                Change scene
            </Text>
        </VrButton>
            )
        }
    }


  
   

  render() {

   

    return (
      <View>
        <Pano   source={asset(this.state.background)}  />
        <Sound
            loop={true}
            volume={0.5}
            source={{
                mp3: asset('music.mp3')
            }}
        />
     
      {this.renderChangeScene()}   
      {this.renderLabel()}
      {this.renderLabelagain()}
      {this.renderItems()}
      </View>
    );
  }
};


