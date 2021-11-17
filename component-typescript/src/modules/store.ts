import {combineReducers, createStore} from 'redux';

import sample from './sample';
import { SamplesState } from './sample/reducer';

export interface Store {
    sample: SamplesState;

}
export default createStore(combineReducers<Store>({sample}));

