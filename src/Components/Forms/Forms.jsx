import React, { Component } from "react";
import { Form } from "./Forms.styles";

class Forms extends Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default Forms;
