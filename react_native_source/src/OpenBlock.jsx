import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const OpenBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['openblock', (@style != 'open' ? @style : nil), role, ('slide' if option? :step)]}
  - if title?
    .title=title
  .content
    =content.chomp



                      <div class="openblock">
                        <div class="content">
                            <div class="admonitionblock warning mini">
                                <table>
                                    <tr>
                                        <td class="icon">
                                            <i class="icon-warning"></i>
                                        </td>
                                        <td class="content">
                                            Being a street medic can be traumatizing.
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="ulist">
                                <ul>
                                    <li>
                                        Even street medic <em>trainings</em> can get intense.<div class="ulist">
                                        <ul>
                                            <li>
                                                Scenarios incorporate:<div class="ulist">
                                                <ul>
                                                    <li>simulated violence, pain, cops</li>
                                                    <li>authentic randomness</li>
                                                </ul>
                                            </div></li>
                                        </ul>
                                    </div></li>
                                    <li>Learn to make the difference between death and life.</li>
                                    <li>Medics help each other through the stresses and trauma.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

*/}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default OpenBlock;
