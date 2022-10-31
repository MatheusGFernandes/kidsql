import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ViewEnd } from "../../styles/main";
import { Context } from "../../context/AppContext";
import Navigation from "../../components/Navigation";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

const Select1 = ({ navigation }) => {

  const draggableItemList = [
      {
          "id": 1,
          "name": "Select",
          "background_color": '#fc6e3d',
          "answer": true,
          "inReceiveList": false
      },
      {
          "id": 2,
          "name": "From",
          "background_color": '#eb2828',
          "answer": true,
          "inReceiveList": false
      },
      {
          "id": 3,
          "name": "*",
          "background_color": '#000',
          "answer": true,
          "inReceiveList": false
      },
      {
        "id": 4,
        "name": "Compras",
        "background_color": "#000",
        "answer": true,
        "inReceiveList": false
      }
    ];

  const FirstReceivingItemList = [
      {
        "id": 5,
        "name": "",
        "background_color": '#E9E9E9',
        "answer": false,
        "inReceiveList": true
      },
      {
        "id": 6,
        "name": "",
        "background_color": '#E9E9E9',
        "answer": false,
        "inReceiveList": true
      },
      {
        "id": 7,
        "name": "",
        "background_color": '#E9E9E9',
        "answer": false,
        "inReceiveList": true
      },
      {
        "id": 8,
        "name": "",
        "background_color": '#E9E9E9',
        "answer": false,
        "inReceiveList": true
      }
    ];
    
    const [receivingItemList, setReceivedItemList] = useState(FirstReceivingItemList);
    const [dragItemMiddleList, setDragItemListMiddle] = useState(draggableItemList);
    
    const DragUIComponent = ({ item, index }) => {

        return (
          <DraxView
            style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
            // draggingStyle={styles.dragging}
            // dragReleasedStyle={styles.dragging}
            // hoverDraggingStyle={styles.hoverDragging}
            // dragPayload={index}
            dragPayload={[item, index]}
            draggable={true}
            // longPressDelay={150}
            key={index}
            receivingStyle={styles.receiving}
            renderContent={({ viewState }) => {
                const receivingDrag = viewState && viewState.receivingDrag;
                const payload = receivingDrag && receivingDrag.payload;
                return (
                  <View>
                    <Text style={styles.textStyle}>{item.name}</Text>
                  </View>
                );
              }}
            renderHoverContent={({ viewState }) => {

                return (
                    <Text style={styles.textStyle}>{item.name}</Text>
                );
              }}
          >
            <Text style={styles.textStyle}>{item.name}</Text>
          </DraxView>
        );
    };
    const ReceivingZoneUIComponent = ( item, index ) => {

      return(
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
          // draggingStyle={styles.dragging}
          // dragReleasedStyle={styles.dragging}
          // hoverDraggingStyle={styles.hoverDragging}
          // dragPayload={index}
          dragPayload={[item, index]}
          // draggable={true}
          // longPressDelay={150}
          key={index}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
              // console.log(viewState);
              const receivingDrag = viewState && viewState.receivingDrag;
              const payload = receivingDrag && receivingDrag.payload;
              return (
              <View>
                  <Text style={styles.textStyle}>{item.name}</Text>
              </View>
              );
          }}
          onReceiveDragDrop={({ dragged }) => {
            const { payload } = dragged;
            const eventInReceivingList = payload[0].inReceiveList;
            const eventAnswer = payload[0].answer;
            const itemInReceivingList = item.inReceiveList;
            const itemAnswer = item.answer;
            const selected_item = payload[0]
            
            if (eventInReceivingList === true && eventAnswer === true && itemInReceivingList === true) {

              let oldReceivingItemList = [...receivingItemList];
              let newReceivingItemList = [...receivingItemList];
              newReceivingItemList[index] = selected_item;
              newReceivingItemList[payload[1]] = oldReceivingItemList[index];
              setReceivedItemList(newReceivingItemList);
              console.log('Received: ', newReceivingItemList);

            } else {

              console.log('onReceiveDragDrop :: item', item.background_color);
              let oldReceivingItemList = [...receivingItemList];
              let newReceivingItemList = [...receivingItemList];
              newReceivingItemList[index] = selected_item;
              newReceivingItemList[index].inReceiveList = true;
              setReceivedItemList(newReceivingItemList);

              let newDragItemMiddleList = [...dragItemMiddleList];
              newDragItemMiddleList[payload[1]] = oldReceivingItemList[index];
              newDragItemMiddleList[payload[1]].inReceiveList = false;

              setDragItemListMiddle(newDragItemMiddleList);
            }}
          }
          renderHoverContent={({ viewState }) => {

              return (
                  <Text style={styles.textStyle}>{item.name}</Text>
              );
          }}
      >
          <Text style={styles.textStyle}>{item.name}</Text>
      </DraxView>

      );
    };
    
    const FlatListItemSeparator = () => {

        return (<View style={styles.itemSeparator} />);
    };
    
      return (
        <GestureHandlerRootView
          style={gestureRootViewStyle}>
          <View>
            <Text style={styles.headerStyle}>{'Drag drop and swap between lists'}</Text>
          </View>
          <DraxProvider>
            <View style={styles.container}>
              <View style={styles.receivingContainer}>
                {/* <DraxList
                    data={receivingItemList}
                    renderItemContent={DragUIComponent}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    // ItemSeparatorComponent={FlatListItemSeparator}
                    // scrollEnabled={true}
                /> */}
                {receivingItemList.map((receive, index) => ReceivingZoneUIComponent( receive, index ))}
              </View>
              <View style={styles.draxListContainer}>
                <DraxList
                  data={dragItemMiddleList}
                  renderItemContent={DragUIComponent}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={4}
                  ItemSeparatorComponent={FlatListItemSeparator}
                //   scrollEnabled={true}
                />
              </View>
              <ViewEnd>
              <Navigation 
                    reply  ={() => navigation.navigate("Home")} 
                    forward={() => navigation.navigate("Select4")} 
                />
              </ViewEnd>
            </View>
          </DraxProvider>
        </GestureHandlerRootView>
      );
};
    
const styles = StyleSheet.create({

    container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
    },

    centeredContent: {
    borderRadius: 10,
    },

    receivingZone: {
    height: (Dimensions.get('window').width / 6) - 12,
    borderRadius: 10,
    width: (Dimensions.get('window').width / 4) - 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
    },

    receiving: {
    borderColor: 'red',
    borderWidth: 2,
    },

    draggableBox: {
    width: (Dimensions.get('window').width / 4) - 12,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
    },

    dragging: {
    opacity: 0.2,
    },

    hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
    },

    receivingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
    },

    itemSeparator: {
    height: 15
    },

    draxListContainer: {
      marginTop: 20,
      padding: 5,
      height: 200
    },

    receivingZoneContainer: {
    padding: 5,
    height: 100
    },

    textStyle: {
        fontSize: 18,
        color: "#FFF",
    },

    headerStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
    }
});

export default Select1;