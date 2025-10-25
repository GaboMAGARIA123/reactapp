export const TodoList = ({ title, items }) => {
    return (
        <div className="todo-list">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};