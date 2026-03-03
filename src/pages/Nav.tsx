import '../App.css'
import { useState } from 'react';

interface NavButtonProps {
  /** The text to display inside the button */
  buttonText: string;
  /** Whether the button can be interacted with */
  onButtonClick: () => void;
}

function NavButton({ buttonText, onButtonClick }: NavButtonProps) {
  return (
    <button className='navbutton' onClick={onButtonClick}>
      {buttonText}
    </button>
  );
}

export default function Navbar() {

  const [isOpen, setOpen] = useState(true)

  function handleClick() {
    console.log("boo");
    setOpen(!isOpen)
  }

  let navStyle = isOpen ? "sidenav navopen" : "sidenav navclosed";
  let buttonText = isOpen ? "x" : "☰";

  return (
    <div id='mySidenav' className={navStyle}>
      <NavButton buttonText={buttonText} onButtonClick={() => handleClick()} />
      <a href="/">Home </a>
      <a href="/login">Login </a>
      <a href="/secret">Secret </a>
    </div>
  );
}