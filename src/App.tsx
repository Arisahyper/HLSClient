import { Component, createEffect } from "solid-js";
import Player from "./Player";

const App: Component = () => {
  return (
    <>
      <div class="bg-gray-700 flex justify-between items-center">
        <h1 class="text-3xl  text-white font-thin tracking-wide py-4 pl-6">
          HLS Tester
        </h1>
        <a class="pr-6 block" href="https://github.com/Arisahyper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
      <div class="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
        <Player src="https://golhs-367811.uc.r.appspot.com/starry/outputlist.m3u8" />
      </div>
      <div class="flex-col bg-gray-700 text-white flex justify-center items-center">
        <a class="py-3 block" href="https://arisahyper.com">
          © 2022 Arisahyper.com
        </a>
        <p class="block text-gray-400 text-sm pb-3">
          Powerd by Solid.js & Golang & GCP.
        </p>
      </div>
    </>
  );
};

export default App;
