const VideoSlide = (props) => {
  const { video } = props;

  return (
    <div className="custom-slide">
      <video controls src={video}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSlide;
