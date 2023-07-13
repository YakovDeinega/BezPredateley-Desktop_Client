import calendarimg from "./images/39.-Calendar.png";
import l1t from "./images/Layer-1t.png";
import l2t from "./images/Layer-2t.png";
import cashimg from "./images/15.-Cash.png";

export default function Goals() {
  return (
    <div className="goals">
      <BookAnAppointment />
      <Calendar />
      <Team />
      <Cash />
    </div>
  );
}

function BookAnAppointment() {
  return <text className="bookAnAppointment">Book an appointment</text>;
}

function Calendar() {
  return (
    <text className="calendar">
      <img alt="img" src={calendarimg} />
    </text>
  );
}

function Team() {
  return (
    <text className="team">
      <Teaml1 />
      <Teaml2 />
    </text>
  );
}

function Teaml1() {
  return (
    <text className="teaml1">
      <img alt="l1t" src={l1t} />
    </text>
  );
}

function Teaml2() {
  return (
    <text className="teaml2">
      <img alt="l2t" src={l2t} />
    </text>
  );
}

function Cash() {
  return (
    <text className="cash">
      <img alt="cash" src={cashimg} />
    </text>
  );
}
