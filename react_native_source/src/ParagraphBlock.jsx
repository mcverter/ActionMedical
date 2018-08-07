import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const ParagraphBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['paragraph', role, ('slide' if option? :step)]}
  - if title?
    .title=title
  %p{:class=>(attr :position)}><=content


          <div className="paragraph"><strong>DEMO: Modified (forearm) C-spine stabilization</strong></div>

*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default ParagraphBlock;
