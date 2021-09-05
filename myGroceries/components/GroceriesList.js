import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const GroceriesList = () => {
  const [isChecked, setCheck] = useState(false);

  const checkBox =
    isChecked === false ? (
      <FontAwesome5 name={'circle'} size={responsiveFontSize(4)} />
    ) : (
      <FontAwesome5 name={'check-circle'} size={responsiveFontSize(4)} />
    );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        isChecked === true ? setCheck(false) : setCheck(true);
      }}>
      <View style={styles.noteContainer}>
        <FontAwesome5 name={'sticky-note'} size={responsiveFontSize(4)} />
      </View>
      <View style={styles.ItemContainer}>
        <Text style={styles.ItemText}>something</Text>
      </View>
      <View style={styles.checkBoxContainer}>{checkBox}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(6),
    alignItems: 'center',
    paddingHorizontal: responsiveFontSize(1),
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: responsiveFontSize(1),
  },
  noteContainer: {
    flex: 1,
  },
  ItemContainer: {
    flex: 8,
  },
  ItemText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default GroceriesList;
