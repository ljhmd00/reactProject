import videoBg from '../videos/Bar.mp4'


function DiningBar(){
    return(
        <div className="bar" style={{marginTop:''}}>
            <video src={videoBg} autoPlay loop muted  style={{height:'30%'}}/>
        </div>

    )

}

export default DiningBar;