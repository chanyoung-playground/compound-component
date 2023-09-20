import Header from './components/Header';
import { RecoilRoot } from 'recoil';
import ToggleMode from './components/ToggleMode';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <ToggleMode />
    </RecoilRoot>
  );
}

export default App;
