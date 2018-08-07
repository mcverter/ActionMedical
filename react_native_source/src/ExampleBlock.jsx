import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const ExampleBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default ExampleBlock;

/*
      %div{:id=>@id, :class=>['exampleblock', role, ('slide' if option? :step)]}
  - if title?
    .title=captioned_title
  .content
    =content.chomp

      */