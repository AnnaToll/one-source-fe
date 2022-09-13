import App from './App';
import PugAdmin from './PugAdmin';


const path = window.location.pathname

ReactDOM.render(
  <React.StrictMode>
    { path.indexOf('/pug') === -1 ? <App /> : <PugAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
);