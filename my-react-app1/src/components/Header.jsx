import './Header.css';
import profilePic2 from '/Users/alecnamey/Personal_Webpage/my-react-app1/src/assets/linked.jpeg'
function Header(){
    return(
        <header>
            <h1 className="head-name">Alec Namey</h1>
            <nav>
                <ul>
                    <li><a href="\about">About</a></li>
                    <li><a href="\projects">Projects</a></li>
                    <li><a href="https://www.linkedin.com/in/alec-namey-a03263263/">
                        <img className = "card-image2" src ={profilePic2} alt="profile picture"></img></a></li>
                    <li><a href="\contact">Contact</a></li>
                </ul>
            </nav>

        </header>
    );
}
export default Header