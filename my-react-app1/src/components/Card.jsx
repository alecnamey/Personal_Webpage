import profilePic from '/Users/alecnamey/Personal_Webpage/my-react-app1/src/assets/pfp2.jpeg'

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src ={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Alec Namey</h2> 
            <p className="card-text">I am a student studying at the University of California, Santa Cruz</p>
        
        </div>
    );
}
export default Card