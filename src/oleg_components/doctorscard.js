import vectorimg2 from "./images/in.png";
import vectorimg3 from "./images/facebook.png";
import vectorimg4 from "./images/instagram.png";
import doctorimg from "./images/nigaimg.png";

function PatientsName() {
    return <div className="patientsname">Patient’s Name</div>;
  }
  
  function Negro({ name }) {
    return <div className="negro">{name}</div>;
  }
  
  function Rectangle4() {
    return (
      <div className="rectangle4">
        <>
          <div className="patientnamenegro">
            <PatientsName />
            <Negro name="NEGRO" />
          </div>
          <Group56 />
        </>
      </div>
    );
  }
  
  function Rectangle34() {
    return <div className="rectangle34"></div>;
  }
  
  function Group57() {
    return (
      <div className="group57">
        <Rectangle4 />
      </div>
    );
  }
  
  function Group56() {
    return (
      <div className="group56">
        <Rectangle34 />
      </div>
    );
  }
  
  function Doctorimg() {
    return <img className="doctorimg" alt="doctorimg" src={doctorimg} />;
  }
  
  function User() {
    return (
      <div className="user">
        <>
          <Doctorimg />
          <Group57 />
        </>
      </div>
    );
  }
  
  function Default() {
    return (
      <div className="default">
        <>
          <Doctorimg />
          <Group572 />
          <Group562 />
        </>
      </div>
    );
  }
  
  function Group572() {
    return (
      <div className="group572">
        <>
          <div className="doctorsnameneu">
            <DoctorsName />
            <Neurology name="NEUROLOGY" />
            <In />
            <Facebook />
            <Instagram />
          </div>
        </>
      </div>
    );
  }
  
  function Group562() {
    return (
      <div className="group562">
        <Rectangle342 />
      </div>
    );
  }
  
  function TextViewProfile() {
    return <p className="textviewprofile">View Profile</p>;
  }
  
  function Rectangle342() {
    return (
      <div className="rectangle342">
        <TextViewProfile />
      </div>
    );
  }
  
  function DoctorsName() {
    return <div className="doctorsname">Doctor’s Name</div>;
  }
  
  function Neurology({ name }) {
    return <div className="neurology">{name}</div>;
  }
  
  function In() {
    return (
      <button className="in">
        <img alt="in" src={vectorimg2} />
      </button>
    );
  }
  
  function Facebook() {
    return (
      <button className="facebook">
        <img alt="facebook" src={vectorimg3} />
      </button>
    );
  }
  
  function Instagram() {
    return (
      <button className="instagram">
        <img alt="instagram" src={vectorimg4} />
      </button>
    );
  }
  
export default function DoctorsCard() {
    return (
      <div className="doctorscard">
        <>
          <div>
            <Default />
            <User />
          </div>
        </>
      </div>
    );
  }