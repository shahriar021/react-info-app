import React, { useEffect, useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    props.onSearch(search);
  }, [search]);

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <input
        name="name"
        placeholder="search here......"
        value={search}
        onChange={handleOnChange}
      />
    </div>
  );
}
