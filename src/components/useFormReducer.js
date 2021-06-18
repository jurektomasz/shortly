export default function formReducer(state, e) {
  if (e.reset) {
    return { email: "", password: "" };
  }
  return {
    ...state,
    [e.name]: e.value,
  };
}
