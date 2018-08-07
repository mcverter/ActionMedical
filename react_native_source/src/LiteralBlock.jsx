import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const LiteralBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['literalblock', role, ('slide' if option? :step)]}
  - if title?
    .title=title
  .content
    %pre{:class=>(!(@document.attr? :prewrap) || (option? :nowrap) ? 'nowrap' : nil)}=content
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default LiteralBlock;
