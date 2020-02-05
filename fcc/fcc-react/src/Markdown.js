import React from 'react';
import marked from 'marked';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      markedText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const inputText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
    marked.setOptions({
      breaks: true,
      gfm: true
    });

    let markedText = marked(inputText);
    this.setState({
      source: inputText,
      markedText: markedText
    });
  }

  handleChange(e) {
    let inputText = e.target.value;
    let markedText = marked(inputText);
    this.setState({
      source: inputText,
      markedText: markedText
    });
  }

  render() {
    return (
      <div>
        <h1>Bart's MarkdownoRemeter</h1>
        Enter in some stuff to Mark down
        <p />
        <textarea
          id={'editor'}
          onChange={this.handleChange}
          value={this.state.source}
        />
        <p />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.state.markedText }}
        />
      </div>
    );
  }
}

export default Markdown;
