import React, { Component } from "react";
import Tables from "../style";

export class InsertTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["CODIGO", "PRODUTO", "QUANTIDADE", "PREÇO", "UNIDADE"],
      tableData: [
        [1,  "Leite", 4, 5, "L"],
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