import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from "./style";

// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const DragAndDrop = ({ receiveList, dragList, onChange, onResponse }) => {
    
  const [receivingItemList, setReceivedItemList] = useState(receiveList);
  const [dragItemMiddleList, setDragItemListMiddle] = useState(dragList);
  const [correctOrder, setCorrectOrder] = useState(false);
  const [allAnswer, setAllAnswer] = useState(false);
  
  useEffect(() => onResponse(correctOrder), [correctOrder]);
  useEffect(() => onChange(allAnswer), [allAnswer]);

  const DragUIComponent = ({ item, index }) => {
    
      return (
        <DraxView
          // style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
          // draggingStyle={styles.dragging}
          // dragReleasedStyle={styles.dragging}
          // hoverDraggingStyle={styles.hoverDragging}
          dragPayload={[item, index]}
          draggable={true}
          // longPressDelay={150}
          key={index}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const dragging = viewState && viewState.dragStatus !== 0;
            const contentStyle = [
              styles.centeredContent, 
              styles.receivingZone, 
              { backgroundColor: item.background_color }
            ]
            const draggingStyle = {
              opacity: 0.2,
              borderColor: "#000",
              borderWidth: 2
            }

            if (dragging) {
              contentStyle.push(draggingStyle);
            }

            return (
              <View style={contentStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
              </View> 
            );
          }}
          renderHoverContent={({ viewState }) => {
            const contentStyle = [
              styles.centeredContent, 
              styles.receivingZone, 
              styles.hoverDragging,
              { backgroundColor: item.background_color }
            ]

            return (
              <View style={contentStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
              </View>
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
        // style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
        // draggingStyle={styles.dragging}
        // dragReleasedStyle={styles.dragging}
        // hoverDraggingStyle={styles.hoverDragging}
        // dragPayload={index}
        dragPayload={[item, index]}
        draggable={item.answer}
        // longPressDelay={150}
        receptive={true}
        key={index}
        receivingStyle={styles.receiving}
        // hoverStyle={styles.receiving2}
        hoverDraggingWithReceiverStyle={({ viewState }) => {
          const contentStyle = [
            styles.centeredContent, 
            styles.receivingZone, 
            styles.hoverDragging,
            { backgroundColor: item.background_color, marginLeft: 1, marginBottom: 5 }
          ];

          return (
            <View style={{contentStyle}}>
              <Text style={styles.textStyle}>{item.answer}</Text>
            </View>
          );
        }}

        renderContent={({ viewState }) => {
          const dragging = viewState && viewState.dragStatus !== 0;
          const contentStyle = [
            styles.centeredContent, 
            styles.receivingZone, 
            { backgroundColor: item.background_color, marginLeft: 1, marginBottom: 5 }
          ];
          const draggingStyle = {
            opacity: 0.2,
            borderColor: "#000",
            borderWidth: 2
          };

          if (dragging) {
            contentStyle.push(draggingStyle);
            
          };

          if (!item.answer) {
            contentStyle.push(styles.receivingListStyle);
          }

          return (
            <View style={contentStyle}>
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
          
          if (eventInReceivingList && eventAnswer && itemInReceivingList) {

            let oldReceivingItemList = [...receivingItemList];
            let newReceivingItemList = [...receivingItemList];
            newReceivingItemList[index] = selected_item;
            newReceivingItemList[payload[1]] = oldReceivingItemList[index];

            if (selected_item.id === index) {
              newReceivingItemList[index].correct = true
            } else {
              newReceivingItemList[index].correct = false
            };

            if (itemAnswer && newReceivingItemList[payload[1]].id === payload[1]) {
              newReceivingItemList[payload[1]].correct = true
            } else if (itemAnswer && newReceivingItemList[payload[1]].id !== payload[1]) {
              newReceivingItemList[payload[1]].correct = false
            };

            setReceivedItemList(newReceivingItemList);
            // console.log(newReceivingItemList.filter((item) => item.correct === true).length);
            // console.log(receiveList.length);
            if (newReceivingItemList.filter((item) => item.correct === true).length === receiveList.length) {
              setCorrectOrder(true);
            } else {
              setCorrectOrder(false);
            };

            if (newReceivingItemList.filter((item) => item.answer === true).length === receiveList.length) {
              setAllAnswer(true);
            } else {
              setAllAnswer(false);
            };

            console.log(newReceivingItemList);

          } else {

              let oldReceivingItemList = [...receivingItemList];
              let newReceivingItemList = [...receivingItemList];
              newReceivingItemList[index] = selected_item;
              newReceivingItemList[index].inReceiveList = true;

              if (selected_item.answer && selected_item.id === index) {
                newReceivingItemList[index].correct = true
              } else {
                newReceivingItemList[index].correct = false
              };

              setReceivedItemList(newReceivingItemList);
              // console.log(newReceivingItemList.filter((item) => item.correct === true).length);
              // console.log(receiveList.length);
              if (newReceivingItemList.filter((item) => item.correct === true).length === receiveList.length) {
                setCorrectOrder(true);
              } else {
                setCorrectOrder(false);
              };

              if (newReceivingItemList.filter((item) => item.answer === true).length === receiveList.length) {
                setAllAnswer(true);
              } else {
                setAllAnswer(false);
              };

              let newDragItemMiddleList = [...dragItemMiddleList];
              newDragItemMiddleList[payload[1]] = oldReceivingItemList[index];
              newDragItemMiddleList[payload[1]].inReceiveList = false;

              setDragItemListMiddle(newDragItemMiddleList);
          }}
        }
        renderHoverContent={({ viewState }) => {
          const contentStyle = [
            styles.centeredContent, 
            styles.receivingZone, 
            styles.hoverDragging,
            { backgroundColor: item.background_color, marginLeft: 1, marginBottom: 5 }
          ];

          return (
            <View style={contentStyle}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
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
      // <GestureHandlerRootView
      //   style={styles.gestureRootViewStyle}>
      <DraxProvider style={{ justifyContent: "center", alignSelf: "center"}}>
          <View style={styles.container}>
            <View style={styles.receivingContainer}>
              {/* <DraxList
                data={receivingItemList}
                renderItemContent={ReceivingZoneUIComponent}
                keyExtractor={(index) => index}
                numColumns={4}
                onItemDragStart={({ index, item }) => {
                  console.log(`Item #${index} (${item}) drag start`);
                }}
                onItemReorder={({
                  fromIndex,
                  fromItem,
                  toIndex,
                  toItem,
                }) => {
                  console.log(`Item dragged from index ${fromIndex} (${fromItem}) to index ${toIndex} (${toItem})`);
                }}
                ItemSeparatorComponent={FlatListItemSeparator}
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
                // scrollEnabled={true}
              />
            </View>
          </View>
        </DraxProvider>
      // </GestureHandlerRootView>
    );
};
    
export default DragAndDrop;