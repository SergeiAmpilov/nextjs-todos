import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "./components/TodoItem";


async function getTodos() {
  return prisma.todo.findMany();
  // prisma.todo.create({ data: { title: "compile on server",  complete: false }})
}

async function toggleTodo(id: string, checked: boolean) {
  "use server"
  console.log(id, checked);

  await prisma.todo.update({
    where: { id },
    data: {
      complete: checked
    }
  });
}
  



export default async function Home() {

    const todos = await getTodos();

  return (
    <>
      <header className='flex justify-between mb-4 items-center'>
        <h1 className='text-2xl'>Todos</h1>
        <Link 
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' 
          href='/new'
        >New</Link>
      </header>
      <ul className='pl-4'>
        { todos.map( todo => 
          <TodoItem 
            key={todo.id}
            toggleTodo={ toggleTodo }
            {...todo} />
        )}
      </ul>

    </>
  );
}
