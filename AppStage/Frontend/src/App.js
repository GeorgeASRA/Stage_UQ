/* import axios from 'axios';
import { useEffect, useState } from 'react'; */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';

function App() {

  /* const [cours, setCours] = useState([])

  useEffect(() => {
    const URL_BASE = 'http://localhost:5000'

    const test = async () => {
      const resultat = await axios.get(URL_BASE + '/listeDuCours')

      setCours(resultat.data)
      
    }

    test()
  },[]) */

  return (
    <div>
      <Navbar/>
      {/* <h1>Liste de cours</h1>
      <ul>
        {
          cours.map((cours, i) => {
            return(
              <li key={i}>
              {cours.nom}
            </li>
            )
          })
        }
      </ul> */}
    </div>
  );
}

export default App;
