export const initialState = {
  active_page: "home",
};

const HomeMainReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_HOMEMAIN_PAGE":
      return {
        active_page: action?.payload?.active_page,
      };

    default:
      return state;
  }
};

export default HomeMainReducer;
