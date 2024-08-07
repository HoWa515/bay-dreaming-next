import Link from "next/link";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <ul className="main-nav">
      <li className="main-nav__item">
        <Link href="/" className="main-nav__link">
          Home
        </Link>
      </li>
      <li className="main-nav__item">
        <Link href="/hotels" className="main-nav__link">
          Hotels
        </Link>
      </li>
      <li className="main-nav__item">
        <Link href="/account" className="main-nav__link">
          Account
        </Link>
      </li>
      <li className="main-nav__item">
        <Link href="/about" className="main-nav__link">
          About
        </Link>
      </li>
    </ul>
  );
}
