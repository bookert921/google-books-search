import React from 'react';
import './BookDisplayContent.styles.css';

const BookDisplayContent = ({
    title,
    image,
    author,
    publisher,
    textSnippet,
    infoLink }) => {

    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="image-container">
                        <img
                            className="book-image"
                            alt={title}
                            src={image} />
                    </div>
                    <h3 className="book-title">{title}</h3>
                    <p className="book-author">{author}</p>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <a href={infoLink}>Navigate To Bookstore</a>
                    <p className="book-publisher">
                        <span className="content-header">Publisher: </span>
                        {publisher}
                    </p>
                    <p className="text-snippet">
                        <span className="content-header">Description: </span>
                        {textSnippet}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default BookDisplayContent;
