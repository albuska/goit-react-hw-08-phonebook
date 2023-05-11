import homepageImage from '../images/pngimg.com - welcome_PNG32.png'; 

const styles = {
    title: {
        color: '#ffffff',
    }
}

const Home = () => {
    return (
        <>
            <h1 style={styles.title}>Welcome to your Phonebook 😉</h1>
            <img src={ homepageImage} alt='HomepageImg'/>
        </>
    )
}

export default Home; 