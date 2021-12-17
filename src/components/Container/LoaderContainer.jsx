import Loader from 'react-loader-spinner';

import s from './LoaderContainer.module.css';

export default function LoaderContainer() {
  return (
    <div className={s.loaderContainer}>
      <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000}
      />
    </div>
  );
}