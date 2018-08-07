import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const ImageBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      <Image />
      {/*
      %div{:id=>@id, :class=>['imageblock', @style, role, ('slide' if option? :step)],
    :style=>((css_style = [("text-align: #{attr :align}" if attr? :align),
                       ("float: #{attr :float}" if attr? :float)].compact * '; ').empty? ? nil : css_style)}
  .content
    - if attr? :link
      %a.image{:href=>(attr :link)}
        %img{:src=>image_uri(attr :target), :alt=>(attr :alt), :width=>(attr :width), :height=>(attr :height)}
    - else
      %img{:src=>image_uri(attr :target), :alt=>(attr :alt), :width=>(attr :width), :height=>(attr :height)}
  - if title?
    .title=captioned_title

            <div className="imageblock">
            <div className="content">
                <img alt="seizure intervention comic" src="assets/images/seizure-intervention-comic.gif" width="800">
            </div>
        </div>

*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default ImageBlock;
