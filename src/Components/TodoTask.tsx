import React from "react"
import { ITask } from "../interfaces"

interface Props {
    task: ITask;
    completeTask(taskNameToComplete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadLine}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
            {task.taskName}
        </div>
    )
}

export default TodoTask