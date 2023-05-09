const SearchBox = ({ query, changeHandler }) => {
  return (
    <div className="searchbox">
      <input
        type="text"
        value={query}
        onChange={changeHandler}
        placeholder="Search by firstname"
      />
    </div>
  );
};

export default SearchBox;
