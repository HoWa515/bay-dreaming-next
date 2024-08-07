import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import "./Logo.scss";

export default function Logo() {
  return (
    <Link href="/">
      <img src="./logo.png" className="logo" />
    </Link>
  );
}
