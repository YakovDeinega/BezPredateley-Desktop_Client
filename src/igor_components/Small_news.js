import rec34img from "./images/Rectangle 34.png";
import likeimg from "./images/Vectorlike.png";
import eye from "./images/Group 198.png";

import { useState } from "react";

export default function SmallNews() {
  return (
    <>
      <div className="smallNews">
        <Hovered />
        <Default />
      </div>
    </>
  );
}

function Hovered() {
  return (
    <>
      <div className="hovered">
        <Rec13 /> <Rec34 /> <Group67 />
      </div>
    </>
  );
}

function Rec34() {
  return (
    <text className="rec34">
      <img alt="rec34img" src={rec34img} />
    </text>
  );
}

function Rec13() {
  return <div className="rec13"></div>;
}

function Group67() {
  return (
    <>
      <div className="group67">
        <Description data="Monday 05, September 2021" author="By Author" />
        <NewsText text="This Article’s Title goes Here, but not too long." />
        <Group66 />
      </div>
    </>
  );
}

function Description({ data, author }) {
  let text = data + " | " + author;
  return <text className="description">{text}</text>;
}

function NewsText({ text }) {
  return <text className="newsText">{text}</text>;
}

function Group66() {
  return (
    <>
      <div className="group66">
        <Group65 />
        <Group64 />
      </div>
    </>
  );
}

function Group65() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(null);

  function handleClick() {
    if (isLiked) {
      setCount(count - 1);
      setIsLiked(false);
    } else {
      setIsLiked(true);
      setCount(count + 1);
    }
  }

  return (
    <>
      <div className="group65">
        <TextLike counts={count} />
        <Like counts={count} onClick={handleClick} />
      </div>
    </>
  );
}

function TextLike({ counts }) {
  let k = counts === 0 ? "" : counts;
  return <text className="count">{k}</text>;
}

function Like({ onClick }) {
  return (
    <button className="like" onClick={onClick}>
      <img className="heart" alt="like" src={likeimg} />
    </button>
  );
}

function Group64() {
  return (
    <>
      <div className="group64">
        <TextEye />
        <Eye />
      </div>
    </>
  );
}

function TextEye() {
  return <text className="count">68</text>;
}

function Eye() {
  return (
    <text className="like">
      <img alt="eye" src={eye} />
    </text>
  );
}

function Default() {
  return (
    <>
      <div className="default">
        <Rec13 /> <Rec34 /> <Group67 />
      </div>
    </>
  );
}
