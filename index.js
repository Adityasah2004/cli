import displayBusinessCard from "./lib/data.js";

export default ({ json }) => {
  if (json) {
    return JSON.stringify({ message: "CLI Business Card" });
  }
  return displayBusinessCard();
};
