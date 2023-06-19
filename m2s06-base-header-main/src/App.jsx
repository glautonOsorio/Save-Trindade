import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List';

function App() {
  const menu = [
    {
      id: 1,
      label: 'Produtos',
      path: '/produtos',
    },
    {
      id: 2,
      label: 'Contatos',
      path: '/contatos',
    },
  ];

  return (
    <>
      <Header menu={menu}/>
      <List/>
    </>
  )
}

export default App
