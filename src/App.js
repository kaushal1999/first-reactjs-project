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

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        {" "}
        <input type="checkbox" /> Only show products in stock
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

function ProductTable() {
  let rows = [];
  let lastCategory = null;
  PRODUCTS.forEach((element) => {
    let cat = element.category;
    if (cat != lastCategory) {
      lastCategory = cat;
      rows.push(<ProductCategoryRow category={cat}></ProductCategoryRow>);
      rows.push(<ProductRow product={element}></ProductRow>)
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

function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable product={props.product}></ProductTable>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable product={PRODUCTS} />
      </div>
    );
  }
}

export default App;
