import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const DlistBlock = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - case @style
- when 'steps'
  %div{:id=>@id, :class=>['slist', 'steps', role]}
    - if title?
      .title=title
    %ol
      - items.each do |headings, contents|
        %li
          - if has_role? 'headings'
            %h3=[*headings].first.text
          - else
            - [*headings].each do |heading|
              %p<
                %strong=heading.text
          - unless contents.nil?
            - if contents.text?
              %p<=contents.text
            - if contents.blocks?
              =contents.content.chomp
- when 'qanda'
  %div{:id=>@id, :class=>['qlist', 'qanda', role]}
    - if title?
      .title=title
    %ol
      - items.each do |questions, answer|
        %li
          - [*questions].each do |question|
            %p<
              %em=question.text
          - unless answer.nil?
            - if answer.text?
              %p<=answer.text
            - if answer.blocks?
              =answer.content.chomp
- when 'horizontal'
  %div{:id=>@id, :class=>['hdlist', role]}
    - if title?
      .title=title
    %table
      - if (attr? :labelwidth) || (attr? :itemwidth)
        %colgroup
          %col{:style=>((attr? :labelwidth) ? %(width:#{(attr :labelwidth).chomp '%'}%;) : nil)}
          %col{:style=>((attr? :itemwidth) ? %(width:#{(attr :itemwidth).chomp '%'}%;) : nil)}
      - items.each do |terms, dd|
        %tr
          %td{:class=>['hdlist1', ('strong' if (option? 'strong'))]}
            - terms = [*terms]
            - last_term = terms.last
            - terms.each do |dt|
              =dt.text
              - if dt != last_term
                %br
          %td.hdlist2
            - unless dd.nil?
              - if dd.text?
                %p<=dd.text
              - if dd.blocks?
                =dd.content.chomp
- else
  %div{:id=>@id, :class=>['dlist',@style,role]}
    - if title?
      .title=title
    %dl
      - items.each do |terms, dd|
        - [*terms].each do |dt|
          %dt{:class=>('hdlist1' unless @style)}=dt.text
        - unless dd.nil?
          %dd
            - if dd.text?
              %p<=dd.text
            - if dd.blocks?
              =dd.content.chomp
*/}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default DlistBlock;
