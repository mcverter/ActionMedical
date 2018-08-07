import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const UListBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - if (checklist = (option? :checklist) ? 'checklist' : nil)
  - if @document.attr? :icons, 'font'
    - marker_checked = '<i class="icon-check"></i>'
    - marker_unchecked = '<i class="icon-check-empty"></i>'
  - else
    - marker_checked = '&#8864;'
    - marker_unchecked = '&#9723;'
%div{:id=>@id, :class=>['ulist', checklist, @style, role]}
  - if title?
    .title=title
  %ul{:class=>(checklist || @style)}
    - items.each do |item|
      %li{:class=>('slide' if option? :step)}<
        - if item.blocks?
          %p
            - if checklist && (item.attr? :checkbox)
              =%(#{(item.attr? :checked) ? marker_checked : marker_unchecked} #{item.text})
            - else
              =item.text
            =item.content.chomp
        - else
          - if checklist && (item.attr? :checkbox)
            =%(#{(item.attr? :checked) ? marker_checked : marker_unchecked} #{item.text})
          - else
            =item.text

                <div className="ulist">
                    <ul>
                        <li>extra hands</li>
                        <li>second opinion</li>
                        <li>
                            safety<div className="ulist">
                            <ul>
                                <li>eyes in the back of your head</li>
                                <li>crowd control</li>
                                <li>direct protection while treating</li>
                            </ul>
                        </div></li>
                    </ul>
                </div>


        <div className="ulist checklist">
                        <ul className="checklist">
                            <li><i className="icon-check-empty"></i> water (and extra containers)</li>
                            <li><i className="icon-check-empty"></i> roller gauze</li>
                            <li><i className="icon-check-empty"></i> gauze pads (assorted)</li>
                            <li><i className="icon-check-empty"></i> bandaids (assorted)</li>
                            <li><i className="icon-check-empty"></i> Tagaderm strips</li>
                            <li><i className="icon-check-empty"></i> SAM splint / wire splint</li>
                            <li><i className="icon-check-empty"></i> wrapping supplies like Ace bandages</li>
                            <li><i className="icon-check-empty"></i> burn treatment pads/gel</li>
                            <li><i className="icon-check-empty"></i> instant ice packs</li>
                        </ul>
                    </div>

*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default UListBlock;
