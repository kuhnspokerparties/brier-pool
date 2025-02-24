import React, { useState, useEffect } from "react";
import axios from "axios";

const BrierLeaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Placeholder for API or scraping function
        const response = await axios.get("/api/getCurlingStats"); // Replace with actual API
        setPlayers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Brier Fantasy Draft Leaderboard</h2>
      {loading ? (
        <p>Loading live stats...</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Rank</th>
              <th className="border px-4 py-2">Participant</th>
              <th className="border px-4 py-2">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{player.name}</td>
                <td className="border px-4 py-2">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BrierLeaderboard;
