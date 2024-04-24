import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Players() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/players')
            .then(response => {
                // Log API response for debugging
                console.log('API response:', response.data);
                
                // Check if the response data is an array and is not empty
                if (Array.isArray(response.data) && response.data.length > 0) {
                    // Update the state with the fetched data
                    setPlayers(response.data);
                } else {
                    console.error('API response data is empty or not an array.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div>
        <h3>Player Data</h3>
        <input type="text" id="search" placeholder="Find Player..." />
        <button id="searchButton">Search</button>
        <div id="FormTable">
            
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player ID</th>
                        <th>Player Role</th>
                        <th>Player Team</th>
                        <th>Player Matches</th>
                        <th>Player Runs</th>
                        <th>Player Wickets</th>
                        <th>Player Catches</th>
                        <th>Player Stumpings</th>
                    </tr>
                </thead>
                <tbody>
                {players.map(player => (
                        <tr key={player.PlayerID}>
                            <td>{player.PlayerName}</td>
                            <td>{player.PlayerID}</td>
                            <td>{player.PlayerRole}</td>
                            <td>{player.PlayerTeam}</td>
                            <td>{player.PlayerMatches}</td>
                            <td>{player.PlayerRuns}</td>
                            <td>{player.PlayerWickets}</td>
                            <td>{player.PlayerCatches}</td>
                            <td>{player.PlayerStumpings}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        <br/>
        <br/>
        <hr/>
        <footer>
            <p>ESPNCricInfo Reincarnated</p>
            <p>Copyright 2024. All Rights Reserved.</p>
            <a href="https://github.com/ahmedembeddedx"><img src="https://cdn-icons-png.freepik.com/512/919/919847.png?ga=GA1.1.1925836337.1709750745&" alt="" height="40"/></a>
        </footer>
    </div>
  )
}
