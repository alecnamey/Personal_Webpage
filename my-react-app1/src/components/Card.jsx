import profilePic from '/Users/alecnamey/Personal_Webpage/my-react-app1/src/assets/pfp2.jpeg'

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src ={profilePic} alt="profile picture"></img>
        </div>
    );
}
export default Card