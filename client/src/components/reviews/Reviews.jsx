import React from 'react';
import Review from '../review/Review';
import './Reviews.scss';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import requestUrl from '../../utils/requestUrl';
import { AiFillStar } from 'react-icons/ai';

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () =>
      requestUrl.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });
  const mutation = useMutation({
    mutationFn: (review) => {
      return requestUrl.post('/reviews', review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="reviews">
      {isLoading
        ? 'loading'
        : error
        ? 'something went wrong'
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3 className="reviewHeadline">Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <textarea
            type="text"
            cols="30"
            rows="3"
            placeholder="write your opinion"
          />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
