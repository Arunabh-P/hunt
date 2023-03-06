import React, { useRef, useState, useEffect } from 'react';
import './Gigs.scss';
import GigCard from '../../components/gigCard/GigCard';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import requestUrl from '../../utils/requestUrl';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { BiSort } from 'react-icons/bi';

const Gigs = () => {
  const [sort, setSort] = useState('sales');
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      requestUrl
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };
  return (
    <div className="gigs">
      <Container className="container-div">
        <h1 className="headline mt-4">AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with hunts AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>
              <BsSearch />
            </button>
          </div>
          <div className="right">
            <span className="sortBy">
              <BiSort />
            </span>
            <span className="sortType">
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <AiOutlineCaretDown onClick={() => setOpen(!open)} />

            {open && (
              <div className="rightMenu">
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
                <span onClick={() => reSort('sales')}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? 'loading'
            : error
            ? 'Something went wrong!'
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </Container>
    </div>
  );
};

export default Gigs;
