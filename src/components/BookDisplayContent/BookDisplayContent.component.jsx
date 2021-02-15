import React from 'react';
import './BookDisplayContent.styles.css';

const BookDisplayContent = (props) => {

    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="image-container">
                        <img
                            className="book-image"
                            alt={props.title}
                            src={props.image} />
                    </div>
                    <h3 className="book-title">{props.title}</h3>
                    <p className="book-author">{props.author}</p>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <a href={props.infoLink}>Navigate To Bookstore</a>
                    <p className="book-publisher">
                        <span className="content-header">Publisher: </span>
                        {props.publisher}
                    </p>
                    <p className="text-snippet">
                        <span className="content-header">Description: </span>
                        {props.textSnippet}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default BookDisplayContent;
