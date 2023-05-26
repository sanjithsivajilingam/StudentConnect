import Table from "react-bootstrap/Table";

export default function Points() {
    return (
        <div className="points">
        <Table striped hover bordered size="lg">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                    <td>David</td>
                    <td>4A</td>
                    <td>270</td>
                </tr> 
            </tbody>
        </Table>
        </div>
    );
}