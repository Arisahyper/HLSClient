import { createEffect } from "solid-js";
import Hls from "hls.js"

type Props = {
  src: string;
}

const Player = (props: Props) => {
  const isSupported = Hls.isSupported();
  let videoRef;

  createEffect(() => {
    if(Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource('https://golhs-367811.uc.r.appspot.com/starry/outputlist.m3u8'); //ここで.m3u8ファイルを指定
      hls.attachMedia(videoRef);
    }
  }, [props.src]);

  return (
    <>
      {/* <head> */}
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
      {/* </head> */}

      <div class="content">
        {isSupported ? (
          <div class="videoContainer" >
            <video ref={videoRef} class="video" controls></video>
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
