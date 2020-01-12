// src/app/store/actions.ts

export enum ActionTypes {
  Add = '[Book] Add to library',
  Get = '[Book] Get from library',
  Find = '[Book] Find from library'
}

export const AddToLibrary = payload => {
  return {
    type: ActionTypes.Add,
    payload
  };
};

export const GetBooks = () => ({
  type: ActionTypes.Get
});

export const FindInLibrary = payload => ({
  type: ActionTypes.Find,
  payload
});

// export const RemoveFromCart = payload => ({
//   type: ActionTypes.Remove,
//   payload
// });
// export const LoadItems = payload => ({
//   type: ActionTypes.LoadSuccess,
//   payload
// });
