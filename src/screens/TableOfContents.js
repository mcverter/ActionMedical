import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
  FlatList
} from 'react-native';
import LinkButton from '../components/LinkButton'

contents = [
  'Airway',
  'DisabilityEnvironment',
  'Musculoskeletal',
  'BleedingShock',
  'FaintingSeizures',
  'PartnerSync',
  'BodySubstanceIsolation',
  'Gear',
  'SceneAssessment',
  'Breathing',
  'HeadInjuries',
  'SecondaryAssessment',
  'Circulation',
  'HotWeather',
  'SoftTissueInjury',
  'ColdWeather',
  'InitialAssessment',
  'StreetMedicOrganizing',
  'Consent',
  'LifeThreats',
  'CSpine',
  'MechanismOfInjuty',
  'TearGas',
  'Diabetic',
  'MentalStatus',
  'Triage',
];
class TableOfContents extends Component { 
static navigationOptions = {title: 'TableOfContents'};
  render() {
         return (
            <View style={styles.TableOfContentsContainer}>
              <FlatList
              keyExtractor={(item, index)=>index}
              data={contents}
              renderItem={(element)=> (
                <LinkButton
                  navigation={this.props.navigation}
                  label={element.item}
                  destination={element.item}
                />
              )}

              />
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    TableOfContentsContainer: {
        flex: 1,
    },
});

export default TableOfContents;
