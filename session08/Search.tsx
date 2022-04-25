const Search = ({ children, onChange, searchText }: any) => {
  return (
    <div>
      <label htmlFor="searchBox">{children}</label>
      <input id="searchBox" type="text" onChange={onChange} />
      <p>{searchText}</p>
    </div>
  );
};
export default Search;
