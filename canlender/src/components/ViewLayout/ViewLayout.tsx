// import {ViewLayoutHeader}
import "./ViewLayout.less";
const ViewLayout = function (props: any) {
  const { header, bodyElement, footerElement } = props;
  const { leftElement, middleElement, rightElement, onClickHeader } = header;
  return (
    <div className="ViewLayoutContainer">
      <div className="ViewLayoutHeader" >
        <div>{leftElement}</div>
        <div onClick={() => onClickHeader(false)}>{middleElement }</div>
        <div>{rightElement}</div>
      </div>
      <div className="ViewLayoutBody">{bodyElement}</div>
      <div className="ViewLayoutfooter">{footerElement}</div>
    </div>
  );
};
export default ViewLayout;
