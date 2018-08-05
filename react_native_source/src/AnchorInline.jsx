import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const AnchorInline = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - case @type
- when :xref
  - refid = (attr :refid) || @target
  %a(href="#{@target}")<=(@text || @document.references[:ids].fetch(refid, "[#{refid}]")).tr_s("\n", ' ')
- when :ref
  %a(id=@target)
- when :bibref
  %a(id=@target)>
  = surround '[', ']' do
    =@target
- else
  %a(href=@target){:class=>role, :target=>(attr :window)}=@text
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default AnchorInline;
