import React, { Component } from "react";
import "../css/GameDraw.css";
import { FlexBox } from "./style";

class GameDraw extends Component {
  handleClick(id, db) {
    // console.log(id)
    this.props.onChange(id, db);
  }

  render() {
    const { id, img, db } = this.props;
    const path = "../../../img/";
    console.log(path + img);
    return (
      <FlexBox>
        <div
          className="gameDraw"
          onClick={() => {
            this.handleClick(id, db);
          }}
        >
          <img className="img" src={path + img} alt="pic of boy" />
        </div>
      </FlexBox>
    );
  }
}

export default GameDraw;
