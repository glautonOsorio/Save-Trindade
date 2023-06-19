
const List = () => {
  const fruits = [
    {
      id: 1,
      name: 'Banana',
      value: Math.random(),
    },
    {
      id: 2,
      name: 'Maça',
      value: Math.random(),
    },
    {
      id: 3,
      name: 'Morango',
      value: Math.random(),
    },
  ];
  const techs = [
    {
      id: 1,
      name: 'JavaScript',
      value: Math.random(),
    },
    {
      id: 2,
      name: 'TypeScipt',
      value: Math.random(),
    },
    {
      id: 3,
      name: 'Bootstrap',
      value: Math.random(),
    },
  ];
  const cars = [
    {
      id: 1,
      name: 'Palio',
      value: Math.random(),
    },
    {
      id: 2,
      name: 'Uno',
      value: Math.random(),
    },
    {
      id: 3,
      name: 'Gol',
      value: Math.random(),
    },
  ];

  const lists = [
    {
      id: 1,
      title: 'Frutas',
      data: fruits,
    },
    {
      id: 2,
      title: 'Tecnologia',
      data: techs,
    },
    {
      id: 3,
      title: 'Carros',
      data: cars,
    },
  ];

  const renderItem = (item) => {
    return(
      <li key={item.id}>
        <span>{item.name}</span>
        <span>R$ {item.value.toFixed(2)}</span>
      </li>
    )
  }

  const renderList = (list) => {
    return(
      <div key={list.id}>
        <h2>{list.title}</h2>
        <ul>
          {list.data.map(renderItem)}
        </ul>
      </div>
    )
  }

  return(
    <>
      {lists.map(renderList)}
    </>
  )
}

export default List;