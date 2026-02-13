
import React from 'react';
import designergrid from '../../assets/designergrid.png';
import baggrid from '../../assets/baggrid.png';
import jacketgrid from '../../assets/jacketgrid.png';
import jewellerygrid from '../../assets/jewellerygrid.png';
import topgrid from '../../assets/topgrid.png';

import shoesgrid from '../../assets/shoesgrid.png';
import coatstrenchcoatgrid from '../../assets/coatstrenchcoatgrid.png';
import knightgrid from '../../assets/knightgrid.png';
import trousergrid from '../../assets/trousergrid.png';
import skirtsgrid from '../../assets/skirtsgrid.png';
import './Imagegrid.css'

const Images = [designergrid,baggrid,jacketgrid,jewellerygrid,topgrid,shoesgrid,coatstrenchcoatgrid,knightgrid,
    trousergrid,skirtsgrid]

const Imagegrid = () => {
    return (
        <div className='gridcontainer'>
            {Images.map((img,index) => (
                <div className='griditem' key={index}>
                    <img src={img} alt='fashion'/>
                    <button className='overlaybtn'>Explore</button>
                </div>
            ))}
        </div>
    )
}


export default Imagegrid;