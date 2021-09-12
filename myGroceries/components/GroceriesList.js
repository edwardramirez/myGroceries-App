import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../resources/Colors';

const GroceriesList = props => {
  const [isChecked, setCheck] = useState(false);
  const [idList, setIdList] = useState([]);

  //console.log(idList);

  const checkBox =
    isChecked === false ? (
      <FontAwesome5 name={'check-circle'} size={responsiveFontSize(4)} />
    ) : (
      <FontAwesome5
        name={'check-circle'}
        size={responsiveFontSize(4)}
        color={Colors.checkGreen}
      />
    );

  const something = ans => {
    if (ans === true) {
      setCheck(false);
      //setIdList(...idList.filter(item => item !== props.itemName));
    } else {
      setCheck(true);
      let newArr = [...idList, props.itemName];
      setIdList(newArr);
      //console.log(newArr);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        something(isChecked);
      }}>
      <View style={styles.noteContainer}>
        <FontAwesome5 name={'sticky-note'} size={responsiveFontSize(4)} />
      </View>
      <View style={styles.ItemContainer}>
        <Text style={styles.ItemText}>{props.itemName}</Text>
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
    marginTop: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(1),
  },
  noteContainer: {
    flex: 1,
  },
  ItemContainer: {
    flex: 8,
    justifyContent: 'center',
    paddingLeft: responsiveFontSize(3),
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
