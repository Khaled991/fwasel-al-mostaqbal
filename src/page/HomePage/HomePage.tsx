import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-image-container">
        <img
          src="src/assets/Img/homePageImage.svg"
          alt="homePageImage"
          className="home-page-image"
        />
      </div>

      <div class="css-typing">
        <p>
          لم يكن من السهل ادارة{' '}
          <span className="special-text-color">نقاط البيع</span>
        </p>
        <p>
          <span className="special-text-color">والمحاسبة</span> ببرنامج واحد
          ولكن
        </p>
        <p>
          يمكنك الان <span className="special-text-color">ببرنامجنا</span>
        </p>
      </div>
      {/* <div className="home-page-chat-button-container">
        <img
          src="src/assets/Icons/chat.svg"
          alt="chatIcon"
          className="home-page-chat-button"
        />
      </div> */}
    </div>
  );
};

export default HomePage;
