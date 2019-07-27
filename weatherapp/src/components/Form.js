import React from "react";
import styled from "styled-components";

const Body = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

class Form extends React.Component {
  render() {
    return (
      <Body>
        <div className="form">
        <form onSubmit={this.props.getWeather}>
          <input type="text1" name="city" placeholder="City..." />
          <input type="text2" name="country" placeholder="Country..." />
          <button className="btn1">Discover </button>
        </form>
        </div>
        
      </Body>
    );
  }
}
export default Form;
