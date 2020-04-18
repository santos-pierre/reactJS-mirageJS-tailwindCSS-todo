import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

/* Components */
import Todo from './components/todo/Todo';

const App = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get('/api/todos')
      .then((res) => {
        setTodo(res.data.todos);
      })
      .catch((e) => {
        console.error(e.message);
      })
  }, [todos]);

  const handleSubmit = (e) =>{
    let formDatas = new FormData(e.target);
    axios
      .post('/api/todos', {
          title : formDatas.get('title')
        }
      )
      .then((res) => {
        setTodo([...todos, res.data.todo]);
        e.target.elements['title'].value = '';
      })
      .catch((err) => {
        console.log(err)
      })
      e.persist();
      e.preventDefault();
  }

  const countTodoDone = () => {
    let todoDone = todos.filter((e)=>{
      return e.done;
    });
    return todoDone.length;
  }

  return (
    <div className="relative">
      <div className="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="w-full md:w-11/12 shadow mx-auto p-10 bg-white">
          <div className="border-gray-200">
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900">
              <span className="text-indigo-600">Your </span> Todos
            </h3>
          </div>
          <form className="mt-3 sm:flex mb-5 md:flex md:justify-between" onSubmit={(e)=>handleSubmit(e)} method="POST">
            <input type="text" required className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" placeholder="What I Want To Do ?" name="title" />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              type='submit'
              >
                Add Todo
              </button>
            </div>
          </form>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              {
                todos.map((todo)=>{
                  return <Todo key={todo.id} data={todo} axios={axios}/>
                })
              }
            </ul>
          </div>
          <div className="mt-2" onClick={()=>countTodoDone()}>
            <span className="md:text-xs text-base muted font-hairline text-indigo-600">{countTodoDone()}/{todos.length} Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
