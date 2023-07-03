import { useEffect, useState } from 'react';
import { getAllPlans, addPlan, editPlan, deletPlan } from './FetchPlans';
import './App.css';
import { MyPlans } from './MyPlans';

function App() {

  const [myPlan, setPlan] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [planId, setPlanId] = useState("")

  useEffect(() => {
    getAllPlans(setPlan)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setPlanId(_id)
  }

  return (
    <div className='App' >
      <h1>ПЛАН ДЕЛ НА НЕДЕЛЮ</h1>
      <input
        type="text"
        placeholder="Введите день недели и список дел"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        disabled={!title}
        onClick=
        {editing ? () => editPlan(planId, title, setTitle, setPlan, setEditing) : () =>
          addPlan(title, setTitle, setPlan)}>
        {editing ? "Изменить" : "Добавить"}
      </button>

      {myPlan.map((plan) => <MyPlans text={plan.title} key={plan._id}
        updatingInInput={() => updatingInInput(plan._id, plan.title)}
        deletPlan={() => deletPlan(plan._id, setPlan)} />
      )}
    </div>
  );
}

export default App;
