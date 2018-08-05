import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const QuotedInline = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
    - unless @id.nil?
  %a{:id=>@id}
- case @type
- when :emphasis
  %em{:class=>role}=@text
- when :strong
  %strong{:class=>role}=@text
- when :monospaced
  %code{:class=>role}=@text
- when :superscript
  %sup{:class=>role}=@text
- when :subscript
  %sub{:class=>role}=@text
- when :double
  =(role? ? %(<span class="#{role}">&#8220;#{@text}&#8221;</span>) : %(&#8220;#{@text}&#8221;))
- when :single
  =(role? ? %(<span class="#{role}">&#8216;#{@text}&#8217;</span>) : %(&#8216;#{@text}&#8217;))
- else
  =(role? ? %(<span class="#{role}">#{@text}</span>) : @text)

     */}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default QuotedInline;
