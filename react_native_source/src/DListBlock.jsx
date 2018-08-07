import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const DListBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      <View style={styles.dListContainer}>
        <dList>
          <dTerm style="hdlist1"/>
          <dDefinition />
        </dList>
      </View>
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


       <div className="dlist">
            <dl>
                <dt className="hdlist1">Other personal protective gear</dt>
                <dd>
                    <div className="ulist">
                        <ul>
                            <li>goggles (chemicals, projectiles, and body substances)</li>
                            <li>poncho (chemicals and body substances)</li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>


                <div className="dlist">
            <dl>
                <dt className="hdlist1">Objectives</dt>
                <dd>
                    <div className="ulist">
                        <ul>
                            <li>Determine your size in exam gloves.</li>
                            <li>Practice getting them on.</li>
                            <li>Practice taking them off properly.</li>
                        </ul>
                    </div>
                </dd>
            </dl>
        </div>


*/}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default DListBlock;
