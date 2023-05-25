"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, checked: boolean) => void;
}


export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps): JSX.Element {
  return (
    <li className='flex gap-1 items-center' key={id}>
      <input 
        id={id}
        type="checkbox"
        defaultChecked={complete}
        onChange={ e => toggleTodo( id, e.target.checked ) }
        className='cursor-pointer peer'/>
      <label 
        htmlFor={id}
        className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
      >
        {title}
      </label>
      
    </li>
    );
}