interface ButtomProps {
  title: string;
}

function Button(props: ButtomProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
      <Button title="Hello World"/>
    </div>
  )
}

export default App
