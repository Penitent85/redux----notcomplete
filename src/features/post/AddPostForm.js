import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { selectAllUsers  } from "../users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(addPost(title, content , userId));
      setTitle("");
      setContent("");
    }
  };
  const canSave =Boolean(title) && Boolean(content) && Boolean(userId)


  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      

      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          value={title}
          name="postTitle"
          id="postTitle"
          onChange={onTitleChange}
        />

      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" name="postAuthor" onChange={onAuthorChange}>
        <option value="">Select Author</option>
        {userOptions}
      </select>


        <label htmlFor="postContent">Content:</label>
        <input
          value={content}
          id="postContent"
          name="postContent"
          onChange={onContentChange}

        />

        <button type="button" onClick={onSavePostClicked} disabled={!canSave }  >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
