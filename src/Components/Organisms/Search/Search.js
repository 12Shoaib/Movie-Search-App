import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useDispatch, useSelector } from 'react-redux'
import { FiSearch } from 'react-icons/fi'
import { searchMovies } from '../../../Redux/actions'
import { updatedResultsData } from '../../../Recoil/RecoilAtom'
import search from './search.module.css'
import Loader from '../../Molecules/Loader/Loader'

const Search = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const setResults = useSetRecoilState(updatedResultsData)
    const data = useSelector(state => state.searchData)
    const { loading, error } = data

    const handleSearchButton = () => {
        dispatch(searchMovies(query))
        setResults(data)
    }
    if (loading) {
        return <Loader />
    }
    if (error) {
        return <div className={search.error}> <h1>Something went wrong</h1> </div>
    }
    return (
        <div className={search.main_component}>
            <input placeholder='Search the movie title...' onChange={(e) => setQuery(e.target.value)} className={search.input_box} onBlur={handleSearchButton} />
            <FiSearch onClick={handleSearchButton} className={search.search_icon} />
        </div>
    )
}

export default Search