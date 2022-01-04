export const initialState = {
    active_register_user: "email_registration",
    temp_email: ""
  };
  
  const RegisterReducer = (state, action) => {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {};
  
      default:
        return state;
    }
  };
  
  export default RegisterReducer;