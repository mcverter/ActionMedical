import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class StreetMedicOrganizing extends Component {
static navigationOptions = {title: 'StreetMedicOrganizing'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
              Street Medic Organizing - List of Street Medic Collectives Boston Area Liberation Medics - Boston, MA https://bostonstreetmedictraining.  wordpress.com/
              Bayou Action Street Health - Houston, TX (Gulf Coast) https://www.facebook.com/BayouActionStreetHealth/ Chicago Action Medical - Chicago, IL (Midwest) https://chicagoactionmedical.org/
              Gateway Region Action Medics - St. Louis, MO http://www. gramedics. org/
              New York City Action Medical - New York, NY https://www.facebook.com/NYCactionmedical/
              North Star Health Collective - Minneapolis/St. Paul, MN https://northstarhealth. wordpress.com/
              River City Medic Collective - Richmond, VA https://www.facebook.com/rivercitymedics/ Rosehips Medic Collective - Portland, OR http://www.rosehipmedics.org/
              St. Louis Street Medics - St. Louis, MO https://twitter.com/StLStreetMedics
              </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});

export default StreetMedicOrganizing ;
