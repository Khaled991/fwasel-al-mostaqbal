// @ts-nocheck
import useRedux from './useRedux';
import { numberActions, numberStore } from './number/number';

const ReduxTest = () => {
  const [numberState, { set: setNumber }] = useRedux(
    numberStore,
    numberActions
  );

  let input;
  return (
    <>
      <input type="text" ref={input} />
      <button onClick={() => setNumber(input.value)}>Add</button>
      <div>{numberState.number}</div>
    </>
  );
};

export default ReduxTest;
