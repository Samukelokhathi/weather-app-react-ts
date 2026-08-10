import { Input } from "../Input/Input";
import Button from "../Button/Button";



const SearchBar = () => {
    return (
        <div className=" flex gap-3  ">
            <Input onChange={() => { }} />
            <Button text="Search" onClick={() => { }} />
        </div>
    );
};

export default SearchBar