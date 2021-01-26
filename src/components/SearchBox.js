import React from 'react';

const SearchBox = ({ searchChange }) => { //The onSearchChange function is retrieved from the props object using destructuring
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' //These are tachyons package values
                type='search' 
                placeholder='search robots' 
                onChange={searchChange} //The onSearchChange function that was passed down as a prop from App.js is called whenever the contents of the search field changes
            />
        </div>
    )
}

export default SearchBox;