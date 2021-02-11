import React from 'react'
import BookDisplayContent from '../BookDisplayContent/BookDisplayContent.component';
import './BookDisplay.styles.css';

const BooksDisplay = (props) => {
    // searchInfo for text snippet
    // volumeInfo for book title, authors, publisher, avg raiting, language, description, imageLinks, pageCount, category, publishedDate, etc.

    return (
        < div className="container" >
            {
                props.books.map(book => {
                    const { title, authors, imageLinks: { thumbnail } } = book.volumeInfo;
                    return (
                        <div key={book.etag} className="book-card">
                            <BookDisplayContent
                                title={title}
                                author={authors}
                                image={thumbnail}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default BooksDisplay
