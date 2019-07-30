import React from "react";

class Titles extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="title">
        <h1>Discover the weather</h1>
      </div>
      <div className="dailyWthr">
          <p>Today</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Titles;
