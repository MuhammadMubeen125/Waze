import './HeroStyles.css';
import Homeimage from '../assets/12.jpg';

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.Homeimage} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a
            href={props.url}
            className={props.btnClass}
            onClick={props.clicked}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
