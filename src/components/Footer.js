import footerBg from '../images/water.jpg'

function Footer () {
    return(
<div   className='footer' style={{backgroundColor:'lightgray', height:'35%',marginBottom:'0px'}}>
    <div className='footerBg'>

    </div>

    <div style={{textAlign:'center'}}>
    <br/>All material herein © 2006 – 2022Human Company Pte. Ltd., All Rights Reserved.
    </div>




    <div style={{textAlign:'right',marginTop:'50px',fontSize:'14px' }}>
        <span1 style={{marginRight:'15px',cursor:'pointer'}}>호텔소개</span1>
        <span1 style={{marginRight:'15px',cursor:'pointer'}}>오시는 길 </span1>
        <span1 style={{marginRight:'15px',cursor:'pointer'}}>개인정보처리방침</span1>
        <span1 style={{marginRight:'15px',cursor:'pointer'}}>이메일무단수집금지</span1>
        <span1 style={{marginRight:'30px',cursor:'pointer'}}>영상정보처리기기운영,관리방침</span1>
    </div>

    <div  style={{textAlign:'right',fontSize:'12px',padding:'20px 0'}}>
        <span1 style={{marginRight:'15px'}}>천안시 대흥로 215</span1>
        <span1 style={{marginRight:'15px'}}> 대표이사 000</span1>
        <span1 style={{marginRight:'15px'}}>사업자등록번호-000-00-0000</span1>
        <span1 style={{marginRight:'15px'}}>Tel-000-000-0000</span1>
        <span1 style={{marginRight:'30px'}}>FAX-000-000-0000</span1>
    </div>

        
    </div>
    )
}

export default Footer;