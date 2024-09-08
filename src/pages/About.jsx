

function About() {
   
    return(
        <div className="token">
            <br /><br /><br /><br />
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
        </div>
    );
}
export default About;