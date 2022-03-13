import ListaDeNotas from "./components/ListaDeNotas.jsx"

function App() {
  return (
    <section>
      <form>
        <input type="text" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;