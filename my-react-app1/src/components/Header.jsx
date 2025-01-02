import './Header.css';
import linkedinpic from '/Users/alecnamey/Personal_Webpage/my-react-app1/src/assets/linkedinit.png'
import githubpic from '/Users/alecnamey/Personal_Webpage/my-react-app1/src/assets/git.png'
function Header(){
    return(
        <header>
            <h1 className="head-name">Alec Namey</h1>
            <nav>
                <ul>
                    <li><a href="\about">About</a></li>
                    <li><a href="\projects">Projects</a></li>
                    <li><a href="\contact">Contact</a></li>
                    <li><a href="https://www.linkedin.com/in/alec-namey-a03263263/">
                    <img className = "card-image2" src ={linkedinpic} alt="linkedin picture"></img></a></li>
                    <li><a href="https://github.com/alecnamey?tab=repositories">
                    <img className = "git-image1" src ={githubpic} alt="github picture"></img></a></li>
                </ul>
            </nav>

        </header>
    );
}
export default Header