import'./home.css'
export default function Home() {

  return (
      <div className = "homepage">
        <div className = "home">
        <h2>Home Page</h2>
        </div>

        <div className = "topics">
        <h2>Topics covered today</h2>
        <h2>Math</h2>
        <h3> - Introduction to algebra</h3>
        <h2>English</h2>
        <h3> - Introduction to essay writing</h3>
        </div>

        <div className = "announcements">
        <h2>Announcements</h2>
        <h3> - Map of Canada assignment due Friday</h3>
        <h3> - Science quiz next Monday</h3>
        </div>

        <div className = "homework">
        <h2>Homework from this week</h2>
        <h3>Math</h3>
        <h3>English</h3>
        </div>
      </div>
    );
}