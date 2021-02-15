import React from 'react'
import BookDisplayContent from '../BookDisplayContent/BookDisplayContent.component';
import './BookDisplay.styles.css';
import loader from '../../assets/loader.svg';
import noImage from '../../assets/noImage.png';

const BooksDisplay = ({ loading, books }) => {
    // searchInfo for text snippet
    // volumeInfo for book title, authors, publisher, avg raiting, language, description, imageLinks, pageCount, category, publishedDate, etc.
    return (
        <div className="container">
            {loading && books ?
                books.map(book => {
                    const {
                        title,
                        authors,
                        description,
                        publisher,
                        imageLinks,
                        infoLink
                    } = book.volumeInfo;

                    console.log(book)
                    return (
                        <BookDisplayContent
                            key={book.etag}
                            title={title}
                            author={authors}
                            publisher={!publisher ? <span style={{ color: 'red' }}>Unavailable</span> : publisher}
                            image={!imageLinks ? noImage : imageLinks.thumbnail}
                            textSnippet={!description ? <span style={{ color: 'red', fontStyle: 'italic' }}>Unavailable</span> : description}
                            infoLink={infoLink}
                        />
                    )
                }) : <div className="loader">
                    <img src={loader} alt="loader" />
                </div>
            }
        </div >
    )
}

export default BooksDisplay
