import ReactPlayer from "react-player/youtube";

export interface VIdeoPlayerInterface {
  url: string;
}

const VideoPlayer = ({ url }: VIdeoPlayerInterface) => {
  return (
    <ReactPlayer
      url={url}
      style={{ position: "relative", top: 0, left: 0 }}
      width="85%"
      height="100%"
      loop
    />
  );
};

export default VideoPlayer;
