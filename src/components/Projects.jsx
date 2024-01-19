const Projects = () => {
  const handleIframeClick = () => {
    window.open(
      "https://blog.logrocket.com/best-practices-react-iframes/",
      "_blank"
    );
  };

  return (
    <>
      <h2
        style={{ fontFamily: "Roboto Mono, monospace" }}
        className="text-2xl  flex justify-center items-center text-white"
      >
        {" "}
        Other Projects:{" "}
      </h2>
      <div className="flex flex-wrap justify-center items-center  ">
        <iframe
          frameBorder="0"
          scrolling="no"
          src="https://blog.logrocket.com/best-practices-react-iframes/"
          title="i-frame/example2"
          className=" ml-6 mt-10 mb-10 w-[200px] h-[200px]"
          onClick={handleIframeClick}
        ></iframe>
      </div>
    </>
  );
};
export default Projects;
