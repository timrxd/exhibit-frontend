import '../App.css'

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav")!.style.width = "250px";
  document.getElementById("main")!.style.marginLeft = "250px";
  document.getElementById("closebtn")!.onclick = closeNav
  document.getElementById("closebtn")!.innerHTML = "&times;"
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav")!.style.width = "45px";
  document.getElementById("main")!.style.marginLeft = "45px";
  document.getElementById("closebtn")!.onclick = openNav
  document.getElementById("closebtn")!.innerHTML = "&#9776;"
}

export const Navbar = () => (
  <div id='mySidenav' className={"sidenav"}>
    <a href="javascript:void(0)" id= "closebtn" className="closebtn" onClick={closeNav}>&times;</a>
    <a href="/">Home </a>
    <a href="/login">Login </a>
    <a href="/secret">Secret </a>
  </div>
);