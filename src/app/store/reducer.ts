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
        books: [...state.books, { ...action.payload, id: state.books.length + 1 }]
      };
    case ActionTypes.Search:
      return Object.assign({},
        {
          ...state,
          booksFound: [...state.books.filter(book => {
            return (book.name.toLowerCase().includes(action.payload.name) ||
              book.author.toLowerCase().includes(action.payload.name));
          })]
        });
    case ActionTypes.Find:
      return {
        ...state,
        // tslint:disable-next-line:triple-equals
        booksFound: [...state.books.filter(book => book.id == (action.payload.id))]
      };
    case ActionTypes.Edit:
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index > -1) {
        state.books[index] = action.payload;
      }
      return Object.assign({},
        {
          ...state,
          books: [...state.books]
        });
    default:
      return state;
  }
}
