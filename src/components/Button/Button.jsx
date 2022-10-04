import css from './Button.module.css';
import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <div className={css.boxButton}>
      <button className={css.Button} type="button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  button: PropTypes.string,
};
