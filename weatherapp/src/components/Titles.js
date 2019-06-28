import React from "react";
import styled from "styled-components";

const Body = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 80vh;
height: 100%;
width: 100%
padding: 40px;

`;
const StyleHeader = styled.div`
  text-align: center;
  font-size: 40px;
  margin: 50px;
  color: #fff;
`;
class Titles extends React.Component {
  render() {
    return (
      <div>
        <Body>
          <StyleHeader>
            <p>Discover the weather</p>
          </StyleHeader>
        </Body>
      </div>
    );
  }
}
export default Titles;
