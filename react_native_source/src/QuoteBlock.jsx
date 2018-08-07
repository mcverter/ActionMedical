import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const QuoteBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['quoteblock', role, ('slide' if option? :step)]}
  - if title?
    .title=title
  %blockquote
    =content.chomp
    - if attr? :attribution
      .attribution
        %cite<
          - if attr? :citetitle
            =%(#{attr :attribution}, #{attr :citetitle})
          - else
            =attr :attribution
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default QuoteBlock;
