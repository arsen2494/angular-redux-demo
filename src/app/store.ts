import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO} from './actions';
import {tassign} from 'tassign';

export interface IAppState {
  todos: Array<any>;
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_TODO:
      return tassign(state, {
        todos: state.todos.concat(action.todo),
        lastUpdate: getCurrentDate()
      });
    case CLEAR_TODOS:
      return tassign(state, {todos: [], lastUpdate: getCurrentDate()});
    case REMOVE_TODO:
      return tassign(state, {
        todos: state.todos.filter((todo, index) => index !== action.index),
        lastUpdate: getCurrentDate()
      });
  }
  return state;
}

function getCurrentDate(): Date {
  return new Date(Date.now());
}
