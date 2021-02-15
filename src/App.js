import React from 'react';
// COMPONENTS
import BooksDisplay from './components/BooksDisplay/BooksDisplay.component';
import Header from './components/Header/Header.component';
import SearchBar from './components/SearchBar/SearchBar.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      q: ''
    }
  };

  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=javascript`)
      .then(response => response.json())
      .then(data => this.setState({ books: data.items }));
  }

  componentWillUnmount() {

  }

  handleChange = (search) => {
    this.setState({ q: search })
  }

  handleSubmit = async (search) => {
    if (!search) return;
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then(response => response.json())
      .then(data => this.setState({ books: data.items }));
    this.setState({ q: '' });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          q={this.state.q}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <BooksDisplay
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
