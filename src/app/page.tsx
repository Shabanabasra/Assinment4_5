import Image from "next/image";

export default function Home() {
  return (
    <div style={{display: `flex`, flexDirection: `column`,minHeight: `100vh`}}>
      
    
    
    <main style={{flex: `1`}}>
      
      
    
     </main>
     <div className="parentContainer">
      
      <div className="childContainer" >
      
        <div className="imageContainer">
        <img    src="images/clothx.JPG "alt=" clothx image" width={265} height={300}/>
        </div>
        <br/>
        <h1 style={{fontSize:"30px",color:"black",textAlign:"center"}}> <b>About</b></h1>
        <p style={{color:"blue",fontSize:"12px", height:30}}> 
        We design stylish, high-quality clothing that blends fashion and comfort for every.
        </p>
        <a href="http://localhost:3000/about">
        <button className="about">Read more </button>
        </a>
        </div>
        <div className="childContainer" >
      
        <div className="imageContainer">
        <img  src="images/cloth4.JFIF "alt=" cloth4 image" width={285} height={300}/>
        </div>
        <br/>
        <h1 style={{fontSize:"30px",color:"black",textAlign:"center"}}> <b>Portfolio</b></h1>
        <p style={{color:"blue",fontSize:"12px", height:30}}> 
        Our portfolio showcases a diverse range of fashion designs,blending creativity with exceptional craftsmanship.
        </p>
        <a href="http://localhost:3000/portfolio">
        <button className="about">Read more </button>
        </a>
        </div>
        <div className="childContainer" >
      
        <div className="imageContainer">
        <img src="images/cloth10.JPG "alt=" cloth10 image" width={299} height={300}/>
        </div>
        <br/>
        <h1 style={{fontSize:"30px",color:"black",textAlign:"center"}}> <b>Contact</b></h1>
        <p style={{color:"blue",fontSize:"12px", height:30}}> 
        Get in touch with us for inquiries, support, or to learn more about our latest collections.
        </p>
        <a href="http://localhost:3000/contact">
        <button className="about">Read more </button>
        </a>
        </div>
        <div className="childContainer">
        <div className="imageContainer">
        <img src="images/cloth88.JPG "alt=" cloth88 image" width={299} height={300}/>
        </div>
        <br/>
        <h1 style={{fontSize:"30px",color:"black",textAlign:"center"}}><b>Product</b></h1>
        <p style={{color:"blue",fontSize:"12px", height:30}}> 
          Our products offer a perfect balance of premium materials, modern designs and everyday versatility.
        </p>
        <a href="http://localhost:3000/product">
        <br/>
        <button className="product">Read more</button>
        </a>
        </div>
        <div className="childContainer">
        <div className="imageContainer">
        <img  src="images/cloth55.JPG "alt=" cloth55 image" width={355} height={300}/>
        </div>
        <br/>
        <h1 style={{fontSize:"30px",color:"black",textAlign:"center"}}><b>Brands</b></h1>
        <p style={{color:"blue",fontSize:"12px", height:30}}> 
        Oor brand is committed to delivering innovative, trendsetting clothing that reflects quality and individuality.
        </p>
        <a href="http://localhost:3000/brand">
        <br/>
        <button className="brand">Read more</button>
        </a>
        </div>

        <div className="childContainer">
        <div className="imageContainer">
        <img  src="images/cloth40.JPG "alt=" cloth40 image" width={355} height={300}/>
        </div>
        <br/>
        <h1 style={{fontSize:"30px",color:"black",textAlign:"center"}}><b>Topsale</b></h1>
        <p style={{color:"blue",fontSize:"8px", height:30}}> 
        Explore our top-selling clothing items,loved for their unbeatabled style and quality.
        </p>
        <a href="http://localhost:3000/topsale">
        <br/>
        <button className="topsale">Read more</button>
        </a>
        </div>


      </div>
      
    </div>
      
      
      
      

    


  )
}
    
    
   
      
    
    