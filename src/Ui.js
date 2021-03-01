import React from 'react'
// import Loading from "./Loading"


const Ui = ({photos,onload}) => {
    const loader = "loader.svg"
    return (
        <div>
            <h1>INFINITE SCROLL</h1>
            <div className="loader" id="loader">
            <img src={loader} alt="loading" id="loader" style={{display:"none"}}/>
               
            </div>

            <div className="image-container" id="image-conatiner">
                {photos.map(photo=>(
                    <img src={photo.urls.regular} onLoad={()=>onload()} alt=""/>
                ))}
                
                
            </div>

        </div>
    )
}

export default Ui
