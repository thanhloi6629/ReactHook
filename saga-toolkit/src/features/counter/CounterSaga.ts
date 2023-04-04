import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import { increment } from "./counterSlice";


export function* log(action: PayloadAction) {
    console.log('log', action);
}

export default function* counterSaga() {
    console.log('couter saga');
    // lắng nghe tất cả các action, * bất kì action nào cũng lắng nghe
    // yield takeEvery('*', log);

    // Muốn lắng nghe 1 action 
    yield takeEvery('counter/increment', log);
    // counter/increment tương đương với increment().type
    yield takeEvery(increment().type, log);
}