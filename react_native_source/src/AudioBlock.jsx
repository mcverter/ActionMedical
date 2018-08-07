import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const AudioBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['audioblock', @style, role]}
  - if title?
    .title=captioned_title
  .content
    %audio{:src=>media_uri(attr :target), :autoplay=>(option? :autoplay),
        :controls=>!(option? :nocontrols), :loop=>(option? :loop)}
      Your browser does not support the audio tag.
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default AudioBlock;
