import bar_image from "../image/backiee-115086.jpg"
export default function Navbar(){
    return( 
        <>
            <div className="navbar">
                <img className="bg_img" src={bar_image}></img>
                <p1>FINAL</p1>  <p2>SPACE</p2>
            </div>

            <div class="grid-container">
                <div className="frame_in_1">1</div>
                <div className="frame_in_2">2</div>
            </div>

        </>
    )
}