import './assets/css/App.css';
import AppButton from './components/AppButton/AppButton';
import AppDropdown from './components/AppDropdown/AppDropdown';

let dummy = [
  {
    label: 'Option 1',
    value: 'option1'
  },
  {
    label: 'Option 2',
    value: 'option2'
  },
  {
    label: 'Option 3',
    value: 'option3'
  },
]

function App() {
  return (
    <div className="App">
      Test
      <AppButton
        label="Click me"
      />
      <AppDropdown
        options={dummy}
      />
    </div>
  );
}

export default App;
