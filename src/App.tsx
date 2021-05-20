import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from "./interfaces"

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task"){
      setTask(event.target.value)
    }
    if (event.target.name === "deadline"){
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadLine: deadline
    }
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
    console.log(todoList)
  }

  const completeTask = (taskNameToComplete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToComplete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
          type="text" 
          value={task}
          placeholder="Task..." 
          name="task" 
          onChange={handleChange} />
          <input type="number" 
          name="deadline"
          value={deadline}
          placeholder="Deadline (in Days)..." 
          onChange={handleChange} />
        </div>
        <button onClick={() => addTask()}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
