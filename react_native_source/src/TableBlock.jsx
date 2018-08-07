import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const TableBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {
        /*
        %table{:id=>@id, :class=>['tableblock', "frame-#{attr :frame, 'all'}", "grid-#{attr :grid, 'all'}", role, ('slide' if option? :step)],
    :style=>((css_style = [("width:#{attr :tablepcwidth}%" unless option? :autowidth),
                       ("float:#{attr :float}" if attr? :float)].compact * '; ').empty? ? nil : css_style)}
  - if title?
    %caption.title=captioned_title
  - unless (attr :rowcount).zero?
    %colgroup
      - if option? :autowidth
        - @columns.each do
          %col
      - else
        - @columns.each do |col|
          %col(style="width:#{col.attr :colpcwidth}%")
    - [:head, :foot, :body].select {|tblsec| !@rows[tblsec].empty? }.each do |tblsec|
      - haml_tag "t#{tblsec}" do
        - @rows[tblsec].each do |row|
          %tr
            - row.each do |cell|
              -# store reference of content in advance to resolve attribute assignments in cells
              - if tblsec == :head
                - cell_content = cell.text
              - else
                - case cell.style
                - when :verse, :literal
                  - cell_content = cell.text
                - else
                  - cell_content = cell.content
              - cell_css_style = (@document.attr? :cellbgcolor) ? %(background-color:#{@document.attr :cellbgcolor};) : nil
              - haml_tag (tblsec == :head ? 'th' : 'td'), :<, :class=>['tableblock', "halign-#{cell.attr :halign}", "valign-#{cell.attr :valign}"],
                  :colspan=>cell.colspan, :rowspan=>cell.rowspan, :style=>cell_css_style do
                - if tblsec == :head
                  =cell_content
                - else
                  - case cell.style
                  - when :asciidoc
                    %div=cell_content
                  - when :verse
                    .verse~cell_content
                  - when :literal
                    .literal
                      %pre=cell_content
                  - when :header
                    - cell_content.each do |text|
                      %p.tableblock.header<=text
                  - else
                    - cell_content.each do |text|
                      %p.tableblock<=text

        <table className="tableblock frame-all grid-all" style="width:100%">
            <colgroup>
                <col style="width:25%">
                <col style="width:75%">
            </colgroup>
            <tbody>
            <tr>
                <td className="tableblock halign-left valign-top"><p className="tableblock">Irritant</td>
                <td className="tableblock halign-left valign-top"><p className="tableblock">oleoresin capsicum (OC)</td>
            </tr>
            <tr>
                <td className="tableblock halign-left valign-top"><p className="tableblock">Delivery</td>
                <td className="tableblock halign-left valign-top"><p className="tableblock">mainly direct spray, sometimes projectiles</td>
            </tr>
            <tr>
                <td className="tableblock halign-left valign-top"><p className="tableblock">Primary effects</td>
                <td className="tableblock halign-left valign-top"><p className="tableblock">pain, blindness, sometimes respiratory distress, mucous discharge</td>
            </tr>
            <tr>
                <td className="tableblock halign-left valign-top"><p className="tableblock">Secondary effects</td>
                <td className="tableblock halign-left valign-top"><p className="tableblock">irritation, dryness, certain sense of singular injustice</td>
            </tr>
            <tr>
                <td className="tableblock halign-left valign-top"><p className="tableblock">Primary treatment</td>
                <td className="tableblock halign-left valign-top"><p className="tableblock">water</td>
            </tr>
            <tr>
                <td className="tableblock halign-left valign-top"><p className="tableblock">Secondary treatments</td>
                <td className="tableblock halign-left valign-top"><p className="tableblock">“LAW”, air</td>
            </tr>
            </tbody>
        </table>

         */
      }
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default TableBlock;
