import "common/components/input/input.scss";

export const InputTypeSearch = ({value, onChange}) => {
  return (
    <input type="text"  
    placeholder="Search 500 000+ games" 
    name="search"
    className="input input_type_search"
    value={value}
    onChange={onChange}/>
  );
}