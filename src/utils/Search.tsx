import React from 'react'

interface SearchProps {
    placeholder: string,
    search: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ placeholder, search }) => {

    const submitted = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const inputEntries = Object.fromEntries(data.entries())

        search(inputEntries.search.toString())
    }

    const enterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return

        const input = document.getElementById('search') as HTMLInputElement

        if(!input) return
        search(input.value)
    }

    return (
    <form className="form-inline mb-2" onSubmit={ submitted }>
        <div className="input-group">
            <input type="search"
                    name="search" 
                    className="form-control" 
                    placeholder={ placeholder } 
                    onKeyDown={ enterPressed }/>

            <button type="submit" 
                    className="btn btn-danger">
                        Search
            </button>
        </div>
    </form>
    )
}

export default Search