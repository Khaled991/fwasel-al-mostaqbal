// @ts-nocheck
import { createStore } from 'redux';

const initialValue = {number: 0};

const numberReducer = (_, action) => {
      return {number: action.value ?? initialValue};
};

export const numberStore = createStore(numberReducer);

export const numberActions = {
  set: value => ({ type: "SET",value: value }),
};
