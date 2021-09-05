import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import GroceriesList from '../components/GroceriesList';

const MainScreen = () => {
  const [isModal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groceries List</Text>
      </View>
      <View style={styles.listContainer}>
        <GroceriesList />
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <FontAwesome5 name={'plus-circle'} size={responsiveFontSize(8)} />

          <Modal
            animationIn="slideInUp"
            isVisible={isModal}
            onBackdropPress={() => setModal(false)}>
            <View style={styles.modalContainer}>
              <Text>Hello</Text>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  header: {
    marginTop: '10%',
    marginHorizontal: responsiveScreenWidth(4),
    padding: responsiveFontSize(1),
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    marginTop: responsiveFontSize(2),
  },
  addButton: {
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
  },
});

export default MainScreen;
