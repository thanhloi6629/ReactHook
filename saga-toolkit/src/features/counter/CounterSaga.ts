import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";
import { fetchCount } from "./counterAPI";


export function* log(action: PayloadAction) {
    console.log('log', action);
}


function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('handle incảêmnt saga');
    // wait 0.2s => disspath action sucess => hạn chế được double click, hoặc click liên tục chỉ call action 1 lần
    yield delay(200);
    console.log('waiting 0.2s done, dispatch action');
    //dispatch action success
    yield put(incrementSagaSuccess(action.payload));
}    

function* test () {
    yield fetchCount(2);
    yield call(fetchCount, 2);
}

export default function* counterSaga() {
    console.log('couter saga');
    // vs bấm 3 lần, nó chỉ call lần cuối
    yield takeLatest(incrementSaga.toString(), handleIncrementSaga);

    // lắng nghe tất cả các action, * bất kì action nào cũng lắng nghe
    // yield takeEvery('*', log);

    // Muốn lắng nghe 1 action 
    // yield takeEvery('counter/increment', log);
    // counter/increment tương đương với increment().type
    // yield takeEvery(increment().type, log);
    
}