import React, { Component } from "react";
import PhoneBookCardsTitles from "../PhoneBookCardsTitles/PhoneBookCardsTitles";
import { PhoneBookCard } from "./PhoneBookCards.styles";

export default class PhoneBookCards extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <PhoneBookCard>
        <PhoneBookCardsTitles title="Phonebook" />
        <form>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <button type="button">'Add contact'</button>
        </form>

        <PhoneBookCardsTitles title="Contacts" />

        <ul>
          <li></li>
        </ul>
      </PhoneBookCard>
    );
  }
}
