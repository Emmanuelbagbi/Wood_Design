import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// import { Link } from 'react-router-dom';


function HomePage() {
       
    AOS.init({
        offset: 1,
    });
    

    return(
        <>
           <div className="max-content">
            <section className="hero">
                <div className="hero-text">
                    <h4>Emmy Art</h4>
                    <h1>Bring <br />Wood to Life</h1>
                    <p>Expertly Carved Wooden sculptures and figurines that showcase
                        the natural beauty and versatility of wood
                    </p>
                </div>

                <div className="hero-img" data-aos="zoom-in" data-aos-duration="1400">
                    <img src="/src/assets/IMAGES/2vader.webp" alt="" />
                </div>
            </section>

            <div className="button-box">
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
                </a>
            </div>

            <div className="social">
                <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="200">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi-facebook"  viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
                <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi-dribbble" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"/>
                    </svg>
                </a>
                <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="400">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                </a>
            </div>

            {/* ----About---- */}

            <section className='about' id='about'>
                <div className="about-img" data-aos="zoom-in" data-aos-duration="1400">
                    <img src="/src/assets/IMAGES/about.png" alt="" />
                </div>

                <div className="about-text" data-aos="fade-up" data-aos-duration="1400">
                    <h2>Wood is my <br /> Passion</h2>
                    <p>Hi, I'm Emmy, a wood carving artist with 20 years of experience in creating unique, handcraft wooden 
                        masterpieces that tell a story. My skills in carving, design, and finishing have been honed over the years,
                        allowing me to create stunning sculptures, figurines, and decorations. 
                    </p>
                    <a href="#" className='btn'>View My Work</a>
                </div>
            </section>

             {/* ----Shop---- */}
             <section className='shop' id='shop'>
                    <div className="head-text" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
                        <div className="head-left">
                            <h4>Best Selling</h4>
                        </div>

                        <div className="head-right">
                            <h4>Offer up to 50%</h4>
                        </div>
                    </div>

                    <div className="shop-content" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="300">
                        <div className="box">
                            <div className="box-image">
                                <img src="/src/assets/IMAGES/s1.png" alt="" />
                            </div>
                            <h3>figurines</h3>
                            <h5>View Gallery</h5>
                            <div className="cart">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg></a>
                            </div>
                        </div>


                        <div className="box">
                            <div className="box-image">
                                <img src="/src/assets/IMAGES/s2.png" alt="" />
                            </div>
                            <h3>Funiture</h3>
                            <h5>View Gallery</h5>
                            <div className="cart">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg></a>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-image">
                                <img src="/src/assets/IMAGES/s1.png" alt="" />
                            </div>
                            <h3>figurines</h3>
                            <h5>View Gallery</h5>
                            <div className="cart">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg></a>
                            </div>
                        </div>
                    </div>
             </section><br /><br />
            

             {/* ----exhibition---- */}
             <section className='exhibitions' id='exhibitions'>
                    <div className="head-text" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="300">
                        <div className="head-left">
                            <h4>Exhibitions</h4>
                        </div>

                        <div className="head-right">
                            <h4>& Events</h4>
                        </div>
                    </div>

                    <div className="exb-content">
                        <div className="exb-img" data-aos="zoom-in" data-aos-duration="1400" >
                            <img src="/src/assets/IMAGES/exb.png" alt="" />
                        </div>

                        <div className="exb-text" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="300">
                            <div className="row">
                                <h5>Whispers in the Wood: An Exploration of Nature's Beauty</h5>
                                <a href="#">22 March 2024 - 25 March 2024</a>
                            </div>

                            <div className="row">
                                <h5>Whispers in the Wood: An Exploration of Nature's Beauty</h5>
                                <a href="#">22 March 2024 - 25 March 2024</a>
                            </div>

                            <div className="row">
                                <h5>Whispers in the Wood: An Exploration of Nature's Beauty</h5>
                                <a href="#">22 March 2024 - 25 March 2024</a>
                            </div>

                            <div className="row">
                                <h5>Whispers in the Wood: An Exploration of Nature's Beauty</h5>
                                <a href="#">22 March 2024 - 25 March 2024</a>
                            </div>
                        </div>
                    </div>
             </section>

             {/* ----Contacts---- */}
            

            {/* ----footer---- */}
         
           </div>
        </>
    )
}

export default HomePage