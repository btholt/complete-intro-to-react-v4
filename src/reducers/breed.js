export default function animal(state = "", action) {
  switch (action.type) {
    case "CHANGE_ANIMAL":
      return "";
    case "CHANGE_BREED":
      return action.payload;
    default:
      return state;
  }
}
