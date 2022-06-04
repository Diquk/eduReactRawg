import './input.scss';

function InputTypeSearch(props) {
  return (
    <input type="text"  
    placeholder="Search 500 000+ games" 
    name="search"
    className="input input_type_search"
    value={props.value}
    onChange={props.onChange}/>
  );
}

export default InputTypeSearch;