import { Suspense } from 'react';
import Header from './components/Header';
import { RecoilRoot } from 'recoil';
import ToggleMode from './components/ToggleMode';
import Card from './components/Card';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading.</div>}>
        <Header />
        <ToggleMode />
        <Card />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
