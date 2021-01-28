import { useState } from "react";


const users = [
  {
    name: 'Sarah', 
    age: 20
  },
  {
    name: 'ALex',
    age: 24,
  },
  {
    name: 'George',
    age:29
  },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [results, setResults] = useState<{name: string, age: number} | undefined>();
  const onClick = () => {
    setResults(users.find(user => user.name === name))
  }

  console.log(results?.name, results?.age)

  return <div>
    User Search
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
      {results?.name}
      {results?.age}
    </div>
  </div>
}

export default UserSearch