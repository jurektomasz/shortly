export default function formReducer(state, e) {
  return {
    ...state,
    [e.name]: e.value,
  };
}
