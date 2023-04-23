import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataRequest } from '../../Redux/actions'
import { updatedResultsData } from '../../Recoil/RecoilAtom'
import home from './home.module.css'
import Card from '../../Components/Molecules/Cards/Card'
import Navbar from '../../Components/Molecules/Navbar/Navbar'
import Search from '../../Components/Organisms/Search/Search'

const Home = () => {
    const setResults = useSetRecoilState(updatedResultsData)
    const dispatch = useDispatch()
    const popularMovies = useSelector(state => state.popularMovieData)

    useEffect(() => {
        dispatch(fetchDataRequest())
    }, [dispatch])

    useEffect(() => {
        setResults(popularMovies)
    }, [popularMovies])

    return (
        <div className={home.main_component}>
            <div className={home.header}>
                <Navbar />
                <Search />
            </div>
            <Card />
        </div>
    )
}

export default Home