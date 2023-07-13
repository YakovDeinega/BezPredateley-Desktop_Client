import vectorimg from "./images/Vector.png";

export default function ButtonWithIcon() {
  return (
    <>
      <button className="buttonWithIcon">
        <ReadMore /> <Vector />
      </button>
    </>
  );
}

function ReadMore() {
  return <text className="readMore">Read More</text>;
}

function Vector() {
  return (
    <text className="vector">
      <img alt="arrow icon" src={vectorimg} />
    </text>
  );
}