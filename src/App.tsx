import Header from './components/Header';
import { RecoilRoot } from 'recoil';
import ToggleMode from './components/ToggleMode';
import Card from './components/Card';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <ToggleMode />
      <Card />
    </RecoilRoot>
  );
}

export default App;
