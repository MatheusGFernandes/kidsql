import React, { Component } from 'react';
import Tables from '../style';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

export class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['NOME', 'DATA', 'NOTA'],
      tableData: [
        ['Matheus',  '01/09/2022', '9'],
        ['Eduarda',  '01/09/2022', '7'],
        ['Leonardo', '01/09/2022', '8'],
      ],
      widthArr: [120, 120, 120],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    )
  }
}

export class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['PRODUTO', 'QUANTIDADE', 'UNIDADE', 'PREÇO'],
      tableData: [
        ['Banana',       10, 'KG', 5],
        ['Bolacha',      20, 'UN', 3],
        ['Leite',        12, 'L',  6],
        ['Refrigerante', 10, 'L',  7],
        ['Arroz',        15, 'KG', 5],
      ],
      widthArr: [120, 120, 120, 120],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }}/>
    )
  }
};

export class ProdutosPK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['CODIGO', 'PRODUTO', 'QUANTIDADE', 'UNIDADE', 'PREÇO'],
      tableData: [
        [3, 'Banana',       10, 'KG', 5],
        [4, 'Bolacha',      20, 'UN', 3],
        [7, 'Leite',        12, 'L',  6],
        [5, 'Refrigerante', 10, 'L',  7],
        [9, 'Arroz',        15, 'KG', 5],
      ],
      widthArr: [120, 120, 120, 120],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }}/>
    )
  }
};

export class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [ 60, 60, 60, 60, 60, 60, 60, 60, 60],
      tableData: [ 
        ['Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto'],
        ['Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto'],
        ['Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto'],
        ['Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto'],
      
      ]

    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
              <Rows data={state.tableData} textStyle={styles.text} widthArr={state.widthArr} />
            </Table>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

