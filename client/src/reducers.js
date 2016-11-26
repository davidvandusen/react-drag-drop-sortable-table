import {combineReducers} from 'redux';

function moveItemInArray(array, from, to) {
  const a = array.slice(0);
  a.splice(to, 0, a.splice(from, 1)[0]);
  return a;
}

function fieldsReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

function itemsReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

function uiReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_UI':
      return Object.assign({}, state, action.data);
      break;
    case 'REORDER_ITEMS':
      const currentDraggedItemIndex = state.itemOrder.indexOf(state.draggedItemId);
      if (currentDraggedItemIndex === -1) return state;
      state.itemOrder = moveItemInArray(state.itemOrder, currentDraggedItemIndex, action.data.newDraggedItemIndex);
      return state;
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fields: fieldsReducer,
  items: itemsReducer,
  ui: uiReducer
});

export default rootReducer;
