
import { useFormState } from 'react-dom';

const initialState = {
    message: null,
}

function SearchButton() {

    return (
        <button type="submit">
            Search
        </button>
    )
}
export default function Search() {
  
    return (
        <form action="">
            <input
                value="..."
                type="text"
                placeholder='Search coin...'
            />
        </form>
    )
}
