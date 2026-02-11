import { useState } from 'react'

export default function List() {
    let [newtask, Setnewtask] = useState("");
    let [tasks, Settasks] = useState([]);

    const addTask = () => {
        if (newtask.trim() !== "") {
            const now = new Date();
            const options = { weekday: 'short', hour: '2-digit', minute: '2-digit' };
            const timestamp = now.toLocaleDateString('en-US', options);

            const newTaskObj = {
                id: Date.now(),
                text: newtask,
                time: timestamp
            };

            Settasks([...tasks, newTaskObj]);
            Setnewtask("");
        }
    }

    const showTasks = () => (
        tasks.map((task) => (
            <div className="cur-task" key={task.id}>
                <div className="task-content">
                    <li className="task-text">{task.text}</li>
                    <span className="task-time">{task.time}</span>
                </div>
                <p className="delete-btn" onClick={() => deletTask(task.id)}>❌</p>
            </div>
        ))
    )

    const deletTask = (idToDelete) => {
        const newtasks = tasks.filter((task) => task.id !== idToDelete)
        Settasks(newtasks);
    }

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div className="input-group">
                <input type="text"
                    value={newtask}
                    placeholder='Enter your task...'
                    onChange={(e) => Setnewtask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()} />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="total-tasks">
                {tasks.length ? showTasks() : (
                    <div className="empty-state">
                        <p>No tasks yet! ✨</p>
                        <span>Start being productive today.</span>
                    </div>
                )}
            </div>
        </div>
    )
}