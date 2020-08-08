import React, { Component } from "react";
import { Link } from "react-router-dom";
// component
import TournamentComponent from "./tournamentComponent";

// css
import "../../style/homePage/tournamentSection.scss";

// images
import WarzoneFeature from "../../assets/Tournaments/warzone.jpeg";
import Rocket from "../../assets/Tournaments/rocket.jpg";
import FortniteNew from "../../assets/Tournaments/fortnite.jpeg";
import Fortnite from "../../assets/Tournaments/fortnite.png";
import Fifa from "../../assets/Tournaments/fifa.png";
import Warzone from "../../assets/Tournaments/warzone.png";
import WarefairW from "../../assets/Tournaments/WarefareWednesday.png";
import CupLogo from "../../assets/Nav/Tournaments.svg";

class TournamentSection extends Component {
  state = {
    tournament: [
      {
        image: WarefairW,
        date: "Wednesday",
        time: "01:00:00",
        prize: "2000CP",
        prizeColor: "#5FF5F9",
        link: "https://challonge.com/communities/UltimoGG/tournaments",
      },
      {
        image: WarzoneFeature,
        date: "14/08/20",
        time: "01:00:00",
        prize: "£90",
        prizeColor: "#5FF5F9",
        link:
          "https://www.toornament.com/en_GB/tournaments/3788523690568450048/information",
      },
      {
        image: Rocket,
        date: "15/08/20",
        time: "01:00:00",
        prize: "£50",
        prizeColor: "#9005E3",
        link:
          "https://www.toornament.com/en_GB/tournaments/3787723761044373504/information",
      },
      {
        image: FortniteNew,
        date: "28/08/20",
        time: "01:00:00",
        prize: "£50",
        prizeColor: "#9005E3",
        link:
          "https://www.toornament.com/en_GB/tournaments/3787726097955209216/information",
      },
      {
        image: Fortnite,
        date: "03/05/20",
        time: "01:00:00",
        prize: "£600",
        prizeColor: "#5FF5F9",
        closed: true,
        gradient:
          "linear-gradient( rgba(0, 127, 255, 0.6), rgba(18, 239, 44, 0.6) )",
      },
      {
        image: Fifa,
        date: "02/05/20",
        time: "00:00:00",
        prize: "£1600",
        prizeColor: "#5FF5F9",
        closed: true,
        gradient:
          "linear-gradient( rgba(252, 126, 0, 0.6), rgba(248, 191, 0, 0.6) )",
      },
      {
        image: Warzone,
        date: "18/04/20",
        time: "00:00:00",
        prize: "£700",
        prizeColor: "#9005E3",
        gradient:
          "linear-gradient( rgba(0, 127, 255, 0.7), rgba(179, 18, 239, 0.75))",
        closed: true,
      },
    ],
  };
  render() {
    return (
      <div className='tournament'>
        <div className='tournament_background'></div>
        <h1 className='tournament_title'>TOURNAMENTS</h1>

        <div className='tournament_content'>
          {this.state.tournament.map((tournament, index) => (
            <div className='container' key={index}>
              <TournamentComponent
                image={tournament.image}
                date={tournament.date}
                time={tournament.time}
                prize={tournament.prize}
                prizeColor={tournament.prizeColor}
                gradient={tournament.gradient}
                closed={tournament.closed}
                link={tournament.link}
              />
            </div>
          ))}
        </div>

        <div className='tournament_seemore'>
          <Link to='./tournaments'>
            <span className='title'>SEE MORE TOURNAMENTS</span>
          </Link>
          <img className='cup' src={CupLogo} alt='torn' />
          <span className='heading'>TOURNAMENTS</span>
        </div>
      </div>
    );
  }
}

export default TournamentSection;
