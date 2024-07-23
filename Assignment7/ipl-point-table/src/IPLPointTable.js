import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        // Sort teams by NRR in ascending order
        const sortedTeams = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedTeams);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>IPL 2022 Points Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;