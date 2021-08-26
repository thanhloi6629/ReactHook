
const GoTop = (props) => {
  // /DISPLAY HANDLER
  console.log("props", props.showGoTop);
  return (
    <>
      <button  className={props.showGoTop} onClick={props.scrollUp}>
        <i className="goTop__text fas fa-chevron-up" />
      </button>
    </>
  );
};
export default GoTop;