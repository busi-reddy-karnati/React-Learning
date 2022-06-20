import store from './store'

// console.log(store)
/* store contains these. When we subscribe to something, we get notified of any changes
@@observable: ƒ observable()
dispatch: ƒ dispatch(action)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
[[Prototype]]: Object
*/

// ubsubscribe is a pointer to ubsubscribe so that the event no longer fires actions here
const unsubscrbe = store.subscribe(() => {
  console.log('Store changed', store.getState())
})
store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
})

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
})
console.log(store.getState()) //initially [] see reducer, after dispatching an action, It adds/ removes
