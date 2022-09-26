import { createSlice } from "@reduxjs/toolkit";
// import { fetchToDos, saveToDo, removeToDo } from "../api/requests";

const initialState = {
  cards: [],
  editedCardId:"",
  status: "idle",
};

export const toDoReducer = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDoCard(state, action) {
      state.cards = [...state.cards, action.payload];
    },
    deleteToDoCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    editToDoCard(state, action) {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      state.cards.splice(index, 1, action.payload);
      // state.cards[index] = action.payload;
      // console.log(state.cards[index]);
    },
    completeToDoCard(state, action) {
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].completed = true;
    },
    updateEditedCardId(state, action) {
      state.editedCardId = action.payload;
    },
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
