import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const VerseBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['verseblock', role, ('slide' if option? :step)]}
  - if title?
    .title=title
  -# Haml automatically preserves whitespace in <pre> tags by replacing newlines with &#x000A;
  %pre.content=content
  - if (attr? :attribution) or (attr? :citetitle)
    .attribution
      - if attr? :citetitle
        %cite=attr :citetitle
      - if attr? :attribution
        - if attr? :citetitle
          %br
        &#8212; #{attr :attribution}

       */}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default VerseBlock;
