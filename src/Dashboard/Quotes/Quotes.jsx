import { Component } from "react";
import QuoteAuthor from "../Components/QuoteAuthor";
import QuotesText from "../Components/QuotesText";
import axios from "axios";
import Button from "../Components/Button";

export class Quotes extends Component {
  state = {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    quotesData: [],
    color: "rgb( 246 , 152 , 18 )",
  };

  randomColor = () => {
    const colorPalette = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPalette[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  componentDidMount() {
    if (this.state.quotesData.length > 0) {
      return;
    } else {
      this.fetchQuotes();
    }
  }

  fetchQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesData = [...res.data.quotes];
        const color = this.state.color;
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        this.setState({
          quotesData: quotesData,
          color: color,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 100);
    let { quote, author } = this.state.quotesData[randomIndex];
    const color = this.randomColor();

    document.body.style.backgroundColor = color;

    this.setState({
      quote: quote,
      author: author,
      color: color,
    });
  };

  render() {
    return (
      <div>
        <div className="flex justify-center py-64">
          <div className="border-2 border-black rounded-3xl bg-white  flex flex-col justify-between leading-normal p-10 max-w-xl">
            <div className="mb-8 pb-10 pr-10 pl-10">
              <div className="text-gray-900 font-bold text-xl mb-2">
                <QuotesText quote={this.state.quote} color={this.state.color} />
              </div>
              <div>
                <div className="flex justify-end">
                  <QuoteAuthor
                    author={this.state.author}
                    color={this.state.color}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="pt-10">
                <Button
                  color={this.state.color}
                  handleClick={this.handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
