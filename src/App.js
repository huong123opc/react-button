import { Button } from "./components/Buttons";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        Button
      </Button>
    </div>
  );
}
