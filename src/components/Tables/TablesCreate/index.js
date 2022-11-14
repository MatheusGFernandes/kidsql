import React, { Component } from 'react';
import Tables from '../style';

export class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['COLUNA 1', 'COLUNA 2', 'COLUNA 3'],
      tableData: [
        ['TEXTO',  'NÚMERO', 'DATA'],
      ],
      widthArr: [120, 120, 120],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['* CÓDIGO   (INT)', 'PRODUTO (TEXTO)', 'QUANTIDADE (TEXTO)', 'UNIDADE   (INT)'],
      widthArr: [120, 120, 120, 120],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 70 }} />
    );
  };
};

export class ProdutosColuna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['CÓDIGO', 'PRODUTO', 'PREÇO', 'UNIDADE'],
      tableData: [
        [1, 'Macarrão',     10, 'KG'],
        [2, 'Iogurte',      3, 'UN'],
        [3, 'Suco',         8, 'L'],
        [4, 'Ovo',          1, 'UN'],
        [5, 'Carne',        20, 'KG'],
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