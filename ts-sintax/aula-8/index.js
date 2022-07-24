"use strict";
//Generics
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(stateValue) {
        state = stateValue;
    }
    return { getState, setState };
}
const state = useState();
state.setState('Gabriel Salvador');
console.log(state.getState());
state.setState(30);
console.log(state.getState());
