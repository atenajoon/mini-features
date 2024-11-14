import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button/Button';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click me!
      </Button>
    </>
  );
}

export default App;
