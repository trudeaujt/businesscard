export default function About() {
  return (
    <div className="about">
      <p className="name">Laura Smith</p>
      <p className="title">Frontend Developer</p>
      <p className="website">laurasmith.website</p>
      <div id="wrapper">
        <button className="email">📧 Email</button>
      </div>
      <div className="sub">
        <p className="subHeader">About</p>
        <p className="subText">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <p className="subHeader">Interests</p>
        <p className="subText">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
