import "./header.css";

function Header() {
  return (
    <>
      <ul>
        <li>
          <a href="./">FacultyWeb</a>
        </li>
        <li>
          <a href="./faculties">All Faculties</a>
        </li>
        <li class="contact">
          <a href="./contactus">Contact Us</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
