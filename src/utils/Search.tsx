import React from 'react'

interface SearchProps {
    placeholder: string,
    search: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ placeholder, search }) => {
    return (
    <form className="form-inline mb-2">
        <div className="input-group">
            <input type="search" 
                    className="form-control" 
                    placeholder={ placeholder }/>

            <button type="submit" 
                    className="btn btn-danger">
                        Search
            </button>
        </div>
    </form>
    )
}

export default Search