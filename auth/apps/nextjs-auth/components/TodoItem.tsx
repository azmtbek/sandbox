type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
  delete: (id: string) => void;
  update: (id: string) => void;
};

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className="flex gap-3 w-full" key={props.id}>
      <input type="checkbox" checked={props.completed} onChange={() => {}} />
      <div className="flex-1 text-lg">
        <span>{props.text}</span>
      </div>
      <button onClick={() => props.update(props.id)}>
        <i className="fa-solid fa-pencil"></i>
      </button>
      <button onClick={() => props.delete(props.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
