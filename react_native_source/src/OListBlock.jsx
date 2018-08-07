import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const OListBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
%div{:id=>@id, :class=>['olist', @style, role]}
  - if title?
    .title=title
  %ol{:class=>@style, :start=>(attr :start), :type=>list_marker_keyword}
    - items.each do |item|
      %li{:class=>('slide' if option? :step)}
        - if item.blocks?
          %p=item.text
          =item.content.chomp
        - else
          =item.text






                              <div className="olist arabic">
                        <ol className="arabic">
                            <li>
                                Replace lost tooth into socket or store in container with patient&#8217;s own saliva.
                            </li>
                            <li>
                                Have patient bite gently on wad of gauze.
                                <div className="ulist">
                                    <ul>
                                        <li>Do not touch the root of the tooth. <span className="icon black"><i className="icon-flag"></i></span></li>
                                        <li>Patient needs to see a dentist ASAP. <span className="icon red"><i className="icon-flag"></i></span></li>
                                    </ul>
                                </div>
                            </li>
                        </ol>
                    </div>





                            <div className="olist arabic">
            <ol className="arabic">
                <li className="slide">
                    <strong>Take precautions.</strong><br>
                    Put on gloves, consider mask/goggles.
                </li>
                <li className="slide">
                    <strong>Introduce yourself and check for consent.</strong><br>
                    I&#8217;m Danarys Targaryan of House Targaryan, I&#8217;m a street medic, I can help if that&#8217;s okay.
                </li>
                <li className="slide">
                    <strong>Check for contact lenses.</strong><br>
                    Are you wearing contacts?
                    <div className="olist loweralpha">
                        <ol className="loweralpha" type="a">
                            <li>
                                If <strong>yes</strong>, help them <strong>remove their lenses immediately</strong>.
                            </li>
                        </ol>
                    </div>
                </li>
            </ol>
        </div>


*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default OListBlock;
