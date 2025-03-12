import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className="empty-message">
                No tasks yet. Add one above!
            </div>
        );
    }

    return (
        <div className="todos-container">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
            <div className="todo-stats">
                {todos.filter(t => !t.completed).length} items remaining
            </div>
        </div>
    );
};

export default TodoList;
