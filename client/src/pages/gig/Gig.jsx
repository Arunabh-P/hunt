import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Gig.scss';
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineCheck,
} from 'react-icons/ai';
import { SlRefresh } from 'react-icons/sl';
import requestUrl from '../../utils/requestUrl';
import noAvatar from '../../Public/images/noavatar.jpg';

import { Container } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/reviews/Reviews';

const Gig = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      requestUrl.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      requestUrl.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        'loading'
      ) : error ? (
        'something went wrong'
      ) : (
        <Container className="container-div">
          <div className="left">
            <h1 className="headline mt-4">{data.title}</h1>

            {isLoadingUser ? (
              'loading'
            ) : errorUser ? (
              'something wentwrong'
            ) : (
              <div className="user">
                <img className="pp" src={dataUser.img || noAvatar} alt="" />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <AiFillStar className="starIcon" key={i} />
                      ))}
                    <span>
                      {' '}
                      {Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}
            <>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.images.map((img) => (
                  <Carousel.Item key={img}>
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              'loading'
            ) : errorUser ? (
              'something wentwrong'
            ) : (
              <div className="seller">
                <div className="user">
                  <img src={dataUser.img || noAvatar} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <AiFillStar className="starIcon" key={i} />
                          ))}
                        <span>
                          {' '}
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            {currentUser?.isSeller ? '' : <Reviews gigId={id} />}
          </div>

          <div className="right mt-5">
            <h3 className="subHead">{data.shortTitle}</h3>
            <p className="amount">₹ {data.price}</p>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <AiOutlineClockCircle />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <SlRefresh />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <AiOutlineCheck className="checkIcon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Gig;
