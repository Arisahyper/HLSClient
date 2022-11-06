import { createEffect, createSignal } from "solid-js";
import Hls from "hls.js";

type Props = {
  src: string;
};

const Player = (props: Props) => {
  const [m3u8Url, setm3u8Url] = createSignal<string>(
    "https://golhs-367811.uc.r.appspot.com/starry/outputlist.m3u8"
  );
  const isSupported = Hls.isSupported();
  let videoRef;

  createEffect(() => {
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(m3u8Url());
      hls.attachMedia(videoRef);
    }
  }, [props.src]);

  return (
    <>
      {/* <head> */}
      <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
      {/* </head> */}

      <div class="content">
        <input
          class="border-2 border-gray-300 w-[640px] p-2"
          type="text"
          value={m3u8Url()}
          onChange={(e: any) => setm3u8Url(e.target.value)}
        />

        {isSupported ? (
          <div class="">
            <video
              class="border-sky-500 border-4"
              ref={videoRef}
              controls
              width={640}
            ></video>
          </div>
        ) : (
          <div class="notSupportBrowser">
            お使いのブラウザでは動画再生をサポートしていません。
          </div>
        )}
      </div>
    </>
  );
};

export default Player;
