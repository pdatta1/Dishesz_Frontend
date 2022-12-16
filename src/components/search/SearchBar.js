
import React, { useState, useEffect } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchDesign"

import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => { 

    const [ searchInput, updateSearchInput ] = useState("")

    const handleSearchInput = ( event ) => { 
        updateSearchInput(event.target.value)
    }   

    const handleSearchLookup = ( event ) => { 
        if(event.keyCode == 13 && searchInput === ""){ 
            return 
        }

        // lookup search process
    }

    return ( 
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Lookup Recipes...."
                inputProps={{ 'aria-label': 'search'}}
                onChange={handleSearchInput}
                value={searchInput}
                onKeyDown={handleSearchLookup}/>
                
        </Search>
    )
}

export default SearchBar