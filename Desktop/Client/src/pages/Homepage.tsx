import Navbar from "../components/Navbar";
import "../styling/Homepage.css";
import calenderImg from "../assets/img/Vector.svg";
import Wordcloud from "../components/Wordcloud";
import Popup from "../components/Popup";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <Navbar />
      <section className="home-wrapper">
        <div className="home-filer">
          <div className="home-carlendar">
            <a href="#">
              <img src={calenderImg} height={45} width={45}></img>
            </a>
          </div>
          <a href="#">
            <div className="home-filter1">
              <h3 className="UP-wc">UP Word Cloud</h3>
            </div>
          </a>
          <a href="#">
            <div className="home-filter2">
              <h3 className="MY-wc">My Word Cloud</h3>
            </div>
          </a>
        </div>
        <div className="home-word-cloud">
          <Wordcloud/>
        </div>
      </section>
      <Popup/>
    </div>
  );
};

export default Homepage;
