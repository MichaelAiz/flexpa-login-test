import { FlexpaLogin } from "@flexpa/login"
function App() {
  return (
    <div className="App">
      <FlexpaLogin sandbox>
        <header className="text-3xl font-bold">
          Health plan verified
        </header>
      </FlexpaLogin>
    </div>
  );
}

export default App;
