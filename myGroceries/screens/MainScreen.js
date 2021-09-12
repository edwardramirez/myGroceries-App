import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SectionList,
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
import Colors from '../resources/Colors';

const MainScreen = ({navigation}) => {
  const catagories = ['Kitchen', 'Home Goods', 'Other'];
  const [isModal, setModal] = useState(false);
  const [text, setText] = useState();
  const [data, setData] = useState([
    {
      id: '0',
      category: 'Kitchen',
      data: [
        {
          id: 'a9de2a2b-d7a1-4296-9848-89e5e1405301',
          item: 'egg',
        },
        {
          id: 'e2410067-2842-42fa-852a-27e58134781c',
          item: 'ham',
        },
        {
          id: 'd7893bad-ae26-47c9-9190-bd9f4eb5c659',
          item: 'cheese',
        },
      ],
    },

    {
      id: '1',
      category: 'Home Goods',
      data: [
        {
          id: '9a5d1a6c-bd23-4789-8e9a-3fbe474ad3c2',
          item: 'broom',
        },
        {
          id: '9b22c759-0087-41c4-97c4-46f246f0d3eb',
          item: 'trash bags',
        },
        {
          id: '36cf68a2-30c2-4a39-9423-c9e4a2f44748',
          item: 'body wash',
        },
      ],
    },
    {
      id: '2',
      category: 'Other',
      data: [],
    },
  ]);

  const [categorySelction, setCategorySelction] = useState();

  const [selected, setSelected] = useState('Kitchen');

  //renders grocery items
  const renderItem = itemData => {
    return (
      <GroceriesList itemName={itemData.item.item} itemId={itemData.item.id} />
    );
  };

  const addItem = (newText, category) => {
    console.log(category);
    if (newText === undefined) {
      setText();
      setModal(false);
    } else {
      let index = 0;

      for (let i = 0; i < data.length; i++) {
        if (data[i].category == category) {
          index = i;
        }
      }

      let newData = [...data];

      let newItem = [...data[index].data];

      const textArray = newText.split(',');

      for (let i = 0; i < textArray.length; i++) {
        let fixedText = textArray[i].trim().replace(/\W+/g, ' ');

        if (textArray !== '') {
          newItem.push({id: uuid.v4(), item: fixedText});
          newData[index].data = newItem;
        }
      }

      setData(newData);
      setText();
      setModal(false);
      setSelected('Kitchen');
    }
  };

  const cancelButtonPress = () => {
    setModal(false);
    setText();
    setSelected('Kitchen');
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

          <Modal isVisible={isModal} onBackdropPress={cancelButtonPress}>
            <View style={styles.modalContainer}>
              <View>
                <Text style={styles.modalHeaderContainer}>Add Item:</Text>
              </View>
              <View
                style={{
                  ...styles.categoryButtonContainer,
                }}>
                {catagories.map((item, index) => (
                  <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      ...styles.categoryButton,
                      backgroundColor:
                        selected === item ? Colors.babyBlue : 'white',
                    }}
                    key={index}
                    onPress={() => {
                      setSelected(item);
                    }}>
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        ...styles.categoryText,
                        color: selected === item ? 'white' : Colors.babyBlue,
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
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
                <TouchableOpacity onPress={cancelButtonPress}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    addItem(text, selected);
                  }}>
                  <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>

      <View>
        <SectionList
          sections={data}
          renderItem={renderItem}
          renderSectionHeader={({section}) => (
            <View>
              {section.data.length > 0 ? (
                <View style={styles.categoryHeaderContainer}>
                  <Text style={styles.categoryHeaderText}>
                    {section.category}
                  </Text>
                </View>
              ) : null}
            </View>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: responsiveScreenHeight(20)}}
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
    backgroundColor: Colors.backgroundGrey,
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
    color: Colors.babyBlue,
  },
  categoryHeaderContainer: {
    backgroundColor: 'white',
    //  marginTop: responsiveScreenHeight(2),
    padding: responsiveFontSize(1),
    marginTop: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(1),
  },
  categoryHeaderText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '800',
  },
  categorySelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveFontSize(2),

    padding: responsiveFontSize(0.5),
  },
  categoryButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: responsiveFontSize(1),
  },
  categoryTouchableStyle: {
    backgroundColor: Colors.babyBlue,
    padding: responsiveFontSize(1),
    borderRadius: 20,
  },
  categoryText: {color: 'white', fontWeight: 'bold'},
  categoryButton: {
    width: responsiveScreenWidth(25),
    height: responsiveHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.babyBlue,
  },
});

export default MainScreen;
