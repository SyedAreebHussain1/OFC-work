import "../../App.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  function toggleMenu() {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  }
  return (
    <>
      <header>
        <a href="#" className="logo">
          Food <span>.</span>{" "}
        </a>
        <div className="menuToggle" onclick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            {" "}
            <a href="#banner" onclick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="#about" onclick={toggleMenu}>
              About
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#menu" onclick={toggleMenu}>
              Menu
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#expert" onclick={toggleMenu}>
              Expert
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#testimonials" onclick={toggleMenu}>
              Testimonials
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact" onclick={toggleMenu}>
              Contact
            </a>{" "}
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
