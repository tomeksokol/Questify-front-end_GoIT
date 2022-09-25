import { createSlice } from "@reduxjs/toolkit";
// import { fetchToDos, saveToDo, removeToDo } from "../api/requests";

const initialState = {
  cards: [],
  editedCardId:"",
  status: "idle",
  isFormOpen:false,
};

export const toDoReducer = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDoCard(state, action) {
      state.cards = [...state.cards, action.payload];
    },
    deleteToDoCard(state, action) {
      state.cards = state.cards.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateEditedCardId(state, action) {
      state.editedCardId = action.payload
    },
    openForm(state) {
      state.isFormOpen = true
    },
    closeForm(state) {
      state.isFormOpen = false
    }
  },
  //   extraReducers: (builder) => {
  //     builder
  //       //GET
  //       .addCase(fetchToDos.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(fetchToDos.fulfilled, (state, action) => {
  //         state.cards = [...action.payload];
  //         state.status = "idle";
  //       })

  //       //POST
  //       .addCase(saveToDo.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(saveToDo.fulfilled, (state, action) => {
  //         state.cards = [...state.cards, action.payload];
  //         state.status = "idle";
  //       })

  //       //DELETE
  //       .addCase(removeToDo.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(removeToDo.fulfilled, (state, action) => {
  //         state.cards = state.cards.filter(
  //           (contact) => contact.id !== action.payload
  //         );
  //         state.status = "idle";
  //       });
  //   },
});
