'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/components/Roadmap.module.css';

const Roadmap = () => {
    const roadmapData = [
        {
            phase: 'PHASE A',
            quarter: 'Q3 2023',
            title: 'Conceptualization',
            items: [
                'Concept development',
                'Whitepaper drafting',
                'Technical documentation',
                'Branding and initial marketing',
                'Online presence',
                'Community outreach',
            ],
        },
        {
            phase: 'PHASE B',
            quarter: 'Q1-2 2024',
            title: 'Community Building',
            items: [
                'Wrapped token creation',
                'Community engagement',
                'Public sale',
                'Node operator recruitment',
                'Devnet launch',
                'Smart contract development',
            ],
        },
        {
            phase: 'PHASE C',
            quarter: 'Q3-4 2024',
            title: 'Mainnet Launch',
            items: [
                'Mainnet launch',
                'Token swap bridge',
                'Smart contract integration',
                'Hackathon',
                'Grant program',
                'Ecosystem partnerships',
            ],
        },
        {
            phase: 'PHASE D',
            quarter: '2025',
            title: 'Future Enhancements',
            items: [
                'DeFi integration strategies',
                'Privacy features - ZK Proofs',
                'Cross-Chain functionality',
                'Network optimization techniques',
                'Global compliance adherence',
                'Sustainability initiatives launch',
            ],
        },
    ];

    return (
        <section className={styles.road} data-aos="fade-down" data-aos-duration="700">
            <div className={styles.roadInner}>
                <h2 className={styles.roadTitle}>Project Development Roadmap</h2>
                <p className={styles.roadText}>
                    Discover our strategic milestones and how we're propelling towards a transformative future in blockchain technology.
                </p>
            </div>
            <div className={styles.roadSlider}>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    autoPlay={false}
                    interval={5000}
                    centerMode={true}
                    centerSlidePercentage={90}
                >
                    {roadmapData.map((data, index) => (
                        <div key={index} className={`${styles.roadSlide}`}>
                            <div className={styles.roadPhaseInner}>
                                <p className={styles.roadPhase}>{data.phase}</p>
                            </div>
                            <div className={styles.roadSlideTitleInner}>
                                <p className={styles.roadSlideTitle}>{data.quarter}</p>
                                <p className={styles.roadSlideName}>{data.title}</p>
                            </div>
                            <div className={styles.roadSlidePoints}>
                                {data.items.map((item, i) => (
                                    <div key={i} className={styles.roadSlidePoint}>
                                        <div className={styles.roadSlidePointCircle}></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Roadmap;
