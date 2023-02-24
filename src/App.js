import { Component } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      phrases: [],
      searchAdvice: "",
    };
  }

  componentDidMount() {
    const randomLetters = ["a", "e", "i", "o", "u", "y"];
    let randomQuoteSearchLetter = Math.floor(
      Math.random() * randomLetters.length
    );
    fetch(
      `https://api.adviceslip.com/advice/search/${randomLetters[randomQuoteSearchLetter]}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { phrases: data.slips };
        })
      );
  }

  onSearchChange = (event) => {
    const searchAdvice = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchAdvice };
    });
  };

  render() {
    const { phrases, searchAdvice } = this.state;
    const { onSearchChange } = this;

    const filteredQuotes = phrases.filter((phrase) => {
      return phrase.advice.toLocaleLowerCase().includes(searchAdvice);
    });

    return (
      <div className="App App-header">
        <Header />
        <SearchBox
          onChangeHandler={onSearchChange}
          className={"search-box"}
          placeholder={"search"}
        />
        <CardList quotes={filteredQuotes} />
      </div>
    );
  }
}

export default App;
