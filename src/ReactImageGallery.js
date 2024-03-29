import React,{useState, useEffect} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './ReactImageGallery.css';
import Navbar from './Navbar';

const images = [

    "../elane_photography/images/03.jpg",
    "../elane_photography/images/030.jpg",
    "../elane_photography/images/01.jpg",
    "../elane_photography/images/015.jpg",//HELPPPPP
    "../elane_photography/images/04.jpg",
    "../elane_photography/images/017.jpg",
    "../elane_photography/images/024.jpg",
    "../elane_photography/images/07.jpg",
    "../elane_photography/images/011.jpg",
    "../elane_photography/images/010.jpg",
    "../elane_photography/images/014.jpg",
    "../elane_photography/images/08.jpg",
    "../elane_photography/images/012.jpg",
    "../elane_photography/images/019.jpg",
    "../elane_photography/images/05.jpg",
    "../elane_photography/images/021.jpg",
    "../elane_photography/images/013.jpg",
    "../elane_photography/images/018.jpg",
    "../elane_photography/images/028.jpg",
    "../elane_photography/images/025.jpg",
    "../elane_photography/images/022.jpg",
    "../elane_photography/images/027.jpg",
    "../elane_photography/images/026.jpg",
    "../elane_photography/images/016.jpg",
    "../elane_photography/images/031.jpg",
    "../elane_photography/images/029.jpg",
    "../elane_photography/images/02.jpg",
    "../elane_photography/images/06.jpg",
    "../elane_photography/images/032.jpg",
    "../elane_photography/images/033.jpg",
    "../elane_photography/images/034.jpg",
    "../elane_photography/images/035.jpg",
    "../elane_photography/images/038.jpg",
    "../elane_photography/images/040.jpg",
    "../elane_photography/images/036.jpg",
    "../elane_photography/images/037.jpg",
    "../elane_photography/images/039.jpg",
    "../elane_photography/images/043.jpg",
    "../elane_photography/images/042.jpg",
    "../elane_photography/images/041.jpg"
    
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
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
}, [ ])
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