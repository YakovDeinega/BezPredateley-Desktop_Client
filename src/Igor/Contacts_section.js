import phoneimg from "./images/Group 188.png";
import markerimg from "./images/Group 178.png";
import laterimg from "./images/Group 202.png";
import clockimg from "./images/Group 177.png";

export default function ContactsSection() {
  return (
    <>
      <div className="contactsSection">
        <Group52 />
        <Group82 />
      </div>
    </>
  );
}

function Group52() {
  return (
    <>
      <div className="group52">
        <Text1Group52 />
        <Text2Group52 />
      </div>
    </>
  );
}

function Text1Group52() {
  return <text className="text1Group52">Get in touch</text>;
}

function Text2Group52() {
  return <text className="text2Group52">Contact</text>;
}

function Group82() {
  return (
    <>
      <div className="group82">
        <Group81 />
        <Group79 />
        <Group83 />
        <Group84 />
      </div>
    </>
  );
}

function Group81() {
  return (
    <>
      <div className="group81">
        <Group77
          styleGroup77="group77"
          styleGroup188="group188"
          styleGroup200="group200"
          pic={phoneimg}
          text1="EMERGENCY"
          styletext1="group200Text"
          text2="(237) 681-812-255"
          styletext2="group200PhoneNumber1"
          text3="(237) 666-331-894"
          styletext3="group200PhoneNumber2"
        />
        <Rectangle13 className="rectangle13" />
      </div>
    </>
  );
}

function Rectangle13({ className }) {
  return <div className={className}></div>;
}

function Group77({
  styleGroup77,
  styleGroup188,
  styleGroup200,
  pic,
  text1,
  styletext1,
  text2,
  styletext2,
  text3,
  styletext3
}) {
  return (
    <>
      <div className={styleGroup77}>
        <Group188 styleGroup188={styleGroup188} pic={pic} />
        <Group200
          styleGroup200={styleGroup200}
          text1={text1}
          styletext1={styletext1}
          text2={text2}
          styletext2={styletext2}
          text3={text3}
          styletext3={styletext3}
        />
      </div>
    </>
  );
}

function Group188({ styleGroup188, pic }) {
  return (
    <>
      <div className="group188">
        <img alt="phoneimg" src={pic} />
      </div>
    </>
  );
}

function Group200({
  styleGroup200,
  text1,
  styletext1,
  text2,
  styletext2,
  text3,
  styletext3
}) {
  return (
    <>
      <div className={styleGroup200}>
        <Group200Text1 text1={text1} styletext1={styletext1} />
        <Group200Text2 text2={text2} styletext2={styletext2} />
        <Group200Text3 text3={text3} styletext3={styletext3} />
      </div>
    </>
  );
}

function Group200Text1({ text1, styletext1 }) {
  return <text className={styletext1}>{text1}</text>;
}

function Group200Text2({ text2, styletext2 }) {
  return <text className={styletext2}>{text2}</text>;
}

function Group200Text3({ text3, styletext3 }) {
  return <text className={styletext3}>{text3}</text>;
}

function Group79() {
  return (
    <>
      <div className="group79">
        <Group77
          styleGroup77="group77"
          styleGroup188="group188"
          styleGroup200="group200"
          pic={markerimg}
          text1="LOCATION"
          styletext1="location"
          text2="0123 Some place"
          styletext2="somePlace"
          text3="9876 Some country"
          styletext3="someCountry"
        />
        <Rectangle13 className="rectangle13_2" />
      </div>
    </>
  );
}

function Group83() {
  return (
    <>
      <div className="group83">
        <Group77
          styleGroup77="group77"
          styleGroup188="group188"
          styleGroup200="group200"
          pic={laterimg}
          text1="EMAIL"
          styletext1="emailText"
          text2="fildineeesoe@gmil.com"
          styletext2="email1"
          text3="myebstudios@gmail.com"
          styletext3="email2"
        />
        <Rectangle13 className="rectangle13" />
      </div>
    </>
  );
}

function Group84() {
  return (
    <>
      <div className="group84">
        <Group77
          styleGroup77="group77"
          styleGroup188="group188"
          styleGroup200="group200"
          pic={clockimg}
          text1="WORKING HOURS"
          styletext1="hoursText"
          text2="Mon-Sat 09:00-20:00"
          styletext2="workingHours1"
          text3="Sunday Emergency only"
          styletext3="workingHours2"
        />
        <Rectangle13 className="rectangle13" />
      </div>
    </>
  );
}
