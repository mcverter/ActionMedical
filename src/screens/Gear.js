import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Gear extends Component {
static navigationOptions = {title: 'Gear'};
    render() {
         return (
            <View style={styles.GearContainer}>
              <Text>
              Street Medic Gear
              Street medics beginning to use the skills in this booklet frequently begin by packing their kit in ways that are not very useful. For example:

              A street medic may identify medical supplies with social status and hoard unnecessary or rarely useful supplies, or supplies they do not know how to use. A chaotic bag means that they usually forget important basics or loses them in their bag

              They may not prepare for the actual situations they are trained to manage and likely to encounter. For example, they may not keep exam gloves in their pocket, and so be unable to help much when a person asks to check out a bad foot or a smelly old wound

              They may not know how to improvise well, or source readily-available things. For instance, they may carry a gallon of water instead of a refillable water bottle and knowledge of where to refill it

              They may be prepared for everyone else's needs, but neglect to prepare for their own

              Basic Medical Kit - A Suggested List
              15 pairs of nitrile gloves that fit you (they come in s, m, 1, and xl), packed in a ziploc bag. It is a good idea to keep 2-3 pairs of your gloves in a ziploc bag in your pocket in case you lose your pack
              30 nonsterile 2 inch by 2 inch (2x2) gauze squares packed in ziploc bags
              5 sterile 2x2 gauze squares packed in a ziploc bag (one of these plus tape equals a band-aid)
              5 sterile 4x4 gauze squares packed in a ziploc bag (one of these these plus wound ointment and roller gauze equals a dressing change)
              5 gauze bandage rolls
              Iroll of Iinch medical tape (micropore, transpore, or silk tape)
              Iliter of water in a bottle you don't drink from (for washing wounds, hands, etc. - scrub with non­ sterile 2x2s)
              Iliter of water with a squirt-top for eye flushes
              Ismall bottle of liquid soap (like Dr Bronner' s) packed in a ziploc bag in case it leaks (for washing wounds, hands, etc.)
              Ibag of cough drops, slippery elm lozenges, or slippery elm bark
              Lightweight snacks like nuts, dried fruit, or energy bars
              Trauma shears or a lockable knife (be aware that if you are arrested, the police may consider a knife or multi-tool a weapon)
              A change of socks
              Lightweight high energy food (like energy bars or gorp)
              Menstrual hygiene products
              Bandana
              Pen and paper

              40
              •



              Pack your kit in quart-size ziploc bags to shield it from leaks, weather, and contamination. Put these ziploc bags in a convenient location - a fanny pack, fishing vest, small backpack, or shoulder bag.

              Cold weather care
              These items are useful to have on hand for cold-weather care.
              Your own personal preparation, including a buddy, so you do not become an additional casualty
              Hats and dry socks packed in ziploc bags; emergency ponchos
              Water; especially hot water in thermoses with refill options and disposable cups. Instant hot chocolate, instant miso soup, instant hot cider, ginger tea with honey, or Jell-o (with sugar) for the hot water; something to stir with
              Candied ginger and other snacks
              Instant handwarmers or a rice bag handwarmer system These additional items can come in very handy.*
              Talcum powder
              Cayenne powder or flakes
              Mylar emergency blankets and other insulating materials

              Acquiring supplies
              The most expensive place to get supplies is at a pharmacy. Good local medical supply companies are much better, and you can put in a big order then pick it up. Internet ordering is also a good idea. Try allmed.net, galls.com, and ebay, or call manufacturers and ask for factory seconds or overstock as a donation. If you have a nonprofit sponsor it can be tax-deductible for the donor. Consider keeping a supply dump somewhere for your medic group with an inventory person who keeps everything organized so medics can resupply on the fly and can periodically replenish the supply dump when anything gets low.
              </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    GearContainer: {
        flex: 1,
    },
});

export default Gear;
