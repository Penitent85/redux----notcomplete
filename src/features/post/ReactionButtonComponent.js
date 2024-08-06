import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumpsUp: "😃",
  wow: "😡",
  heart: "😏",
  rocket: "💋",
  coffee: "😇",
};

const ReactionButtonComponent = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButton = Object.entries(reactionEmoji).map([name, emoji]);

  return <div>ReactionButtonComponent</div>;
};

export default ReactionButtonComponent;
