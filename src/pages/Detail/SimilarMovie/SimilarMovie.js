import { useState, useEffect } from 'react';
import styles from './SimilarMovie.module.scss';
import SimilarMovieImage from './SimilarMovieImage';

function SimilarMovie(props) {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch(`/movie?genre-name=${props.genre_name}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieData(data.Movie);
      });
  }, [props.genre_name]);
  return (
    <>
      <div className={styles.SimilarMovieTilte}>비슷한 작품</div>
      <div className={styles.movieSection}>
        {movieData.map(movieData => {
          return (
            <SimilarMovieImage
              key={movieData.id}
              id={movieData.id}
              imgUrl={'http://' + movieData.poster_url}
              name={movieData.name}
              release_date={movieData.release_date}
              country={movieData.country}
              genre={movieData.genre}
            />
          );
        })}
      </div>
    </>
  );
}
export default SimilarMovie;
