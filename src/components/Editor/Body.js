import React, { useState } from "react";
import { marked } from "marked";
import "./body.scss";

function Body() {
  const initialState = `# Hello, World!    

## This is a markdown editor

### Made by [ENG. Mohamed Waled](https://github.com/Mohamed-Waled)

> Use it as much as you can it's **free**

\`\`\`
let code = "You Can Use It To Do What Ever You Want"
\`\`\`

\`let inline-code = "Like Any Other Editor"\`

- Free
- Simple
- Functional

![photo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  let [text, setText] = useState(initialState);

  const handleChange = (e) => {
    setText((text = e.target.value));
  };
  const markdown = marked(text, { breaks: true });

  return (
    <div className="body">
      <div className="editor">
        <h2 className="editorTitle">Write Your Markdown Here:</h2>
        <textarea id="editor" onChange={handleChange} value={text} />
      </div>
      <div className="previewer">
        <h2 className="resultTitle">See The Result Here:</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    </div>
  );
}

export default Body;
