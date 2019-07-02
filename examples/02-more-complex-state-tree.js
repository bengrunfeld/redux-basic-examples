const { createStore, combineReducers } = require('redux')

const initialState = {
  members: [
    {name: 'Ben', age: 39},
    {name: 'Charles', age: 27},
    {name: 'Dave', age: 44},
  ],
  active: false
}

const actions = {
  ADD_MEMBER: 'ADD_MEMBER',
  REMOVE_MEMBER: 'REMOVE_MEMBER',
  TOGGLE_ACTIVE: 'TOGGLE_ACTIVE',
}

function editMembers(state = [], action) {
  if (action.type === 'ADD_MEMBER')
    return [...state, action.payload]
  
  if (action.type === 'REMOVE_MEMBER')
    return state.filter(item => item.name !== action.payload.name)
  
  return state
}

function toggleActivity(state = false, action) {
  if (action.type === 'TOGGLE_ACTIVE')
    return !state

  return state
}

const reducers = combineReducers({members: editMembers, activity: toggleActivity})

let store = createStore(reducers, initialState) // store API is subscribe, dispatch, getState.

store.subscribe(() => console.log(store.getState()))

console.log('\n------>>>> Adding Edward')
store.dispatch({ type: 'ADD_MEMBER', payload: {name: 'Edward', age: 50} })
console.log('\n------>>>> Toggle')
store.dispatch({ type: 'TOGGLE_ACTIVE' })
console.log('\n------>>>> Adding Frank')
store.dispatch({ type: 'ADD_MEMBER', payload: {name: 'Frank', age: 65} })
console.log('\n------>>>> Toggle')
store.dispatch({ type: 'TOGGLE_ACTIVE' })
console.log('\n------>>>> Remove Edward')
store.dispatch({ type: 'REMOVE_MEMBER', payload: {name: 'Edward', age: 50} })
console.log('\n------>>>> Toggle')
store.dispatch({ type: 'TOGGLE_ACTIVE' })
