import twitter from "./../Twitter Icon.png";
import facebook from "./../Facebook Icon.png";
import instagram from "./../Instagram Icon.png";
import linkedin from "./../Linkedin Icon.png";
import github from "./../GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="" className="icon twitter">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="" className="icon facebook">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="" className="icon instagram">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="" className="icon linkedin">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="" className="icon github">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
}
