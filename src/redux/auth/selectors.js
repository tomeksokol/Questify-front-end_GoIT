export const getIsUserAuthenticated = (state) => state.auth.isUserAuthenticated;
export const selectUserRequestStatus = (state) => state.auth.user.status;
export const getUserName = (state) => state.auth.user.name;
export const getUserQuests = (state) => state.toDos.cards;
