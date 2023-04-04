
import { all } from 'redux-saga/effects';
import counterSaga from '../features/counter/CounterSaga';

function* helleSaga() {
    console.log('Hello saga');
};

export default function* rootSaga() {
    console.log('root saga');
    yield all([helleSaga(), counterSaga()])
}