import React from "react";

function Comment(props) {
  return (
    <div className="user-reviews__comment">
      <figure className="review__comment">
        <figcaption className="review__user">
          <div className="review__rating-comment">{props.rating}</div>
        </figcaption>

        <figcaption className="review__user">
          <div className="review__user-box">
            <p className="review__user-name">{props.name}</p>
            <blockquote className="review__text">{props.review}</blockquote>
            <p className="review__user-date">{props.date}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Comment;
