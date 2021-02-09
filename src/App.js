import React from 'react';
import './App.css';
import BooksDisplay from './components/BooksDisplay/BooksDisplay.component';
import Header from './components/Header/Header.component'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    }
  };

  componentDidMount() {
    const q = "JavaScript";
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .then(response => response.json())
      .then(data => this.setState({ books: data.items }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <BooksDisplay books={this.state.books} />
      </div>
    );
  }
}

export default App;
