type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
}


export function TodoItem({ id, title, complete }: TodoItemProps): JSX.Element {
  return (
    <li className='flex gap-1 items-center' key={id}>
      <input id={id} type="checkbox" className='cursor-pointer peer'/>
      <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>
        {title}
      </label>
      
    </li>
    );
}