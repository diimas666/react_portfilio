import './styles.css';
const Btn = ({ children, href, download }) => {
  return (
    <a className="btn" href={href} download={download}>
      {children}
    </a>
  );
};

export default Btn;
