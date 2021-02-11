import React from 'react';
import './BookDisplayContent.styles.css';

const BookDisplayContent = (props) => {
    return (
        <div className="card-content">
            <p className="book-title">{props.title}</p>
            <p className="book-author">{props.author}</p>
            <img
                className="book-image"
                alt={props.title}
                src={props.image} />
        </div>
    )
}

export default BookDisplayContent
