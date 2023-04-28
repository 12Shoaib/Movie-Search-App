import about from './about.module.css'
import Navbar from '../../Components/Molecules/Navbar/Navbar'
import Search from '../../Components/Organisms/Search/Search'

const About = () => {
    return (
        <div className={about.container}>
            <div className={about.header}>
                <Navbar />
                <Search />
            </div>
            <h1>This is an movies search engine you can any movie here..!</h1>
            <h2>About Movies</h2>
            <p className={about.content}>Movies have been a part of human culture for over a century, and they continue to be a popular form of entertainment today. A movie is a form of visual storytelling that captures our attention and transports us to another world, allowing us to experience emotions, ideas, and cultures that we may not encounter in our everyday lives. Whether we watch them alone, with friends or family, or in a crowded theater, movies have the power to unite and move us.
                The history of cinema is a rich and varied one, with the first films being made in the late 19th century. These early films were short and silent, and they often featured simple stories and static camera shots. However, as technology advanced and filmmakers began to experiment with new techniques, the movies evolved into a more complex and dynamic art form. Today, movies are made in every genre imaginable, from drama and comedy to action and horror, and they are produced in countries all over the world.
                One of the most remarkable things about movies is the way they can inspire and influence us. Many of us can remember a movie that changed our lives or taught us an important lesson. For some, it might have been a classic like The Godfather, which taught us about family loyalty and the cost of power. For others, it might have been a blockbuster like Star Wars, which showed us the power of imagination and the hero’s journey. Movies have the ability to make us think, feel, and see the world in a new way.
                Another reason movies are so beloved is the way they bring people together. Whether it’s a family night at the movies, a date with a loved one, or a night out with friends, watching a movie is an experience that we can share with others. The shared experience of watching a film can be a bonding moment, allowing us to laugh, cry, and connect over a story. Even if we don’t know the people around us, the common ground of enjoying a good movie can create a sense of community and belonging.
                Movies also offer a form of escapism that can be beneficial to our mental health. Whether we’re dealing with stress, anxiety, or boredom, watching a movie can help us forget our troubles for a while and immerse ourselves in a different world. It’s no surprise that movies are often used as a form of therapy or relaxation, as they provide an easy and accessible way to de-stress and unwind.
                However, movies are not without their criticisms. Some argue that the portrayal of certain groups in films can perpetuate harmful stereotypes or contribute to social inequality. Others criticize the movie industry for its lack of diversity, both in front of and behind the camera. While these criticisms are valid, they do not diminish the impact that movies can have on our lives.
                In conclusion, movies are a beloved form of entertainment that have the power to unite, inspire, and move us. They allow us to experience different cultures, ideas, and emotions, and they provide a way for us to connect with others over a shared story. Whether we’re watching a classic film or a new blockbuster, movies have the ability to entertain, educate, and inspire us.</p>

        </div>
    )
}

export default About