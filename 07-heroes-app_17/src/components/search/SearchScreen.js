import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForm({
    searchText: ''
  });
  const {searchText} = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`%c Heroé: %c ${searchText}`,
    'background: #085ED6; color: #FFF; font-size: 16px',
    'background: #222; color: #085ED6;');
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
              onClick={handleSearch}
            >Buscar ...</button>
          </form>
        </div>
      </div>
    </>
  )
}
