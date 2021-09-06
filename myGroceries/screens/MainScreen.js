import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import uuid from 'react-native-uuid';
import GroceriesList from '../components/GroceriesList';

const MainScreen = ({navigation}) => {
  const [isModal, setModal] = useState(false);
  const [text, setText] = useState();
  const [data, setData] = useState([]);
  const [isChecked, setChecked] = useState(true);

  [
    {id: 'a9de2a2b-d7a1-4296-9848-89e5e1405301', item: 'this'},
    {id: 'e2410067-2842-42fa-852a-27e58134781c', item: 'is'},
    {id: 'd7893bad-ae26-47c9-9190-bd9f4eb5c659', item: 'a'},
    {id: '9a5d1a6c-bd23-4789-8e9a-3fbe474ad3c2', item: 'test'},
    {id: '9b22c759-0087-41c4-97c4-46f246f0d3eb', item: 'please'},
    {id: '36cf68a2-30c2-4a39-9423-c9e4a2f44748', item: 'help'},
  ];

  const renderItem = itemData => {
    return <GroceriesList itemName={itemData.item.item} />;
  };

  const addItem = newText => {
    console.log(newText);
    if (newText === undefined) {
      setText();
      setModal(false);
    } else {
      let results = [...data];
      const textArray = newText.split(',');

      for (let i = 0; i < textArray.length; i++) {
        let fixedText = textArray[i].trim().replace(/\W+/g, ' ');

        if (textArray !== '') {
          results.push({id: uuid.v4(), item: fixedText});
        }
      }
      setData(results);
      setText();
      setModal(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Groceries List</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <FontAwesome5 name={'plus'} size={responsiveFontSize(4)} />

          <Modal isVisible={isModal} onBackdropPress={() => setModal(false)}>
            <View style={styles.modalContainer}>
              <View>
                <Text style={styles.modalHeaderContainer}>Add Item:</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={setText}
                  value={text}
                  placeholder="eggs, bananas, ham, bread etc..."
                  keyboardType="default"
                />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    addItem(text);
                  }}>
                  <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: responsiveScreenHeight(21)}}
          keyExtractor={item => item.id?.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{alignItems: 'center'}}>
              <Text>Add Items!</Text>
            </View>
          }
        />
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
    padding: responsiveFontSize(1),
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },

  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: responsiveFontSize(2),
    justifyContent: 'space-evenly',
  },
  modalHeaderContainer: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: responsiveFontSize(2),
    borderWidth: 1,
    borderRadius: 12,
  },
  inputStyle: {paddingHorizontal: responsiveFontSize(1)},
  buttonsContainer: {
    paddingTop: responsiveFontSize(2),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#0E86D4',
  },
});

export default MainScreen;
