import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";
import CollapsibleOrderedList from "../components/CollapsibleOrderedList";


class Airway extends Component {
  static navigationOptions = {title: 'Airway'};
  obstructionMOI = [
    {
      title: 'MOI for airway obstruction',
      content: [
        'Choking',
        'Injury to throat',
        'An airway obstruction is a red flag. Call for backup immediately!'
      ]
    }
  ];
  compromiseMOI = [
    {
      title: 'MOI for airway compromise',
      content: [
        'injury to throat',
        'unconsciousness with fluids in mouth',
        'unconscious and lying on back',
        'Airway compromise is cause for pausing your initial assessment to intervene.'
      ]
    }
  ];

  chokingIntervention = [
    {
      title: 'Intervention: Choking (conscious patient)',
      content: [
        'Establish if the patient is choking.',
        'Tell the patient to cough.',
        'Apply 5 firm back thrusts between lower shoulder blades.',
      ]
    }
  ];
  unresponsiveIntervention = [
    {
      title:   'Intervention: Open airway (unresponsive patient)',
      content: [
        'If your patient is or becomes unresponsive, check for breathing.',
        'If the patient is not breathing, open their airway {"\n"}' +
        ' \u2022 If no C-spine injury is suspected, use the head-tilt, chin-lift technique to open the airway.{"\n"}' +
        ' \u2022 For suspected C-spine compromise, use the jaw-thrust  maneuver.',
        'If the patient does not spontaneously breathe, initiate CPR.',
        'If the patient begins breathing on their own, roll them into the recovery position.'
      ]
    }
  ];

  render() {
    return (
      <View>
        <CollapsibleUnorderedList sections={this.obstructionMOI} />
        <CollapsibleUnorderedList sections={this.compromiseMOI} />
        <CollapsibleOrderedList sections={this.chokingIntervention}/>
        <CollapsibleOrderedList sections={this.unresponsiveIntervention}/>
        <Text>Head-tilt, chin-lift maneuver </Text>
        <Text>Jaw-thrust maneuver</Text>
        <Text> Recovery Position</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  AirwayContainer: {
    flex: 1,
  },
});

export default Airway;
