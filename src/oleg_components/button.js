function TextButton() {
    return <text className="textbutton">Button</text>;
  }
  
export default function Button() {
    return (
      <button className="button">
        <TextButton />
      </button>
    );
  }