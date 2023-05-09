import { render } from "@testing-library/react";
import React from "react";
class Movie extends React.Component{

    movie_Name ="The_Flash"
    movie_Image="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:231/h:288/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/flash_ver8_xlg.jpg"
    movie_Image1="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:231/h:288/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/flash_ver9_xlg.jpg"
    movie_Image2="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:231/h:288/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/flash_ver10_xlg.jpg"

    render(){


        return <div>
            <h1>Movie Component</h1>
            <h2>Movie Name:{this.movie_Name}</h2>
            <img src= {this.movie_Image}alt="" />
             <img src={this.movie_Image1} alt="" />
             <img src={this.movie_Image2} alt="" />
        </div>
    }
}

export default Movie