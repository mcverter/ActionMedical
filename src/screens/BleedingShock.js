import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";
import CollapsibleOrderedList from "../components/CollapsibleOrderedList";


class BleedingShock extends Component {
  static navigationOptions = {title: 'Bleeding and Shock'};
  bleedingSigns = [{
    title: 'Signs of severe bleeding',
    content: [
      'evidence or suspicion of massive blood loss',
      'more than a pint in an adult at any rate',
      'arterial bleeding',
      'bright red',
      'spurting']
  }
  ];
  bleedingControl = [{
    title: 'Bleeding control',
    content: [
      'Apply direct pressure to the site of the wound, as long as doing so will not cause further injury.',
      'If direct pressure does not control severe bleeding or cannot be applied, consider a tourniquet.'
    ]
  }];
  directPressure = [{
    title: 'Direct pressure',
    content: [
      'Take body substance isolation precautions!',
      'Apply direct pressure with a gloved hand until gauze is available.',
      'Bleeding should stop within 3-5 minutes.',
      'Removing gauze risks breaking any clot that is forming. Keep packing it on as blood soaks through.',
      'Patients can apply direct pressure to their own wound in many cases, which can be empowering. Exercise good judgment.'
    ]
  }];
  tourniquetIndications = [{
    title: 'Indications for tourniquet',
    content: [
      'Amputation above the wrist or ankle.',
      'Severe bleeding not stopped by direct pressure.',
      'Direct pressure cannot be applied to site of wound.'
    ]
  }];
  tourniquetApplication = [{
    title: 'How to apply a tourniquet',
    content: [
      'Get a manufactured tourniquet device and learn to use it.',
      'Use a dedicated tourniquet when available.',
      'Makeshift from flexible strap or durable fabric.',
      'Apply tourniquet just above the injury site.',
      'Tighten till bleeding stops or becomes oozing.',
      'Affix the time you applied the tourniquet securely to the patient.',
      'Never release the tourniquet. Signs/symptoms of severe internal bleeding',
      'obvious bruising in abdomen or chest',
      'blood in vomit, stool, or urine',
      'abdominal pain and swelling',
      'This patient definitely needs follow-up care, but activate emergency response only if signs of shock are present.'
    ]
  }];
 hypovolemicShock = [{
    title: 'Signs of Shock due to blood loss',
    content: [
      'Hypovolemic Shock',
      'Caused by internal or external blood loss -technically, a severe loss of blood volume. Core organs compete for scarce or hard-to-get blood, causing slow overall decompensation. Shock kills!',
      'Signs of shock associated with injury early',
      'Headache, dizziness, nausea, fatigue Later/severe',
      'cold/clammy/pale/ashen skin',
      'pink parts are bluish',
      'rapid, shallow breathing',
      'disorientation or agitation or combativeness',
      ]
  }];

  shockFirstAid = [{
    title: 'First aid for shock',
    content: [
      'Activate emergency response!',
      'Get them someplace warm if they can be moved and shelter is near.',
      'Lie the patient down.',
      'Cover them with a blanket.',
      'No food or liquids.',
      'Keep them as .comfortable and calm as possible.',
      'Monitor level of consciousness and ABCs. Hypovolemic  shock',
      'Caused by internal or external blood loss -technically, a severe loss of blood volume. Core organs compete for scarce or hard-to-get blood, causing slow overall decompensation. Shock kills!'
    ]
  }]    ;
  render() {
    return (
      <View style={styles.BleedingShockContainer}>
        <Text>Severe bleeding is always a red flag, no matter when it's discovered.</Text>
        <CollapsibleUnorderedList sections={this.bleedingSigns}/>
        <CollapsibleOrderedList sections={this.bleedingControl}/>
        <CollapsibleUnrderedList sections={this.directPressure}/>
        <CollapsibleUnorderedList sections={this.tourniquetIndications}/>
        <CollapsibleOrderedList sections={this.tourniquetApplication}/>
        <CollapsibleUnorderedList sections={this.hypovolemicShock}/>
        <CollapsibleOrderedList sections={this.shockFirstAid}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  BleedingShockContainer: {
    flex: 1,
  },
});

export default BleedingShock;
