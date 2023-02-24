import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { quotes } = this.props;
    return (
      <div className="card-list">
        {quotes.map((quote) => {
          return <Card quote={quote} />;
        })}
      </div>
    );
  }
}

export default CardList;
