import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import c1 from "assets/img/card1.png"
import c2 from "assets/img/card2.png"
import c3 from "assets/img/card3.png"

export class FlipCard1 extends React.Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
         /// these are optional style, it is not necessary
        
      >
        <div className="bg-carddim">
        <FrontSide>
          <div className=" bg-kgcbrown w-full h-full lg:w-12/12 justify-center text-3xl text-white">
          <i className="fa fa-graduation-cap mt-20  " aria-hidden="true" 
          ></i>
              <h2>School/Colleges</h2>
              
            </div>
        </FrontSide>
        <BackSide>
          <div className="bg-lkgcbrown  w-full h-full lg:w-12/12 justify-center mt-1 html text-white"><h3 className="h3">Schools/Colleges</h3>
            Quality educational
         institutions to groom students into 
        responsible, informed, and creative individuals capable of 
        achieving their true potential.
        </div>
</BackSide>
</div>
      </Flippy>
    );
    // .. return
  }
}
export class FlipCard2 extends React.Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        //style={{ width: "300px", height: "300px" }} /// these are optional style, it is not necessary
      >
        <div className="bg-carddim">
         <FrontSide
         
            >
          <div className="bg-kgcbrown w-full h-full lg:w-12/12 justify-center text-3xl text-white">
          <i className="fa fa-building mt-20  " aria-hidden="true" 
          ></i>
              <h2>Community Centers</h2>
              
            </div>
        </FrontSide>
        <BackSide>
          <div className="bg-lkgcbrown  w-full h-full lg:w-12/12 justify-center mt-1 html text-white" ><h3 className="h3">Community Centers</h3>
          Clubhouses and community centers for the community to get together 
          and celebrate all the important
           occasions together, including festivals and organized events.
        </div>
</BackSide>
</div>
      </Flippy>
    );
    // .. return
  }
}

export class FlipCard3 extends React.Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        //style={{ width: "300px", height: "300px" }} /// these are optional style, it is not necessary
      >
        <div className="bg-carddim">
         <FrontSide
         
            >
          <div className="bg-kgcbrown w-full h-full lg:w-12/12 justify-center text-3xl text-white">
          <i className="fa fa-bicycle mt-20  " aria-hidden="true" 
          ></i>
              <h2>Gym Facilities</h2>
              
            </div>
        </FrontSide>
        <BackSide>
          <div className="bg-lkgcbrown  w-full h-full lg:w-12/12 justify-center mt-1 html text-white" >
            <h3 className="h3">Gym Facilities</h3>
          State of the art gyms equipped with facilities 
          like indoor games, gymnasium, jogging track, fitness station, etc.
        </div>
</BackSide>
</div>
      </Flippy>
    );
    // .. return
  }
}

export class FlipCard4 extends React.Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        //style={{ width: "300px", height: "300px" }} /// these are optional style, it is not necessary
      >
        <div className="bg-carddim">
         <FrontSide
         
            >
          <div className="bg-kgcbrown w-full h-full lg:w-12/12 justify-center text-3xl text-white ">
          <i  className="fa fa-tree mt-20  " aria-hidden="true" 
          ></i>
              <h2>Renewable Energy</h2>
              
            </div>
        </FrontSide>
        <BackSide>
          <div className="bg-lkgcbrown  w-full h-full lg:w-12/12 justify-center mt-1 html text-white" >
            <h3 className="h3">Renewable Energy</h3>
            With self-generation of power and a renewable energy system, 
            we provide a reliable 
            power supply providing a safe environment for you and our planet.
        </div>
</BackSide>
</div>
      </Flippy>
    );
    // .. return
  }
}

export class FlipCard5 extends React.Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        //style={{ width: "300px", height: "300px" }} /// these are optional style, it is not necessary
      >
        <div className="bg-carddim">
         <FrontSide
         
            >
          <div className="bg-kgcbrown w-full h-full lg:w-12/12 justify-center text-3xl text-white">
          <i  className="fa fa-medkit mt-20  " aria-hidden="true" 
          ></i>
              <h2>Hospitals</h2>
              
            </div>
        </FrontSide>
        <BackSide>
          <div className="bg-lkgcbrown  w-full h-full lg:w-12/12 justify-center mt-1 html text-white" >
            <h3 className="h3">Hospitals</h3>
            In addition to hospitals, our laboratories and pharmacies are also equipped 
            with the best facilities and services to prioritize your health and safety needs.
        </div>
</BackSide>
</div>
      </Flippy>
    );
    // .. return
  }
}

export class FlipCard6 extends React.Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        //style={{ width: "300px", height: "300px" }} /// these are optional style, it is not necessary
      >
        <div className="bg-carddim">
         <FrontSide
         
            >
          <div className="bg-kgcbrown w-full h-full lg:w-12/12 justify-center text-3xl text-white">
          <i className="fa fa-coffee mt-20  " aria-hidden="true" 
          ></i>
              <h2>Restaurants and Cafes</h2>
              
            </div>
        </FrontSide>
        <BackSide>
          <div className="bg-lkgcbrown  w-full h-full lg:w-12/12 justify-center mt-1 html text-white" >
            <h3 className="h3">Restaurants and Cafes</h3>
            With our culinary expertise and a pleasant ambiance, we will provide you with 
            the best standards of dining in terms of taste, service and quality.
        </div>
</BackSide>
</div>
      </Flippy>
    );
    // .. return
  }
}