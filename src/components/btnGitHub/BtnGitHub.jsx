import gitHub from './gitHub-black.svg';
import './style.css';
function BtnGitHub({link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHub} alt="" />
      GitHub repo
    </a>
  );
}
export { BtnGitHub };
