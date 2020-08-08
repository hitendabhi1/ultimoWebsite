import React, { Component } from "react";

// css
import "../../style/homePage/gamingLeague.scss";

// component
import Video from "./videoComponent";

// icons
import GamingLogo from "../../assets/homePage/isolation-logo.svg";

class GamingLeague extends Component {
  state = {};
  render() {
    return (
      <div className='gaming'>
        <div className='gaming_content'>
          <img
            className='gaming_content-icon'
            src={GamingLogo}
            alt='icon'></img>
          <h1 className='gaming_content-title'>
            THE ULTIMO AMATEUR GAMING LEAGUE
          </h1>
          <p className='gaming_content-text'>
            The UAGL is ULTIMO GG's fiercely contested league where gamers
            battle each week, vying to climb the leader boards for their chance
            to win huge prizes across a range of games, bragging rights and
            fight for a position in ULTIMO GG's official esports team. Splitting
            into divisions ensures a level playing field, with higher divisions
            offering tougher competition and larger prizes. Each league will be
            sponsored by big name brands and finals will be broadcast on the
            platform and hosted by gaming personalities and key esports players.
            The UAGL is exclusively hosted on ULTIMO GG's game-changing online
            esports tournament platform.
          </p>
        </div>
      </div>
    );
  }
}

export default GamingLeague;
