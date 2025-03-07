const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={`flex items-center p-4 ${todo.completed ? 'bg-slate-700/40' : 'bg-slate-700'} 
                        rounded-lg transition-all duration-300 group`}>
            <button
                onClick={() => onToggle(todo.id)}
                className={`inline-flex items-center justify-center w-6 h-6 mr-4 
                          ${todo.completed ? 'bg-blue-600' : 'border border-blue-500'} 
                          rounded-full cursor-pointer hover:bg-blue-500 transition-colors`}
            >
                {todo.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </button>

            <span className={`flex-1 ${todo.completed ? 'line-through text-slate-400' : 'text-white'}`}>
                {todo.title}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="ml-2 text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default TodoItem;
