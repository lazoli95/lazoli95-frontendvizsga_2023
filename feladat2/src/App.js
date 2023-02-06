import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <div className="title">
        <h1>Az antikvárium története</h1>

        <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre. </p>
        <p>A jelenlegi épület 2019-ben lett felújítva.</p>
      </div>

      <div className="authors">
        <h2>Hírességek, akik itt jártak</h2>

        <h3>Ady Endre</h3>

        <p>Többször is kikölcsönözte Deák Ferenc műveit</p>

        <a href="https://hu.wikipedia.org/wiki/Ady_Endre">Wikipédia: https://hu.wikipedia.org/wiki/Ady_Endre</a>

        <h3>Móra Ferenc</h3>
        <p>Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>

        <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc">Wikipédia: https://hu.wikipedia.org/wiki/Móra_Ferenc</a>

        <h3>Névtelen adományozó</h3>

        <p>1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
      </div>


      
      <div className="form">
        <h2>Új híresség jelzése</h2>

        <span>Wikipédia link:</span>
        <input type="text" id="wikipedia" placeholder="Wikipédia link..." />

        <span>Leírás</span>
        <textarea id="text" cols="30" rows="10" placeholder="Adj hozzá új szerzőt..."></textarea>

        <button class="btn btn-primary">Elküld</button>
      </div>

    </div>
  );
}

export default App;
