import React from "react";
import styled from "styled-components";

const Body = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyleButton = styled.button`
  font-size: 13px;
  border-radius: 2px;
  font-weight: lighter;
  letter-spacing: 1px;
  padding: 8px 20px;
  margin: 0 2px;
  color: #black;
  font-weight: 100;
  background-color: #fff;
  outline: none;
`;

class Form extends React.Component {
  render() {
    return (
      <Body>
        <form onSubmit={this.props.getWeather}>
          <input type="text1" name="city" placeholder="Stad..." />
          <input type="text2" name="country" placeholder="Land..." />
          <StyleButton>Hämta väder </StyleButton>
        </form>
      </Body>
    );
  }
}
export default Form;
