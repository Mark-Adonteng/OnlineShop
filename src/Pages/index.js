// pages/about.js

import React from "react";
import "./home.css";
const Home = () => {
    const h3style={
        marginLeft:'3rem',
        marginTop:'9rem',
        fontSize: '35px',
        fontWeight: 200,
        letterSpacing: '3px',
        textShadow: '1px 1px 2px black',
        color:'beige',
    }
    const h3bstyle={
        marginLeft:'20rem',
        marginTop:'10rem',
        fontSize: '35px',
        fontWeight: 200,
        letterSpacing: '3px',
        textShadow: '1px 1px 2px black',
        color:'beige',
    }
    const h1style={
        marginTop:'-10rem',
        marginLeft:'2rem',
        color:'white',
        letterSpacing: '-3px',
        textShadow: '1px 1px 2px black',
    }
    const h12style={
        marginLeft:'2rem',
    }
    
    
    
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre",
            height: "100vh",
        }}
    >
         <main>
            <section>
                <h3 style={h3style}>Welcome to MarkSHOP Online</h3>
                <h3 style={h3bstyle}></h3>
        {/* <h3 style={h32style}>Online</h3> */}
            <div>
            <h1 style={h1style}>DO COME & VISIT</h1>
            <h1 style={h12style} class="change_content"></h1>
        <p>"The number one best Online shop worldwide"</p>
                <a href="#" class="btnone">Learn more</a>
                <a href="#"class="btntwo">SignUp Here</a>

            </div>
        
                {/* <button style={btnonstyle} >Learn more</button>
        <button >SignUp Here</button> */}
        
            </section>

            </main>
           
                
    
    </div>

    );
};

export default Home;

