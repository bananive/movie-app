import './App.css';
import moviesarr from './movies';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';

function App() {
  const moviesList = moviesarr.map((el) => {
    return <Movie movieobj={el} />
  });

  return (
    <div className="wrapper">
      <Header/>
      <section className="content">
        <div className="row">
          {moviesList}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
