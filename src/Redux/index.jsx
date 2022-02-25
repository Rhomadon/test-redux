
import React from 'react-dom';
import { Provider } from 'react-redux';
import store from '../App/Store';
import Counters from './Counter/Counters';

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
            <Counters />
            </Provider>
        </div>
    )
}

export default Redux