import phoneBookImage from '../images/phonebook.png'; 

const styles = {
    box: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
         color: '#ffffff',
         display: 'flex', 
        alignItems: 'center',
     },
     text: {
         width: '400px',
         lineHeight: '2',
         color: '#ffffff',
         textAlign: 'center',
    },
    img: {
        width: '100px',
     }
}

const Home = () => {
    return (
        <div style={styles.box}>
            <h1 style={styles.title}>Welcome to your Phonebook! </h1>
            <p style={styles.text}>Congratulations! <br/> I am your Assistant! <br/> Register and you will get access to your personal contact book. There you can store all your contacts in one place and always have them at hand. Good luck</p>
            <img  style={styles.img} src={ phoneBookImage} alt="Phonebook"/>
        </div>
    )
}

export default Home; 