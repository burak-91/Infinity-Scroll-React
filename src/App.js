import Ui from "./Ui";
import React, { useState,useEffect } from 'react';



const App = () => {
  const [photos,setPhotos] = useState([]);
  const [imagesLoaded,newLoadedImages] = useState(0);
  let readyState = false;

  const count = 5;
  const apiKey = "zxxD0TiTSF-jF5fMUSKBwHSljpGORl4-6Xjx-wzI8Dc";
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
  
  
  useEffect(() => {
    addNewPhoto();
  },[]);
    
  const onload=()=>{
    newLoadedImages(oldImages=>{console.log(oldImages)}) //photo=>> 0,1,2,3,4 =>>> 5
    //console.log(photos.length)
    // console.log(imagesLoaded)
    
    // if(imagesLoaded===photos.length-1){
    //   console.log("asdasd")
    //   console.log(photos.length)
    //   console.log("asdasd")
    //   console.log(imagesLoaded)
    //   readyState=true
    // }
  }


  const addNewPhoto=()=>{
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => setPhotos((oldarray)=>[...oldarray,...data])) 
  }

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      readyState === true
    ) {
      addNewPhoto();
      //console.log(imagesLoaded);
      readyState = false;
    }
  });
  

  return (
    <div>
      <Ui onload={onload} photos={photos}/>
    </div>
  )
}

export default App
