import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ handleAdd }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(newCategory);
        setNewCategory("");
      }}
    >
      <input type="text" onChange={handleChange} value={newCategory} />
      <button disabled={!newCategory || newCategory === ""} type="submit">
        Search
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default AddCategory;
