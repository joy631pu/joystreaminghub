import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Joy's Streaming Hub 
    </span>
  );
};

export default Header;
