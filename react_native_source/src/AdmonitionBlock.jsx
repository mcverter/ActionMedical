import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const AdmonitionBlock = (props) => {
    const role = props.role || 'mini';
    const name = props.name || 'warning';
    return (
        <View style={[styles.allComponentContainer]}>
            <View style={[styles.admonitionblock, styles[name], styles[role]]} >
                <View style={styles.admonitionIcon}>
                    <AdmonitionIcon />
                </View>
                <View>
                    {...props.children}
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    allComponentContainer: {display: 'flex'},
    mini: {},
    warning: {}
});

export default AdmonitionBlock;



/*
      %div{:id=>@id, :class=>['admonitionblock', (attr :name), role]}
  %table
    %tr
      %td.icon
        - if @document.attr? :icons, 'font'
          %i{:class=>"icon-#{attr :name}", :title=>@caption}
        - elsif @document.attr? :icons
          %img{:src=>icon_uri(attr :name), :alt=>@caption}
        - else
          .title=@caption
      %td.content
        - if title?
          .title=title
        =content.chomp


<div className="admonitionblock warning mini">
                                <table>
                                    <tr>
                                        <td className="icon">
                                            <i className="icon-warning"></i>
                                        </td>
                                        <td className="content">
                                            Being a street medic can be traumatizing.
                                        </td>
                                    </tr>
                                </table>
                            </div>

      */