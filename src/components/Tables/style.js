import React, { Component } from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols } from 'react-native-table-component';

const Tables = ({ data }) => {

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal={true}>
                <View>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={data.tableHead} widthArr={data.tableWidth} style={{ height: data.headHeight, backgroundColor: '#f1f8ff' }} textStyle={styles.text}/>
                    <Rows data={data.tableData} widthArr={data.tableWidth} textStyle={styles.text}/>
                </Table>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {  marginHorizontal: 15, marginTop: 5, backgroundColor: '#fffcf7', alignItems: "center", },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default Tables;

// #fffcf7
// Retirei o flex: 1 do container 22/10
