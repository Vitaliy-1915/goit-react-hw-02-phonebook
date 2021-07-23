import React, { Component } from "react";
import PhoneBookCardsTitles from "../PhoneBookCardsTitles/PhoneBookCardsTitles";
import Forms from "../Forms/Forms";
import ContactLists from "../ContactLists/ContactLists";
import { PhoneBookCard } from "./PhoneBookCards.styles";

export default class PhoneBookCards extends Component {
  state = {
    contacts: [],
  };

  formSubmit = (contacts) => {
    console.log(contacts);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contacts],
    }));
  };

  render() {
    return (
      <PhoneBookCard>
        <PhoneBookCardsTitles title="Phonebook" />
        <Forms onSubmit={this.formSubmit} />

        <PhoneBookCardsTitles title="Contacts" />

        <ContactLists text={this.state.contacts} />
      </PhoneBookCard>
    );
  }
}
