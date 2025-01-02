import profilePic from '../assets/pfp2.jpeg'


function Card(){
    return(
        <div className="card">
            <img className = "card-image" src ={profilePic} alt="profilePIC"></img>
        </div>
    );
}
export default Card