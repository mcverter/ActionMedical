import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const ListingBlock = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['listingblock', role, ('slide' if option? :step)]}
  - if title?
    .title=captioned_title
  .content
    - nowrap = !(@document.attr? :prewrap) || (option? 'nowrap')
    - if @style == 'source'
      - language = attr :language
      - code_class = language ? [language, "language-#{language}"] : nil
      - pre_class = ['highlight']
      - pre_lang = nil
      - case attr 'source-highlighter'
      - when 'coderay'
        - pre_class = ['CodeRay']
      - when 'pygments'
        - pre_class = ['pygments','highlight']
      - when 'prettify'
        - pre_class = ['prettyprint']
        - pre_class << 'linenums' if attr? :linenums
        - pre_class << language if language
        - pre_class << "language-#{language}" if language
        - code_class = nil
      - when 'html-pipeline'
        - pre_lang = language
        - pre_class = code_class = nil
        - nowrap = false
      -#- when 'highlightjs', 'highlight.js'
      - pre_class << 'nowrap' if nowrap
      %pre{:class=>pre_class, :lang=>pre_lang}
        -# Haml automatically preserves whitespace in <pre> tags by replacing newlines with &#x000A;, but I'm not sure about the <code> tag
        %code{:class=>code_class}~content
    - else
      %pre{:class=>(nowrap ? 'nowrap' : nil)}
        -# Haml automatically preserves whitespace in <pre> tags by replacing newlines with &#x000A;, but I'm not sure about the <code> tag
        %code~content
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default ListingBlock;
