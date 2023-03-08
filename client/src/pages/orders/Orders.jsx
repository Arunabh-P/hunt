import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import requestUrl from '../../utils/requestUrl';
import { useQuery } from '@tanstack/react-query';
import './Orders.scss';
import { MdOutlineContactless } from 'react-icons/md';
import { Container } from 'react-bootstrap';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
const Orders = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      requestUrl.get(`/orders`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="orders">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Container className="container-div">
          <div className="title">
            <h1 className="mt-5 headline"> Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <MdOutlineContactless className="contactIcon" />
                </td>
              </tr>
            ))}
          </table>
        </Container>
      )}
    </div>
  );
};

export default Orders;
