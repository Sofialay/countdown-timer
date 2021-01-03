import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';
import mountain from '././images/pattern-hills.svg';

function App() {
  return (
    <section className="contdown-page">
      {/* falta hacer el diseño */}
      <h3 className="title">Sofía Lay cumpleañito</h3> 
      <CardContainer/>
      <img className="mountain-bg" src={mountain} alt="mountain illustration"/>
    </section>
  );
}

export default App;
