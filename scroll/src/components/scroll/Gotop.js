
const GoTop = (props) => {
  // /DISPLAY HANDLER
  return (
    <>
      <button  className={props.showGoTop} onClick={props.scrollUp}>
        <i className="goTop__text fas fa-chevron-up" />
      </button>
    </>
  );
};
export default GoTop;