import React from "react";

function Select({ setItemsPerPage, itemsPerPage }) {
  const handleChange = (e) => {
    setItemsPerPage(e.target.value);
  };
  return (
    <>
      <form>
        <select
          className="border border-black rounded-[4px] mt-2"
          onChange={handleChange}
          defaultValue={itemsPerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </form>
    </>
  );
}

export default Select;
