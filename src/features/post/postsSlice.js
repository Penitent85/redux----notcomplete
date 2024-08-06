import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "title-1",
    content: "lorem Ips incorrectly ullamcorper lore mauris al element",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
        thumpsUp:0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
  },
  {
    id: 2,
    title: "title-2",
    content:
      "consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
        thumpsUp:0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
  },
  {
    id: 3,
    title: "title-3",
    content:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
        thumpsUp:0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
  },
];

const postSlice = createSlice({
  name: "postData",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
                thumpsUp:0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
              },
          },
        };
      },
    },
    reactionAdded(state,action){
        const {postId , reaction} = action.payload
        const existingPost = state.find(post=>post.id ===postId);
        if(existingPost){
            existingPost.reactions[reaction]++;
        }
    }
  },
});

export const selectAllPost = (state) => state.posts;

export const { addPost  , reactionAdded} = postSlice.actions;

export default postSlice.reducer;
