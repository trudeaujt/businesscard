import Cover from "./Cover";
import About from "./About";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="card">
      <Cover />
      <About />
      <Footer />
    </div>
  );
}
