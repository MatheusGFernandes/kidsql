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
            "inReceivingList": false
        },
        {
            "id": 2,
            "name": "From",
            "background_color": '#eb2828',
            "answer": true,
            "inReceivingList": false
        },
        {
            "id": 3,
            "name": "*",
            "background_color": '#000',
            "answer": true,
            "inReceivingList": false
        },
        {
          "id": 4,
          "name": "Compras",
          "background_color": "#000",
          "answer": true,
          "inReceivingList": false
        }
      ];

    const FirstReceivingItemList = [
        {
          "id": 5,
          "name": "",
          "background_color": '#E9E9E9',
          "answer": false,
          "inReceivingList": true
        },
        {
          "id": 6,
          "name": "",
          "background_color": '#E9E9E9',
          "inReceivingList": true
        },
        {
          "id": 7,
          "name": "",
          "background_color": '#E9E9E9',
          "inReceivingList": true
        },
        {
          "id": 8,
          "name": "",
          "background_color": '#E9E9E9',
          "inReceivingList": true
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
            dragPayload={item}
            draggable={true}
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
            onReceiveDragDrop={(event) => {
                console.log(event.dragged.payload);
                let selected_item = dragItemMiddleList[event.dragged.payload.index];
                console.log(selected_item);
                console.log('onReceiveDragDrop::index', selected_item, index);
                console.log('onReceiveDragDrop :: payload', event.dragged.payload);
                let oldReceivingItemList = [...receivingItemList];
                let newReceivingItemList = [...receivingItemList];
                console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
                newReceivingItemList[index] = selected_item;
                setReceivedItemList(newReceivingItemList);
      
                let newDragItemMiddleList = [...dragItemMiddleList];
                console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
                newDragItemMiddleList[event.dragged.payload.index] = oldReceivingItemList[index];
                console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
                console.log('onReceiveDragDrop :: oldReceivingItemList', newDragItemMiddleList);
                setDragItemListMiddle(newDragItemMiddleList);
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
    const ReceivingZoneUIComponent2 = ({ item, index }) => {

      return(
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
          // draggingStyle={styles.dragging}
          // dragReleasedStyle={styles.dragging}
          // hoverDraggingStyle={styles.hoverDragging}
          // dragPayload={index}
          dragPayload={item}
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
          onReceiveDragDrop={(event) => {

            const eventInReceivingList = event.dragged.payload.inReceivingList;
            const eventIsAnswer = event.dragged.payload.answer;
            const itemInReceivingList = item.inReceivingList;
            const itemIsAnswer = item.answer;
            
            if (eventInReceivingList === false && eventIsAnswer === true && itemInReceivingList === true && itemIsAnswer === false) {

              let selected_item = event.dragged.payload;
              console.log('onReceiveDragDrop::index', selected_item, index);
              console.log('onReceiveDragDrop :: payload', event.dragged.payload);
              let oldReceivingItemList = [...receivingItemList];
              let newReceivingItemList = [...receivingItemList];
              newReceivingItemList[index] = selected_item;
              setReceivedItemList(newReceivingItemList);
              // console.log(newReceivingItemList);
              let newDragItemMiddleList = [...dragItemMiddleList];
              newDragItemMiddleList[event.dragged.payload] = oldReceivingItemList[index];

              setDragItemListMiddle(newDragItemMiddleList);

            } else if ()
              
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

    const ReceivingZoneUIComponent = ({ item, index }) => {

        return (
          <DraxView
            style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
            receivingStyle={styles.receiving}
            renderContent={({ viewState }) => {
            //   console.log(viewState);
            //   const receivingDrag = viewState && viewState.receivingDrag;
            //   const payload = receivingDrag && receivingDrag.payload;
              return (
                <View>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              );
            }}
            key={index}
            // dragPayload={index}
            // longPressDelay={150}
            // draggingStyle={styles.dragging}
            onReceiveDragDrop={(event) => {
              console.log(event.dragged.payload);
              let selected_item = dragItemMiddleList[event.dragged.payload.index];
            //   console.log('onReceiveDragDrop::index', selected_item, index);
            //   console.log('onReceiveDragDrop :: payload', event.dragged.payload);
              let newReceivingItemList = [...receivingItemList];
            //   console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
              newReceivingItemList[index] = selected_item;
              setReceivedItemList(newReceivingItemList);
    
              let newDragItemMiddleList = [...dragItemMiddleList];
            //   console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
              newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
            //   console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
              setDragItemListMiddle(newDragItemMiddleList);
            }}
            
          />
          
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
                {receivingItemList.map((item, index) => ReceivingZoneUIComponent2({ item, index }))}
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
                    forward={() => navigation.navigate("Select2")} 
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