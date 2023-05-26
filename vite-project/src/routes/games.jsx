import './games.css';
export default function Games() {
    return (
        <div className = "redeem">
         
        <header className = "card2">
          <h1>Ready to play? Earn some points!   Invite Link: LFG12</h1>
        </header>
    
        <div className = "game1padding">
            <img src = "images/pizza2.png"   alt ="" />
              <div className = "game2padding">
                <img src = "images/clock.png"   alt ="" />
                  <div className = "game3padding">
                    <img src = "images/math.png"   alt ="" />
                    <div className = "game4padding">
                      <img src = "images/scrabble1.png"   alt ="" />
                    </div>
                  </div>
              </div>
        </div>
        
        <header className = "game1card">
          <h1>Fractions: 5pts</h1>
            <header className = "game2card">
              <h1>Time: 5pts</h1>
                <header className = "game3card">
                  <h1>Math: 10pts</h1>
                  <header className = "game4card">
                    <h1>Scrabble: 20pts</h1>
                  </header>
                </header>
            </header>
        </header>
        
        <header className = "player1card">
          <h1>1 Player</h1>
            <header className = "player2card">
              <h1>1 Player</h1>
                <header className = "player3card">
                  <h1>1 Player</h1>
                  <header className = "player4card">
                    <h1>4 Players</h1>
                  </header>
                </header>
            </header>
        </header>

        <div className = "buttonpaddinggame">
          <div className = "Button2">
            <button >play</button> 
          </div>
          <div className = "buttonpaddinggame2">
            <div className = "Button2">
              <button >play</button>
            </div>
            <div className = "buttonpaddinggame3">
              <div className = "Button2">
                <button >play</button>
              </div>
              <div className = "buttonpaddinggame4">
                <div className = "Button2">
                  <button >play</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
        );
}