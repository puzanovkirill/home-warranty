const {
  default: { Button },
} = await import('workerApp/Button');
const {
  default: { Button: UButton },
} = await import('userApp/Button');

console.log(UButton);

function App() {
  return (
    <div className="App">
      <h1>Host App</h1>
      <Button />
      <UButton />
    </div>
  );
}

export default App;
