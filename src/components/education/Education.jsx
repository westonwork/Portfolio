import React from 'react'
import './education.css'
import {MdWorkOutline} from 'react-icons/md'

const Education = () => {
    return (
        <section id='education'>
            <h5>What I've Done</h5>
            <h2>Work Experience</h2>

            <div className="container education__container">
                <div className='education__options'>
                    <article className='education__option'>
                        <MdWorkOutline className='education__option-icon' />
                        <h3>Guaranteed Rate</h3>
                        <h5>Mortgage Sales Trainer & Mortgage Specialist || Aug 2019 - Sept 2022</h5>
                        <ul>
                            <li>Received an average of 12-15 new prospective applicants daily across 9 states and 4 time zones while project managing an average active personal pipeline of 20 loans or $7M and closing an average of $2M per month.</li>
                            <li>Onboarded 100+ loan officers with 90 -120 days of individualized, daily technical training which increased the division's speed to loan closing and reduced the average errors in an application upon submission from 40 to 4.</li>
                            <li>Researched, designed, and presented over 100 synchronous, remote trainings for 35-150 person sales teams using adult learning theory best practices and methodologies to increase loan officer KPIs and overall sales team retention.</li>
                        </ul>
                    </article>
                    <article className='education__option'>
                        <MdWorkOutline className='education__option-icon' />
                        <h3>Valley Bank</h3>
                        <h5>Mortgage Sales Assistant || July 2017 - Aug 2019</h5>
                        <ul>
                            <li>Technical support to over 14 loan officers and 4 sales assistants which resulted in over $70M of monthly production.</li>
                            <li>Project managed an average active pipeline of $5M and origination of over $25M annually while promoting CRA initiatives and cross-selling banking products including personal and commercial to increase customer retention.</li>
                            <li>Deployed targeted email and social media campaigns to increase visibility which resulted in new referral business.</li>
                        </ul>
                    </article>
                    <article className='education__option'>
                        <MdWorkOutline className='education__option-icon' />
                        <h3>River of Life Assembly of God</h3>
                        <h5>Ministry Coordinator || May 2015 - July 2017</h5>
                        <ul>
                            <li>Spearheaded the implementation of an electronic ticketing system to track available seats for 1,500 attendees across 6 performances to a free, annual event and secured over $10K in sponsorships from local businesses.</li>
                            <li>Recruited and headed 4 diverse volunteer teams with 100+ direct reports for weekly and monthly events.</li>
                            <li>Researched and launched a texting app for guest experience that increased retention and engagement by 50%.</li>
                            <li>Overhauled UX/UI for the website and weekly newsletter which increased open & click rates and ease of use.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Education;