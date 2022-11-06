import React, { Component } from "react";
import Tables from "../style";

export class Compras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["CODIGO *", "PRODUTO", "QUANTIDADE", "PREÇO", "UNIDADE"],
      tableData: [
        [1,  "Leite",      4, 6, "L"],
        [2,  "Suco",       2, 8, "L"],
        [3,  "Chocolate",  2, 7, "UN"],
        [4,  "Banana",     3, 5, "KG"],
        [5,  "Arroz",      5, 5, "KG"],
        [6,  "Ovo",       10, 1, "UN"],
      ],
      widthArr: [100, 100, 110, 100, 100],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class Compras2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ["PRODUTO", "PREÇO"],
        tableData: [
        ["Leite",     6],
        ["Suco",      8],
        ["Chocolate", 7],
        ["Banana",    5],
        ["Arroz",     5],
        ["Ovo",       1],
        ],
        widthArr: [100, 100],
      }
    }
  
    render() {
      const state = this.state;
      return (
        <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
      );
    };
  };

export class Compras3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["PRODUTO", "PREÇO"],
      tableData: [
        ["Leite",     6],
        ["Suco",      8],
        ["Chocolate", 7]
      ],
      widthArr: [100, 100],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class Compras4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["PRODUTO", "PREÇO", "QUANTIDADE"],
      tableData: [
        ["Arroz",     5,  5],
        ["Ovo",       1, 10]
      ],
      widthArr: [100, 100, 110],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class ComprasQ2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Produto"],
      tableData: [
        ["Leite"],
        ["Suco"],
        ["Chocolate"],
        ["Banana"],
        ["Arroz"],
        ["Ovo"],
      ],
      widthArr: [100],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class ComprasQ3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Produto"],
      tableData: [
        ["Leite"],
        ["Suco"],
      ],
      widthArr: [100],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class ComprasQ4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Preço", "Produto"],
      tableData: [
        [8, "Suco"],
        [7, "Chocolate"],
      ],
      widthArr: [100, 100],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};

export class ComprasQ5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Produto", "Preço"],
      tableData: [
        ["Arroz", 5],
      ],
      widthArr: [100, 100],
    }
  }

  render() {
    const state = this.state;
    return (
      <Tables data={{ tableData: state.tableData, tableHead: state.tableHead, tableWidth: state.widthArr, headHeight: 40 }} />
    );
  };
};