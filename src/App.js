import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';
import { fetchProducts } from './store/index';
import { connect } from 'react-redux';

class App extends React.Component {

componentDidMount() {
  this.props.fetchProducts(1);
}

render() {
  console.log(this.props.products);
  return (
    <Grid container direction="column">
      <Header />
      <div style={{ padding: '20px' }}>
        <Content products={this.props.products} />
      </div>
    </Grid>
  );
};
}

const mapDispatchtoPROPS = dispatch => ({
  fetchProducts: (page) => dispatch(fetchProducts(page))
})

const mapStatetoPROPS = storeState => ({
  products: storeState.products
})

export default connect(mapStatetoPROPS, mapDispatchtoPROPS)(App);
