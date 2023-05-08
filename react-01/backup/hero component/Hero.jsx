let Hero = ()=>{
             let movieName ="Kaththi"
            let heroName ="Vijay"
        let actressName ="Samantha"
        let image ="https://w0.peakpx.com/wallpaper/764/336/HD-wallpaper-thalapathy-vijay-face-samantha.jpg"


  return  <div>
    <h1> Hero Component</h1>
     <h2>Movie Name:{movieName}</h2>
    <h2>Actor Name:{heroName}</h2>
    <h2>Actress Name:{actressName}</h2>
    <img src={image}alt="" />
  </div>
  
}

export default Hero