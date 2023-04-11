import { useState } from "react";

export default function Home() {
  const [promptsSelection, setPromptsSelection] = useState([true, false, false, false, false]);
  const [threads, setThreads] = useState([""]);

  const setAllThreads = (value: string, index: number) => {
    setThreads(threads.map((t, i) => (i === index ? value : t)));
  };

  const removeLastItem = () => {
    const newThreads = [];
    for (let i = 0; i < threads.length - 1; i++) {
      newThreads.push(threads[i]);
    }

    setThreads(newThreads);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800">
          Crutches
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Team Crippled
          </a>
        </div>
      </div>

      <div className="z-10 w-full pt-16 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 pl-1 left-0 flex h-48 w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Please enter your contents below
        </div>
      </div>

      {threads.map((thread, index) => {
        return (
          <div
            key={`thread${index}`}
            className="z-10 w-full pt-4 max-w-5xl items-center justify-between font-mono text-sm lg:flex"
          >
            <textarea
              className="fixed w-full left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
              rows={10}
              value={thread}
              onChange={(e) => setAllThreads(e.target.value, index)}
            />
          </div>
        );
      })}

      <div className="z-10 w-full pt-4 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white  x:ring-blue-300 dark:x:ring-blue-800"
          onClick={() => setThreads([...threads, ""])}
        >
          <span className="flex flex-row relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-4 w-4 pt-0.5"
            >
              <path stroke-linecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            &nbsp; Add another thread!
          </span>
        </button>

        {threads.length > 1 && (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={removeLastItem}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
          </button>
        )}
      </div>

      <div className="z-10 w-full pt-8 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 pl-1 left-0 flex h-48 w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Please select your conversation style
        </div>
      </div>

      {/* Conversation style select */}
      <div className="z-10 pt-4 w-full max-w-5xl items-center justify-start font-mono text-sm lg:flex">
        <button
          className={
            !promptsSelection[0]
              ? "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white  x:ring-green-200 dark:x:ring-green-800"
              : "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  x:ring-green-200 dark:x:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
          onClick={() => setPromptsSelection([!promptsSelection[0], false, false, false, false])}
        >
          <span
            className={
              !promptsSelection[0]
                ? "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                : ""
            }
          >
            Green to blue
          </span>
        </button>

        <button
          className={
            !promptsSelection[1]
              ? "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  x:ring-purple-200 dark:x:ring-purple-800"
              : "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  x:ring-purple-200 dark:x:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
        >
          <span
            className={
              !promptsSelection[1]
                ? "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                : ""
            }
            onClick={() => setPromptsSelection([false, !promptsSelection[1], false, false, false])}
          >
            Purple to pink
          </span>
        </button>

        <button
          className={
            !promptsSelection[2]
              ? "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white  x:ring-pink-200 dark:x:ring-pink-800"
              : "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  x:ring-pink-200 dark:x:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
        >
          <span
            className={
              !promptsSelection[2]
                ? "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                : ""
            }
            onClick={() => setPromptsSelection([false, false, !promptsSelection[2], false, false])}
          >
            Pink to orange
          </span>
        </button>

        <button
          className={
            !promptsSelection[3]
              ? "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900  x:ring-lime-200 dark:x:ring-lime-800"
              : "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200  x:ring-lime-200 dark:x:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
          onClick={() => setPromptsSelection([false, false, false, !promptsSelection[3], false])}
        >
          <span
            className={
              !promptsSelection[3]
                ? "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                : ""
            }
          >
            Teal to Lime
          </span>
        </button>

        <button
          className={
            !promptsSelection[4]
              ? "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900  x:ring-red-100 dark:x:ring-red-400"
              : "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl  x:ring-red-100 dark:x:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }
          onClick={() => setPromptsSelection([false, false, false, false, !promptsSelection[4]])}
        >
          <span
            className={
              !promptsSelection[4]
                ? "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                : ""
            }
          >
            Red to Yellow
          </span>
        </button>
      </div>

      <div className="z-10 w-full pt-8 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div
          className="button w-full h-12 bg-blue-500 rounded-lg cursor-pointer select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
            border-b-[1px] border-blue-400
          "
        >
          <span className="flex flex-row justify-center items-center h-full text-white font-bold text-lg ">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-4 w-4 mr-2"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              ></path>
            </svg>
            Write
          </span>
        </div>
      </div>
    </main>
  );
}
