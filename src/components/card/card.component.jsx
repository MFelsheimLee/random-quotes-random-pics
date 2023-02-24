import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, advice } = this.props.quote;
    const randomNum = Math.floor(Math.random() * 200);
    return (
      <div className="card-container" key={id}>
        <img
          alt="random"
          src={`https://picsum.photos/id/${randomNum}/200/200`}
        ></img>
        <p>{advice}</p>
      </div>
    );
  }
}

export default Card;
