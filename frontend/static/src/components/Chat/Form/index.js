import React from 'react';
import Cookies from 'js-cookie';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      user: '',
      content: '',

    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/v1/chats/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    Cookies.set('Authorization', `Token ${data.key}`)
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='content' value={this.state.content} onChange={this.handleInput}/>
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default ChatForm
