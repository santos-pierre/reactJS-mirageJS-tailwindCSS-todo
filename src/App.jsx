import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="w-11/12 shadow mx-auto p-10">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl mb-2">
            <span className="text-indigo-600">Your </span> Todos
          </h2>
          <hr className="mb-5"/>
        </div>
      </div>
    </div>
  );
}

export default App;
