const ApiData = ({elements}) => {
  return (
    <>
      <div className="cards">
          <img
            src={elements.thumbnail}
            alt="SmartPhone"
            width="100%"
          />
          <h3> {elements.title} </h3>
      </div>
    </>
  );
};
export default ApiData;
