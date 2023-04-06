import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/actions';
import { Spinner } from 'react-bootstrap';
import './Value.css';

const Value = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { data, loading } = useSelector((res) => res.api_state);

  const handleClick = (title, body) => {
    console.log(`Title: ${title}\nBody: ${body}`);
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-5'>Posts</h1>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <Spinner animation='border' role='status' variant='primary'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {data.map((item, index) => (
            <div
              className='col pointer animate__animated animate__fadeIn animate__delay-1s'
              key={item.id}
              onClick={() => handleClick(item.title, item.body)}
            >
              <div className='card h-100 shadow border-primary value-card'>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Value;
