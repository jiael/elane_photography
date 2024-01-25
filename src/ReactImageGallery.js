import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './ReactImageGallery.css';
import Navbar from './Navbar';

const images = [
    "../elane_photography/images/024.jpg",//HELPPPPP
    "/images/04.jpg",
    "/images/01.jpg",
    "/images/03.jpg",
    "/images/030.jpg",
    "/images/017.jpg",
    "/images/015.jpg",
    "/images/07.jpg",
    "/images/06.jpg",
    "/images/010.jpg",
    "/images/014.jpg",
    "/images/08.jpg",
    "/images/012.jpg",
    "/images/013.jpg",
    "/images/05.jpg",
    "/images/021.jpg",
    "/images/019.jpg",
    "/images/018.jpg",
    "/images/028.jpg",
    "/images/025.jpg",
    "/images/022.jpg",
    "/images/027.jpg",
    "/images/026.jpg",
    "/images/016.jpg",
    "/images/031.jpg",
    "/images/029.jpg",
    "/images/02.jpg",
    "/images/011.jpg",
    "/images/032.jpg",
    "/images/033.jpg"
  ]

// const descriptions = [
//     "image 1",
//     "image 2",
//     "image 3",
//     "image 4",
//     "image 5",
//     "image 6",
//     "image 7",
//     "image 8",
//     "image 9",
//     "image 10",
//     "image 11",
//     "image 12",
//     "image 13",
//     "image 14",
//     "image 15",
//     "image 16",
          
// ]

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
                        {/* {descriptions.map((item) => (
                            <div style={{width: "100%", display: "block", cursor: 'pointer'}}>{item}</div>
                        )) } */}
                        
                    {/* {descriptions.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block", cursor: 'pointer'}}
                                alt=""
                                onClick={()=>viewImage(image, i)}
                            />
                        ))} */}
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