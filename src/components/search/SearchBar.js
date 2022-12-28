
import React, { useState, useEffect } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchDesign"

import SearchIcon from '@mui/icons-material/Search'
import SearchDialog from './SearchDialog'
import ExploreFeedApi from '../../session/ExploreFeedApi'

const SearchBar = ({ authStatus }) => { 

    const feedApi = new ExploreFeedApi() 

    const [ searchResult, setSearchResult ] = useState([])
    const [ searching, setSearching ] = useState(false)
    const [ searchedType, setSearchedType ] = useState("")
    const [ searched, setSearched ] = useState(false)

    const [ searchInput, updateSearchInput ] = useState("")
    const [ searchedStatus, setSearchedStatus ] = useState(false)

    const handleSearchDialog = () => { 
        setSearchedStatus(!searchedStatus)
    }

    const handleSearchInput = ( event ) => { 
        updateSearchInput(event.target.value)
    }   

    const _lookupHandler = async ( interestName ) => { 

        setSearching(true)
        const feedData = await feedApi.lookupRecipeByInterest(interestName)
        if(feedData){ 

            setSearching(false)
            searchResult(feedData)

        }

    }

    const handleSearchLookup = async ( event ) => { 

        if(event.keyCode == 13 && !searchInput == ""){ 
             // lookup search process

            handleSearchDialog() 
            setSearching(true)

            const searchData = await feedApi.genericSearch(searchInput)
            setSearched(true)
            setSearching(false)
            

            if(searchData && searchData.recipes){ 
                setSearchResult(searchData.recipes)
                setSearchedType("recipes")

            }

            if(searchData && searchData.users){ 
                setSearchResult(searchData.users)
                setSearchedType("users")
            }


        }

    }

    useEffect(() => { 

    }, [ searchedStatus, searching, searched ])

    //console.log('SearchData', searchResult)
    //console.log('Searched', searched)

    return ( 

        <div>

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

            <SearchDialog
                status={searchedStatus}
                handler={handleSearchDialog}
                searchData={searchResult}
                searchValue={searchInput}
                searchedType={searchedType}
                searching={searching}
                searched={searched}
                authStatus={authStatus}
                lookupHandler={_lookupHandler}/>


        </div> 
    )
}

export default SearchBar