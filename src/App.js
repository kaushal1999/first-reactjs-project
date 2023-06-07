import React, { Component } from "react";
import "./App.css";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function SearchBar(props) {
  return (
    <form>
      <input type="text" placeholder="Search..." value={props.filterText} onChange={props.handleText}
      />
      <label>
        {" "}
        <input type="checkbox" value={props.checked} onChange={props.handleBox} /> Only show products in
        stock
      </label>
    </form>
  );
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <th>{props.category}</th>
    </tr>
  );
}

function ProductRow(props) {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

function ProductTable(props) {
  let filterText = props.filterText;
  let checked = props.checked;
  let rows = [];
  let lastCategory = null;
  PRODUCTS.forEach((element) => {
    if (filterText!=="" &&  element.name.indexOf(filterText) === -1) return;
    if (checked && !element.stocked) return;

    let cat = element.category;
    if (cat !== lastCategory) {
      lastCategory = cat;
      rows.push(<ProductCategoryRow category={cat}></ProductCategoryRow>);

      rows.push(<ProductRow product={element}></ProductRow>);
    } else {
      rows.push(<ProductRow product={element}></ProductRow>);
    }
  });
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

class FilterableProductTable extends React.Component {
  constructor() {
    super();
    this.state = { filterText: "", checked: false };
  }
  handleText= (e)=> {
    this.setState(
      this.state = { filterText: e.target.value }
    );
  }
  handleBox = (e)=>{
      this.setState({checked:!this.state.checked})
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          checked={this.state.checked}
          handleBox={this.handleBox}
          handleText={this.handleText}
        ></SearchBar>
        <ProductTable
          filterText={this.state.filterText}
          checked={this.state.checked}
        ></ProductTable>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable/>
      </div>
    );
  }
}

export default App;
