import { Circles } from 'react-loader-spinner';

const styles = {
  loader: {
    alignSelf: 'center',
  },
  box: {
    marginTop: '20px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
};


export const Loader = () => {
    return (
      <div style={styles.box}>
        <Circles
          style={styles.loader}
          height="40"
          width="40"
          color="#00d4ff"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
}