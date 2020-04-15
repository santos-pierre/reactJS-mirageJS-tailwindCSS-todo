import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = () => {
  const [todos, setTodo] = useState([]);
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    axios
      .get('/api/todos')
      .then((res) => {
        setTodo(res.data.todos);
      })
      .catch((e) => {
        console.error(e.message);
      })
  }, []);

  return (
    <div className="relative">
      <div className="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="w-full md:w-11/12 shadow mx-auto p-10 bg-white">
          <div className="border-gray-200">
            <h3 className="text-2xl md:text-6xl font-extrabold text-gray-900">
              <span className="text-indigo-600">Your </span> Todos
            </h3>
          </div>
          <form className="mt-3 sm:flex mb-5 md:flex md:justify-between">
            <input type="text" required className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" placeholder="What I Want To Do ?" />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Add Todo
              </button>
            </div>
          </form>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              <li className="border-t">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <span 
                      role="checkbox" 
                      tabindex="0" 
                      aria-checked={isOn} 
                      className={`${isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}>
                      <span
                        aria-hidden={isOn}
                        className={`${isOn ? 'translate-x-5' : 'translate-x-0'} relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                        onClick={() => (setIsOn(!isOn))}
                      >
                        <span 
                          className={`${isOn ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
                          <svg 
                            className="h-3 w-3 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 12 12">
                            <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span 
                          className={`${isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
                          <svg 
                            className="h-3 w-3 text-indigo-600" 
                            fill="currentColor" 
                            viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                          </svg>
                        </span>
                      </span>
                    </span>
                    <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                      Back End Developer
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        DONE
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-t">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                      Front End Developer
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        UNDONE
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
