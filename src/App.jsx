import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="w-full md:w-11/12 shadow mx-auto p-10 bg-white">
          <div class="border-gray-200">
            <h3 class="text-2xl md:text-6xl font-extrabold text-gray-900">
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
