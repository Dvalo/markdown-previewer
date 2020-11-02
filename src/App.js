import React from 'react';
import marked from 'marked';
import preview from './extra/preview';

import './App.css';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: preview,
    };
  }
  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
  };
  render() {
    let rawMarkup = marked(this.state.markdown, { breaks: true });
    return (
      <div id="markdown-previewer">
        <div id="editor-wrapper">
          <div className="head">
            <span>Editor</span>
          </div>
          <textarea
            id="editor"
            spellcheck="false"
            value={this.state.markdown}
            onChange={this.handleChange}/>
        </div>
        <div id="preview-wrapper">
          <div className="head">
            <span>Previewer</span>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: rawMarkup }} />
        </div>
      </div>
    );
  }
}

export default Markdown;
