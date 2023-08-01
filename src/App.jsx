import "./App.css";

function App() {
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h3 id="my-tinerary">My Tinerary</h3>
          </div>
          <div className="col text-center">
            <nav>
              <a href="./index.html" id="home" className="me-4 text-black">
                Home
              </a>
              <a href="./cities.html" id="cities" className="me-4 text-black">
                Cities
              </a>
              <button
                type="button"
                id="login"
                class="btn btn-primary px-4 mb-1"
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div></div>
          <div></div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
