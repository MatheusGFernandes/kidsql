import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ViewEnd } from "../../styles/main";
import { Context } from "../../context/AppContext";
import Navigation from "../../components/Navigation";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

const Select2 = ({ navigation }) => {

    const [received, setReceived] = React.useState([]);
    const [staged, setStaged] = React.useState([]);

    const FirstReceivingItemList = [
        {
          "id": 5,
          "name": "",
          "background_color": '#E9E9E9'
        },
        {
          "id": 6,
          "name": "Teste",
          "background_color": '#E9E9E9'
        },
        {
          "id": 7,
          "name": "",
          "background_color": '#E9E9E9'
        }
      ];

      const [receivingItemList, setReceivedItemList] = useState(FirstReceivingItemList);

      const DragUIComponent = ({ item, index }) => {
        return (
          <DraxView
            style={[styles.centeredContent2, styles.receivingZone2, { backgroundColor: '#e9e9e9' }]}
            // draggingStyle={styles.dragging}
            // dragReleasedStyle={styles.dragging}
            // hoverDraggingStyle={styles.hoverDragging}
            // dragPayload={index}
            // longPressDelay={150}
            dragPayload={staged.join(' ')}
            draggable={staged.length > 0}
            // key={index}
            // receivingStyle={styles.receiving2}
            renderContent={({ viewState }) => {
                const receivingDrag = viewState && viewState.receivingDrag;
                const payload = receivingDrag && receivingDrag.payload;
                const dragging = viewState && viewState.dragStatus !== 0;
                const combinedStyles = [
                    styles.centeredContent,
                    styles.receivingZone,
                    styles.cyan,
                ];
                if (dragging) {
                    combinedStyles.push({ opacity: 0.2 });
                } else if (receivingDrag) {
                    combinedStyles.push(styles.receiving);
                }
                return (
                    <View style={combinedStyles}>
                        <Text style={styles.textStyle}>{payload}</Text>
                    </View>
                );
            }}
            renderHoverContent={({ viewState }) => {
                const offsetStyle = viewState.grabOffset
                    ? {
                    marginLeft: viewState.grabOffset.x - 30,
                    marginTop: viewState.grabOffset.y - 30,
                    }
                    : undefined;
                const combinedStyles = [
                    styles.centeredContent,
                    styles.draggableBox,
                    styles.cyan,
                    offsetStyle,
                ];
                if (viewState.dragStatus === 1) {
                    combinedStyles.push(styles.hoverDragging);
                }
                return (
                    
                    <Text style={styles.stagedCount}>2</Text>

                );
                }}
            onReceiveDragDrop={(event) => {
                console.log(event);
                let newReceivingItemList = [...receivingItemList];

                newReceivingItemList[1] = {"id": 8,
                                                "name": "teste",
                                                "background_color": '#E9E9E9'};
                setReceivedItemList(newReceivingItemList);
                setStaged([
                    ...staged,
                    event.dragged.payload || '?',
                ]);
                }}
            onDragDrop={() => setStaged([])}
            // onReceiveDragDrop={(event) => {
            //     console.log(event.dragged.payload);
            //     let selected_item = dragItemMiddleList[event.dragged.payload.index];
            //     console.log(selected_item);
            //     console.log('onReceiveDragDrop::index', selected_item, index);
            //     console.log('onReceiveDragDrop :: payload', event.dragged.payload);
            //     let oldReceivingItemList = [...receivingItemList];
            //     let newReceivingItemList = [...receivingItemList];
            //     console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
            //     newReceivingItemList[index] = selected_item;
            //     setReceivedItemList(newReceivingItemList);
      
            //     let newDragItemMiddleList = [...dragItemMiddleList];
            //     console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
            //     newDragItemMiddleList[event.dragged.payload.index] = oldReceivingItemList[index];
            //     console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
            //     console.log('onReceiveDragDrop :: oldReceivingItemList', newDragItemMiddleList);
            //     setDragItemListMiddle(newDragItemMiddleList);
            // }}
          >
          </DraxView>
        );
    };

    const DragUI = ({ item, index }) => {
        <DraxView
            dragPayload={index}
            // draggable={staged.length > 0}
            renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            const dragging = viewState && viewState.dragStatus !== 0;
            const combinedStyles = [
                styles.centeredContent,
                styles.receivingZone,
                styles.cyan,
            ];
            if (dragging) {
                combinedStyles.push({ opacity: 0.2 });
            } else if (receivingDrag) {
                combinedStyles.push(styles.receiving);
            }
            return (
                <Text style={styles.textStyle}>{item.name}</Text>
            );
            }}
            renderHoverContent={({ viewState }) => {
            const offsetStyle = viewState.grabOffset
                ? {
                marginLeft: viewState.grabOffset.x - 30,
                marginTop: viewState.grabOffset.y - 30,
                }
                : undefined;
            const combinedStyles = [
                styles.centeredContent,
                styles.draggableBox,
                styles.cyan,
                offsetStyle,
            ];
            if (viewState.dragStatus === 1) {
                combinedStyles.push(styles.hoverDragging);
            }
            return (
                <View style={combinedStyles}>
                <Text style={styles.stagedCount}>{staged.length}</Text>
                </View>
            );
            }}
            onReceiveDragDrop={(event) => {
            setStaged([
                ...staged,
                event.dragged.payload || '?',
            ]);
            }}
            onDragDrop={() => setStaged([])}
        />
    };

  return (
    <DraxProvider>
      <View style={styles.container}>
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, styles.magenta]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (
              <>
                <Text>Receiving Zone</Text>
                <Text style={styles.incomingPayload}>{payload || '-'}</Text>
                <Text style={styles.received}>{received.join(' ')}</Text>
              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            setReceived([
              ...received,
              event.dragged.payload || '?',
            ]);
          }}
        />
        <View style={styles.palette}>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.red]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'R'}
            longPressDelay={0}
          >
            <Text>Red</Text>
          </DraxView>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.green]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'G'}
            longPressDelay={0}
          >
            <Text>Green</Text>
          </DraxView>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.blue]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'B'}
            longPressDelay={0}
          >
            <Text>Blue</Text>
          </DraxView>
          <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'Y'}
            longPressDelay={0}
          >
            <Text>Yellow</Text>
          </DraxView>
        </View>
        <View style={styles.draxListContainer}>
            <DraxList
                data={staged}
                renderItemContent={DragUIComponent}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            //   ItemSeparatorComponent={FlatListItemSeparator}
            //   scrollEnabled={true}
            />
            {/* <DraxView
            style={[styles.centeredContent2, styles.receivingZone2, { backgroundColor: '#E9E9E9' }]}
            // draggingStyle={styles.dragging}
            // dragReleasedStyle={styles.dragging}
            // hoverDraggingStyle={styles.hoverDragging}
            // dragPayload={index}
            // longPressDelay={150}
            dragPayload={staged.join(' ')}
            draggable={staged.length > 0}
            // key={index}
            // receivingStyle={styles.receiving2}
            renderContent={({ viewState }) => {
                const receivingDrag = viewState && viewState.receivingDrag;
                const payload = receivingDrag && receivingDrag.payload;
                const dragging = viewState && viewState.dragStatus !== 0;
                const combinedStyles = [
                    styles.centeredContent,
                    styles.receivingZone,
                    styles.cyan,
                ];
                if (dragging) {
                    combinedStyles.push({ opacity: 0.2 });
                } else if (receivingDrag) {
                    combinedStyles.push(styles.receiving);
                }
                return (
                    <View style={combinedStyles}>
                        <Text style={styles.textStyle}>{payload}</Text>
                    </View>
                );
            }}
            renderHoverContent={({ viewState }) => {
                const offsetStyle = viewState.grabOffset
                    ? {
                    marginLeft: viewState.grabOffset.x - 30,
                    marginTop: viewState.grabOffset.y - 30,
                    }
                    : undefined;
                const combinedStyles = [
                    styles.centeredContent,
                    styles.draggableBox,
                    styles.cyan,
                    offsetStyle,
                ];
                if (viewState.dragStatus === 1) {
                    combinedStyles.push(styles.hoverDragging);
                }
                return (
                    
                    <Text style={styles.stagedCount}>2</Text>

                );
                }}
            onReceiveDragDrop={(event) => {
                console.log(event);
                let newReceivingItemList = [...receivingItemList];

                newReceivingItemList[1] = {"id": 8,
                                                "name": "teste",
                                                "background_color": '#E9E9E9'};
                setReceivedItemList(newReceivingItemList);
                setStaged([
                    ...staged,
                    event.dragged.payload || '?',
                ]);
                }}
            onDragDrop={() => setStaged([])}
            // onReceiveDragDrop={(event) => {
            //     console.log(event.dragged.payload);
            //     let selected_item = dragItemMiddleList[event.dragged.payload.index];
            //     console.log(selected_item);
            //     console.log('onReceiveDragDrop::index', selected_item, index);
            //     console.log('onReceiveDragDrop :: payload', event.dragged.payload);
            //     let oldReceivingItemList = [...receivingItemList];
            //     let newReceivingItemList = [...receivingItemList];
            //     console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
            //     newReceivingItemList[index] = selected_item;
            //     setReceivedItemList(newReceivingItemList);
      
            //     let newDragItemMiddleList = [...dragItemMiddleList];
            //     console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
            //     newDragItemMiddleList[event.dragged.payload.index] = oldReceivingItemList[index];
            //     console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
            //     console.log('onReceiveDragDrop :: oldReceivingItemList', newDragItemMiddleList);
            //     setDragItemListMiddle(newDragItemMiddleList);
            // }}
          >
          </DraxView> */}
        </View>
        
      </View>
    </DraxProvider>
  );
}

const styles = StyleSheet.create({

    draxListContainer: {
        padding: 5,
        height: 200
    },

    receivingZone2: {

        height: (Dimensions.get('window').width / 6) - 12,
        borderRadius: 10,
        width: (Dimensions.get('window').width / 3) - 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    
    receiving2: {

        borderColor: 'red',
        borderWidth: 2,
    },

    textStyle: {

        fontSize: 18,
        color: "#FFF",
    },

    centeredContent2: {

        borderRadius: 10,
    },

  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  green: {
    backgroundColor: '#aaffaa',
  },
  blue: {
    backgroundColor: '#aaaaff',
  },
  red: {
    backgroundColor: '#ffaaaa',
  },
  yellow: {
    backgroundColor: '#ffffaa',
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  magenta: {
    backgroundColor: '#ffaaff',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },
});

export default Select2;