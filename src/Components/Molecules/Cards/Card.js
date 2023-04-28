import { useRecoilValue } from 'recoil'
import {AiTwotoneStar} from 'react-icons/ai'
import card from './card.module.css'
import { updatedResultsData } from './../../../Recoil/RecoilAtom'

const Card = () => {
    const results = useRecoilValue(updatedResultsData)
    const data = results?.data?.results || []   // Initial load data
    const data2 = results?.data?.data?.results || [] //The Search Query Data

    return (
        <>
            {/* Rendering Data on Initiatl Load */}
            {data.length > 0 && data?.map((element) => <div id={element.id} className={card.main_component}>
                <img className={card.image} src={'https://image.tmdb.org/t/p/w500/' + element.poster_path} />
                <div className={card.card_content}>
                    <h2 className={card.card_title}>{element.title}</h2>
                    <p className={card.movie_description}>{element.overview}</p>
                    <div className={card.card_bottom}>
                    <p className={card.movie_date}>{element.release_date}</p>
                    <p className={card.vote}>{element.vote_average}<AiTwotoneStar /></p>
                    </div>
                </div>
            </div>)}
            {/* The search data to be rendered */}
            {data2.length > 0 && data2?.map((element) => <div id={element.id} className={card.main_component}>
                <img className={card.image} src={'https://image.tmdb.org/t/p/w500/' + element.poster_path} />
                <div className={card.card_content}>
                    <h2 className={card.card_title}>{element.title}</h2>
                    <p className={card.movie_description}>{element.overview}</p>
                    <div className={card.card_bottom}>
                    <p className={card.movie_date}>{element.release_date}</p>
                    <p className={card.vote}>{element.vote_average}</p>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default Card