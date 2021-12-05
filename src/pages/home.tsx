/** @format */
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './home.css';
import CellList from '../components/cell-list';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <div>
      <h3 className='subtitle is-1 head'>R book</h3>
      <CellList />
    </div>
  );
}

export default Home;
