import { Circles } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <div>
        <Circles
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