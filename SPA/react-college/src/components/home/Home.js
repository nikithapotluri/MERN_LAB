import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="banner">
        <h1>Welcome to PSP College</h1>
      </div>

      <div className="main-section">
        <div className="container">
          <div className="event">
            <h2 className="heading">Recent Events</h2>
            <div>
              <marquee behavior="" direction="up" scrollAmount="5" style={{ height: "340px" }}>
                <ul>
                  <li><i>01-Jan-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>10-Feb-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>28-Mar-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>01-Apr-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>17-May-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>15-Jun-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>30-Oct-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                  <li><i>21-Nov-2024</i> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, at!</li>
                </ul>
              </marquee>
            </div>
          </div>
        </div>

        <div className="event calendar">
          <h2 className="heading">College Event Calendar</h2>
          <div className="calendar-content">
            {["15-May-2024", "20-May-2024", "25-May-2024"].map((date, index) => (
              <div className="event-item" key={index}>
                <div className="event-date">{date}</div>
                <div className="event-name">{["Annual Sports Meet", "Cultural Festival", "Alumni Meet"][index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="achievements">
        {[
          {
            img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/isro-chief-1641997984.jpeg",
            name: "Dr. Subhash",
            title: "The Chairman",
            description: "Chairman of PSP College. Dr. Subhash has been leading the college with a focus on quality education and holistic development of students."
          },
          {
            img: "https://tse1.mm.bing.net/th?id=OIP.WOjqosjsadMffouqwUlDLgAAAA&pid=Api&P=0&h=180",
            description: "Receiving NAAC A+ for the past 3 years."
          }
        ].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt="Chairman Image" className="card-img" />
            <div className="card-content">
              {card.name && <h3>{card.name}</h3>}
              {card.title && <h4>{card.title}</h4>}
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="titles">
        <div className="titles-container">
          <h2 className="subhead">Top Placement</h2>
          <marquee className="placement" direction="left" scrollAmount="7">
            {[
              "https://tse1.mm.bing.net/th?id=OIP.Ti437U7AjYAQtpewkmR9VwHaEK&pid=Api&P=0&h=180",
              "https://tse4.mm.bing.net/th?id=OIP.3meF7mC6eHnDmied3AsDTwHaFj&pid=Api&P=0&h=180",
              "https://tse2.mm.bing.net/th?id=OIP.idB_-eo5pNgOG8Ker3jEpgHaEK&pid=Api&P=0&h=180"
            ].map((imgSrc, index) => (
              <img src={imgSrc} alt="Placement" key={index} />
            ))}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Home;