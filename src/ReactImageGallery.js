import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './ReactImageGallery.css';

const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
  ]

const ReactImageGallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) =>{
        setData({img, i})
        /*console.log(img, i)*/
    }
    const imgAction = (action) =>{
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1});
        }
        if(action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: '', i: 0});
        }
    }

    return(
        <>
            {data.img &&
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}>
                        <button class='fa-solid fa-x' onClick={() => imgAction()} style={{position: 'absolute', top:'10px',right:'10px'}}></button>
                        <button class='fas fa-chevron-left prev-btn' onClick={() => imgAction('previous-img')}></button>
                        <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight:'90%'}}/>
                        <button class='fas fa-chevron-right next-btn' onClick={() => imgAction('next-img')}></button>
                    </div>
            }
            <div style={{marginTop: '76px', paddingLeft: '5%', paddingRight:'5%', paddingTop:'2.5%', paddingBottom:'2.5%'}}>
                <ResponsiveMasonry>
                    <Masonry columnsCount={3} gutter="15px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block", cursor: 'pointer'}}
                                alt=""
                                onClick={()=>viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default ReactImageGallery;