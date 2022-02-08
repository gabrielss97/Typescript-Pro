//Generics

function useState<T extends string | number>() {
  let state: T;

  function getState() {
    return state;
  }

  function setState(stateValue: T) {
    state = stateValue;
  }

  return { getState, setState };
}

const state = useState<number | string>()

state.setState('Gabriel Salvador')
console.log(state.getState());

state.setState(30)
console.log(state.getState());