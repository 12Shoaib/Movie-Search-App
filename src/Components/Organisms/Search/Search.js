import { useState  } from 'react'
import { useSetRecoilState } from 'recoil'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '../../../Redux/actions'
import {FiSearch} from 'react-icons/fi'
import search from './search.module.css'
import {updatedResultsData} from '../../../Recoil/RecoilAtom'

const Search = () => {
    const [query , setQuery] = useState('')
    const dispatch = useDispatch()
    const setResults = useSetRecoilState(updatedResultsData)
    const searchResult = useSelector(state => state.searchData)

    const handleSearchButton = () => {
        dispatch(searchMovies(query)) 
        setResults(searchResult)      
    }
    

    return(
        <div className={search.main_component}>
            <input placeholder='Search the movie title...' onChange={(e) => setQuery(e.target.value)} className={search.input_box} onBlur={handleSearchButton} />
            <FiSearch onClick={handleSearchButton} className={search.search_icon} />
        </div>
    )
}

export default Search