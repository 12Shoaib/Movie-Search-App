import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataRequest } from '../../Redux/actions'
import { updatedResultsData } from '../../Recoil/RecoilAtom'
import home from './home.module.css'
import Loader from '../../Components/Molecules/Loader/Loader'
import Card from '../../Components/Molecules/Cards/Card'
import Navbar from '../../Components/Molecules/Navbar/Navbar'
import Search from '../../Components/Organisms/Search/Search'

const Home = () => {
    const setResults = useSetRecoilState(updatedResultsData)
    const dispatch = useDispatch()
    const data = useSelector(state => state.popularMovieData)
    const { loading, error } = data

    useEffect(() => {
        dispatch(fetchDataRequest())
    }, [dispatch])

    useEffect(() => {
        setResults(data)
    }, [data])

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <div className={home.error}> <h1>Something went wrong</h1> </div>
    }
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