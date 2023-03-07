import React from 'react';
import './GigCard.scss';
import { Link } from 'react-router-dom';
import requestUrl from '../../utils/requestUrl';
import noAvatar from '../../Public/images/noavatar.jpg';
import { useQuery } from '@tanstack/react-query';

import { AiFillStar } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      requestUrl.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            'loading'
          ) : error ? (
            'Something went wrong!'
          ) : (
            <div className="user">
              <img src={data?.img || noAvatar} alt="" />
              <span>{data?.username}</span>
            </div>
          )}

          <p>{item.shortDesc}</p>
          <div className="star">
            <AiFillStar className="starIcon" />
            <span>
              {' '}
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <FaHeart className="heartIcon" />
          <div className="price">
            <span>STARTING AT</span>
            <p>₹ {item.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
