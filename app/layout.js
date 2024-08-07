import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import "./layout.scss";

export const metadata = {
  title: "Bay Dreaming",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Powered by &copy; Hong Wang</footer>
      </body>
    </html>
  );
}
