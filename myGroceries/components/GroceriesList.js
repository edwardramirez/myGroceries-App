import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const icon = <FontAwesome5 name={'sticky-note'} size={responsiveFontSize(4)} />;

const GroceriesList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>{icon}</View>
      <View style={styles.ItemContainer}>
        <Text style={styles.ItemText}>Hello</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <Text>box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(5),
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingHorizontal: responsiveFontSize(1),
    flexDirection: 'row',
  },
  noteContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  ItemContainer: {
    flex: 8,
    backgroundColor: 'red',
  },
  ItemText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  },
});

export default GroceriesList;
