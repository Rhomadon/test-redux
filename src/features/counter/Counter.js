import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-warning"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >-</button>
        </div>
        <div className="col">
          <span className="">{count}</span>
        </div>
        <div className="col">
          <button
          className="btn btn-success"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >+</button>
        </div>
      </div>

      <div class="row m-4">
        <div class="col">
          <input
            className="form-text"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </div>
        <div class="col">
          <button
              className="btn btn-primary"
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Amount
            </button>
        </div>
        <div class="col">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
        </div>
      </div>
    </div>
  );
}
