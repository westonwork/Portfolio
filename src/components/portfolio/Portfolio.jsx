import React from 'react'
import './portfolio.css'
import RTMLogo from '../../images/ReadToMe3.png'
import RTM1 from '../../images/Read_To_Me_Recording_and_Playback_Feature.png'
import RTM2 from '../../images/Read_To_Me_Recording_Moveable2.png'
import RTM3 from '../../images/Read_To_Me_Reading_Passages.png'
import RTM4 from '../../images/Read_To_Me_Login_and_Registration2.png'
import RTM5 from '../../images/Read_To_Me_Landing_Page.png'
import TBTLogo from '../../images/TICKIT.png'
import TBT1 from '../../images/TickIt_Bug_Tracker_Landing_Page.png'
import TBT2 from '../../images/TickIt_Bug_Tracker_Login_and_Registration.png'
import TBT3 from '../../images/TickIt_Bug_Tracker_Home_Navigation_Page.png'
import TBT4 from '../../images/TickIt_Bug_Tracker_My_TickIts.png'
import TBT5 from '../../images/TickIt_Bug_Tracker_Add_A_TickIt.png'


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Technical Projects</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={RTM1} alt="image 1" />
                    </div>
                        <h3>Read To Me: Children's Reading Fluency App</h3>
                        <div className='portfolio__item-cta'>
                        <a href="#" className='btn btn-primary' target='_blank'>See It</a>
                        <a href="https://github.com/westonwork/Read-To-Me-App" className='btn' target='_blank'>Github</a>
                        </div>
                        {/* <swiper-container>
                            <swiper-slide>{RTM1}</swiper-slide>
                            <swiper-slide>{RTM2}</swiper-slide>
                            <swiper-slide>{RTM3}</swiper-slide>
                            <swiper-slide>{RTM4}</swiper-slide>
                            <swiper-slide>{RTM5}</swiper-slide>
                        </swiper-container> */}
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={TBT1} alt="image 2" />
                    </div>
                        <h3>TickIt Bug Tracker: Software Bug Tracking App</h3>
                        <div className='portfolio__item-cta'>
                            <a href="#" className='btn btn-primary' target='_blank'>See It</a>
                            <a href="https://github.com/westonwork/TickItBugTracker" className='btn' target='_blank'>Github</a>
                        </div>
                        <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
                        {/* <swiper-container>
                            <swiper-slide>{TBT1}</swiper-slide>
                            <swiper-slide>{TBT2}</swiper-slide>
                            <swiper-slide>{TBT3}</swiper-slide>
                            <swiper-slide>{TBT4}</swiper-slide>
                            <swiper-slide>{TBT5}</swiper-slide>
                        </swiper-container> */}
                </article>
            </div>
        </section>
    )
}

export default Portfolio;