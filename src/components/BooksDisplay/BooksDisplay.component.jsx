import React from 'react'
import BookDisplayContent from '../BookDisplayContent/BookDisplayContent.component';
import './BookDisplay.styles.css';

const BooksDisplay = (props) => {
    // searchInfo for text snippet
    // volumeInfo for book title, authors, publisher, avg raiting, language, description, imageLinks, pageCount, category, publishedDate, etc.
    return (
        <div className="container">
            {
                props.books.map(book => {
                    const {
                        title,
                        authors,
                        description,
                        publisher,
                        imageLinks: { thumbnail },
                        infoLink
                    } = book.volumeInfo;

                    return (
                        <BookDisplayContent
                            key={book.etag}
                            title={title}
                            author={authors}
                            publisher={publisher}
                            image={thumbnail}
                            textSnippet={description}
                            infoLink={infoLink}
                        />
                    )
                })
            }
        </div >
    )
}

export default BooksDisplay
