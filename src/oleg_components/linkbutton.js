import vectorimg from "./images/Vector.png";

function TextLinkButton() {
    return <text className="textlinkbutton">Learn More</text>;
  }
  
  function Vector() {
    return (
      <text className="vector">
        <img alt="->" src={vectorimg} />
      </text>
    );
  }
  
export default function LinkButton() {
    return (
      <button className="linkbutton">
        <>
          <TextLinkButton /> <Vector />
        </>
      </button>
    );
  }