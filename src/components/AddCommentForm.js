import React, { useState } from 'react';

function AddCommentForm({ articleName, setArticleInfo }) {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');
  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  };
  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="comment">Comment:</label>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={() => addComment()}>Add comment</button>
    </div>
  );
}

export default AddCommentForm;
