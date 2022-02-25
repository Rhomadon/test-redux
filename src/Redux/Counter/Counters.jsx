import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Counters = () => {
    let count = useSelector(state => state.counter)
    const dispatch = useDispatch
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <button onClick={() => dispatch({type: 'DEC'})} className="btn btn-warning m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16"><path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
            </button>
            <span>{count.count}</span>
            <button onClick={() => dispatch({type: 'INC'})} className="btn btn-success m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16"><path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>
            </button> 
            
        </div>
    )
}

export default Counters