import { useState } from "react";
import "./awards.css";
import data from "./sample-awards.json";
import Table from "react-bootstrap/Table";

export default function Awards() {
    const [awards] = useState(data);

    return (
      <div>
        <h2 id ="h1Award">Awards</h2>
        <p id ="pAward">A list of all the points you have recieved from your awards!</p>
        <div>
            <Table striped hover bordered size="lg">
                <thead>
                    <tr>
                        <th>Award</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {awards.map((awards) => (
                        <tr>
                            <td>{awards.awardName}</td>
                            <td>{awards.points}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
      </div>
    );
}