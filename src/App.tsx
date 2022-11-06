import { Component, createEffect } from "solid-js";
import Player from "./Player";

const App: Component = () => {
  return (
    <>
      <h1>Player</h1>
      <Player src="https://golhs-367811.uc.r.appspot.com/starry/outputlist.m3u8" />
    </>
  )
}

export default App;
