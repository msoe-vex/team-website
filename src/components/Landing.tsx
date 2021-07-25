import React, {useState, useEffect} from 'react';
import Particles from './Particles';
import Image from 'react-image-resizer';
import '../style/Landing.scss';
import Marquee from "react-marquee-slider";

const Landing = (props: any) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          backgroundColor: "black"
        }}
      >
        <Particles />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh"
          }}
        >
              <div className="sponsors-div">
                <Marquee velocity={25} direction={"rtl"} scatterRandomly={false} resetAfterTries={1000} onInit={()=>{}} onFinish={()=>{}}>
                    <a href="https://www.msoe.edu/" target="_blank" rel="noopener noreferrer">
                        <Image src={"../public/msoeLogo.png"} key={1}  
                        height={120}
                        width={100}
                        style={{marginLeft: "50px", marginRight: "50px"}}/>
                    </a>
                  <a href="https://www.milwaukeetool.com/" target="_blank" rel="noopener noreferrer">
                    <Image src={"../public/milwaukeeLogo.png"} key={2}  
                    height={120}
                    width={200}
                    style={{marginLeft: "50px", marginRight: "50px"}}/>
                  </a>
              </Marquee>
            </div>
            <div className="container-div">
              <div className="logo-div">
                <Image
                img src={"../public/msoeRoboticsLogo.png"} className="center"
                height={width > 767 ? 314 : 141}
                width={width > 767 ? 729 : 328}/>
              </div>
              <div className="arrow"></div>
            </div>
        {props.children}
        </div>
    </div>
  );
};

export default Landing;
