import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button/Button';
import ButtonGroup from './ui/ButtonGroup/ButtonGroup';
import Checkbox from './ui/Checkbox/Checkbox';

function App() {
  return (
    <>
      <GlobalStyles />
      <Button onClick={() => console.log('clicked')}>Click me!</Button>
      <ButtonGroup>
        <Button variation="danger" onClick={() => console.log('deleted')}>
          Delete
        </Button>
        <Button variation="secondary" onClick={() => console.log('canceled')}>
          Cancel
        </Button>
      </ButtonGroup>
      <Checkbox>I am not a robot</Checkbox>
    </>
  );
}

export default App;
