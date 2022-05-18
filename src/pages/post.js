import React, { useState } from "react";
import styled from "@emotion/styled/macro";

const Input = styled.input`
  border: 1px solid #ababab;
  padding: 5px;
  font-size: 18px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 225px;
  text-align: center;
`;
const TextArea = styled.textarea`
  border: 1px solid #ababab;
  padding: 5px;
  font-size: 18px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 225px;
  text-align: center;
`;
const userId = 1234;

function Post() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function sendPost() {
    if (title && body) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ title, body, userId }),
        headers: { "Content-Type": "application/json" },
      });
      const responseBody = await res.json();
      console.log("== responseBody:", responseBody);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendPost();
      }}
    >
      <div>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextArea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Post;
