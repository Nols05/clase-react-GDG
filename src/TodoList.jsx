import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className="text-center py-8 text-slate-400">
                No tasks yet. Add one above!
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
            <div className="mt-6 text-center text-slate-400 text-sm border-t border-slate-700 pt-4">
                {todos.filter(t => !t.completed).length} items remaining
            </div>
        </div>
    );
};

export default TodoList;
