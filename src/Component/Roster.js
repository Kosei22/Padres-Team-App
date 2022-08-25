import React from "react";
import classes from "./Roster.css";
import PlayerDetail from "./PlayerDetail";


export default class Roster extends React.Component {

    state = {
        loading: true,
        players: [],
        value: "",
        link: "",
        position: "",
        star: "☆"
    };

    async componentDidMount() {
        const url = "https://statsapi.mlb.com/api/v1/teams/135/roster";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ players: data.roster, loading: false });
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }

        return (
            <>
                <input
                    type="text"
                    placeholder="Serch Player..."
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }
                    } />

                <ul className="playerCard">
                    {this.state.players.filter((player) => {
                        if (this.state.value == "") {
                            return player;
                        } else if (player.person.fullName.toLowerCase().includes(this.state.value.toLowerCase())) {
                            return player;
                        }
                    }).map((player) => (

                        <li className="playerInfo" key={player.person.id}>
                            <button className="showPlayerButton" onClick={() => {
                                this.setState({ link: `https://statsapi.mlb.com${player.person.link}` })
                            }}>
                                <img src="https://www.si.com/.image/t_share/MTcxMzY2ODcxODAxNTM4MjI3/padres.jpg" width="80px" />
                                <h3>{player.person.fullName}</h3>
                                <p>#{player.jerseyNumber}</p>
                                <p>{player.position.name}</p>
                            </button>
                            <button className="favoriteButton" onClick={() => {
                                this.setState({ star: "★" })
                            }}>{this.state.star}</button>
                        </li>
                    ))
                    }
                    {this.state.link && <PlayerDetail link={this.state.link} />}
                </ul>
            </>
        );
    }
}

