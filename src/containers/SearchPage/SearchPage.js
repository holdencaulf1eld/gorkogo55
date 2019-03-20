import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import uniqueId from "lodash/uniqueId";

import SearchForm from "../../components/SearchForm/SearchForm";
import Shop from "../../components/Shop/Shop";
import Spinner from "../../components/Spinner/Spinner";
import "./SearchPage.css";

class SearchPage extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(this.finishLoading, 500);
  }

  finishLoading = () => {
    this.setState({ isLoading: false });
  };

  selectShop = id => {
    this.props.history.push(`/shop/${id}`);
  };

  render() {
    const { isLoading } = this.state;
    const renderData = this.props.testData.map(item => {
      return (
        <Shop
          onSelectShop={this.selectShop}
          key={uniqueId()}
          number={item.number}
          title={item.title}
          description={item.description}
          phone={item.phone}
          vk={item.vk}
          instagram={item.instagram}
        />
      );
    });

    return (
      <Container style={{ padding: "20px" }}>
        <SearchForm
          searchValue={this.props.searchValue}
          changeSearchValue={this.props.changeSearchValue}
        />
        {isLoading ? <Spinner /> : renderData}
      </Container>
    );
  }
}

export default SearchPage;
