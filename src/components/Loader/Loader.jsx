import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.load}>
      <MagnifyingGlass />
    </div>
  );
};
