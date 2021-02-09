import React from 'react'
import './BookDisplay.styles.css';

const BooksDisplay = (props) => {
    // searchInfo for text snippet
    // volumeInfo for book title, authors, publisher, avg raiting, language, description, imageLinks, pageCount, category, publishedDate, etc.
    console.log(props.books)
    return (
        <div className="container">
            {props.books.map(book => {
                return (
                    <div key={book.etag} className="book-card">
                        <div className="card-content">
                            <p className="book-title">{book.volumeInfo.title}</p>
                            <p className="book-author">{book.volumeInfo.authors}</p>
                            <img
                                className="book-image"
                                alt={book.volumeInfo.title}
                                src={book.volumeInfo.imageLinks.thumbnail} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BooksDisplay
