import videoBg from '../videos/about.mp4'

function AboutHotel() {

    return(
        <div className='aboutHotelYogiya'>
            <video src={videoBg} autoPlay loop muted  
            style={{height:'30%',borderBottomLeftRadius:'20%',borderBottomRightRadius:'20%'}} />
            <div className='aboutText'>
                <p>ABOUT</p>
                <h1>HOTEL YOGIYA</h1>
                <p>한적하고 편안한 휴양을 원하는<br/>
                사람들을 위해 천안역 길옆에 자리잡은 호텔 요기야.<br/>
                기찻길 1분 거리 정도에 위치하고 있어 이용하는데 불편함이 없고 
                <br/>아늑한 분위기를 느낄 수 있습니다.
                </p>
            </div>
        </div>
    )
}

export default AboutHotel;