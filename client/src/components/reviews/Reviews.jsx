import React from 'react';
import Review from '../review/Review';
import './Reviews.scss';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import requestUrl from '../../utils/requestUrl';

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () =>
      requestUrl.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="reviews">
      {isLoading
        ? 'loading'
        : error
        ? 'something went wrong'
        : data.map((review) => <Review key={review._id} review={review} />)}
    </div>
  );
};

export default Reviews;
