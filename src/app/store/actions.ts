// src/app/store/actions.ts

export enum ActionTypes {
  Add = '[Book] Add to library',
  Get = '[Book] Get from library',
  Find = '[Book] Find from library',
  Search = '[Book] Search from library',
  Edit = '[Book] Edit a book from library',
}

export const AddToLibrary = payload => {
  return {
    type: ActionTypes.Add,
    payload
  };
};

export const FindInLibrary = payload => ({
  type: ActionTypes.Find,
  payload
});

export const SearchInLibrary = payload => ({
  type: ActionTypes.Search,
  payload
});


export const EditBookInLibrary = payload => ({
  type: ActionTypes.Edit,
  payload
});
