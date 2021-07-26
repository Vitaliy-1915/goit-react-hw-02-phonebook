import React from "react";
import { FilterStyle } from "./Filter.styles";

function Filter({ value, onChange }) {
  return (
    <FilterStyle>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </FilterStyle>
  );
}

export default Filter;
