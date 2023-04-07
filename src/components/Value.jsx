import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost } from '../redux/actions/actions';
import { Spinner } from 'react-bootstrap';
import './Value.css';
import { ADDPOSTRESET } from '../redux/constants/counter';

const Value = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { data, loading } = useSelector((res) => res.api_stateGet);

  const [input, setInput] = useState({ title: "", body: "", userid: 11 })

  const handleChange = (e) => {
    setInput((prevInput)=>{
      return { ...prevInput, [e.target.name]: e.target.value }
    })
  }
  const id = Math.floor(Math.random() * 20) + 11;
  const add = (e) => {
    e.preventDefault()
    dispatch(addPost(input.title, input.body, id))
    dispatch({type : ADDPOSTRESET});
    setInput({title:"",body:""})
  }

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
          {data.map((item , index) => (
            <div
              className='col pointer animate__animated animate__fadeIn animate__delay-1s'
              key={item.id + index}
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
      <div className="col-4 mt-4">
        <div className="card">
          <div className="card-body">
            <input onChange={handleChange} value={input.title} name="title" className="form-control mb-3" type="text" placeholder="Enter a title..." />
            <textarea onChange={handleChange} value={input.body} name="body" className="form-control" rows="5" placeholder="Enter your post here..."></textarea>
            <button onClick={add} className="btn btn-primary mt-3">Add Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
