import "./style.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="section upper-section">
        <div className="details">
          <div className="profile-pic"></div>
          <div className="emp-short-details">
            <p className="name">John Doe</p>
            <p className="position">Front End Developer</p>
            <p className="emp-num">EN-015</p>
          </div>
        </div>
        <div className="time-in-out">
          <button className="in">IN</button>
          <button className="out">OUT</button>
        </div>
      </div>
      <div className="section middle-section">
        <h3>Leave credits:</h3>
        <div className="tile-cont">
          <div className="tile">
            <h3>Vacation Leave</h3>
            <h4>0/5</h4>
          </div>
          <div className="tile">
            <h3>Emergency Leave</h3>
            <h4>0/5</h4>
          </div>
          <div className="tile">
            <h3>Sick Leave</h3>
            <h4>0/5</h4>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="section news-section">
          <h3>News:</h3>
          <ul className="news-list">
            {new Array(10).fill().map((item, key) => (
              <li key={key}>
                <div className="news-img"></div>
                <div className="news-desc">
                  <p className="title">{`News ${key}`}</p>
                  <p className="date">01/01/2023</p>
                  <p className="info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam ut optio esse dolor eligendi! Officia ea
                    reiciendis repellat blanditiis repudiandae enim aliquam
                    doloribus minima explicabo, unde officiis eum expedita
                    laudantium!
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="section calendar-section">calendar</div>
      </div>
    </div>
  );
};
