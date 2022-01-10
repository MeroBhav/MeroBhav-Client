export const initialState = {
    active_register_user_page: "email_registration",
    temp_email: ""
  };
  
  const RegisterReducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVE_REGISTER_USER_PAGE":
        return {
          active_register_user_page: action?.payload?.active_register_user_page,
          temp_email: action?.payload?.temp_email
        };
  
      default:
        return state;
    }
  };
  
  export default RegisterReducer;