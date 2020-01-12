import { ActionTypes } from './actions';

export interface InitialState {
  books: Array<any>;
}
export const initialState = {
  books: [],
  booksFound: []
};

export function LibraryReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Add:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case ActionTypes.Find:
      return Object.assign({},
        {
          ...state,
          booksFound: [...state.books.filter(book => book.name.includes(action.payload.name))]
        });
    default:
      return state;
  }
}
