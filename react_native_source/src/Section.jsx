import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const Section = () => {
  return (
    <View style={styles.allComponentContainer}> {
      /*
      - if attr? 'canvas-image'
  %section{:id=>@id, :class=>['slide', 'canvas-image', role], :style=>"background-image: url(#{attr 'canvas-image'})"}
    =content.chomp
- else
  %section.slide{:id=>@id, :class=>role}
    - if has_role? 'title'
      %h1=title
    - else
      %h2=title
    =content.chomp

       */
    }
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default Section;
