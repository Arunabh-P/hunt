import React from 'react';
import { useQuery } from '@tanstack/react-query';
import noAvatar from '../../Public/images/noavatar.jpg';
import requestUrl from '../../utils/requestUrl';
import './Review.scss';
import { AiFillStar } from 'react-icons/ai';
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      requestUrl.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="review">
      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <div className="user">
          <img className="pp" src={data.img || noAvatar} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <AiFillStar className="starIcon" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
    </div>
  );
};

export default Review;
