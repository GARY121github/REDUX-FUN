import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from './features/theme/themeSlice';
import { Icon } from "@iconify/react";
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();


  const toggleModeHandler = () => {
    dispatch(changeTheme());
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <div className="dark:bg-[#000] min-w-full min-h-screen">
      <nav className="flex flex-row justify-around p-3 bg-[#028090] dark:bg-[#1d3557]">
        <h1 className="dark:text-slate-200 text-3xl font-bold">TODO APP</h1>
        <Icon
          onClick={toggleModeHandler}
          icon={theme === "dark" ? "circum:dark" : "iconamoon:mode-light"}
          className="text-3xl cursor-pointer align-middle dark:text-white"
        />
      </nav>
      <section className="w-6/12 mx-auto mt-4 p-3">
        <CreateTodo />
      </section>
      <main>
      <Todo />
      </main>
      
    </div>
  )
}

export default App