const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'todo-item-completed' : 'todo-item-active'}`}>
            <button
                onClick={() => onToggle(todo.id)}
                className={`todo-checkbox ${todo.completed ? 'checkbox-checked' : 'checkbox-unchecked'}`}
            >
                {todo.completed && (
                    <svg className="checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </button>

            <span className={`todo-text ${todo.completed ? 'todo-text-completed' : ''}`}>
                {todo.title}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="delete-button"
            >
                <svg className="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default TodoItem;
