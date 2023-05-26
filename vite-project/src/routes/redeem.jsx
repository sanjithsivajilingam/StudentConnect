import './redeem.css';

export default function Redeem() {
    return (
      <div className = "redeem">
         
          <header className = "card">
            <h1>Welcome. You have 270 Points!</h1>
          </header>
          
          <div className = "pencilpadding">
              <img src = "images/pencil.png"   alt ="" />
                <div className = "snackpadding">
                  <img src = "images/snack.png"   alt ="" />
                    <div className = "bouncypadding">
                      <img src = "images/bouncyball.png"   alt ="" />
                      <div className = "boxpadding">
                        <img src = "images/mbox3.png"   alt ="" />
                      </div>
                    </div>
                </div>
          </div>
          
          <header className = "pencilcard">
            <h1>Pencil:100pts</h1>
              <header className = "snackcard">
                <h1>Snack:300pts</h1>
                  <header className = "bouncycard">
                    <h1>Bouncy Ball:700pts</h1>
                    <header className = "boxcard">
                      <h1>Mystery Box:1000pts</h1>
                    </header>
                  </header>
              </header>
          </header>
          
          <div className = "buttonpadding">
            <div className = "Button">
              <button >Redeem</button> 
            </div>
            <div className = "buttonpadding2">
              <div className = "Button">
                <button >Redeem</button>
              </div>
              <div className = "buttonpadding3">
                <div className = "Button">
                  <button >Redeem</button>
                </div>
                <div className = "buttonpadding4">
                  <div className = "Button">
                    <button >Redeem</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    );
}