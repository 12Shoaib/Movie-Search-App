import loader from './loader.module.css'
const data=[1,2,3,4,5,6,7,8]
const Loader =() => {
    return(
        <div className={loader.container}>
        {data?.map((element) => <div className={loader.main_component}>
                <p className={loader.image}>  </p>
                <div className={loader.card_content}>
                    <h2 className={loader.card_title}></h2>
                    <p className={loader.movie_description}></p>
                    <div className={loader.card_bottom}>
                    <p className={loader.movie_date}></p>
                    <p className={loader.vote}></p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Loader