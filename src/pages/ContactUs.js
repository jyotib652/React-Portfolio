import React from 'react';
// Animations (framer motion)
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                            <h2>Send us a message.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                            <h2>Send an email.</h2>
                    </Social>
                </Hide>
                <Hide> 
                    <Social variants={titleAnim}>
                        <Circle />
                            <h2>Social Media.</h2>
                    </Social>
                </Hide> 
            </div>
        </ContactStyle>
    );
};


const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
  }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
     width: 3rem;
     height: 3rem;
     background-color: #353535;
     @media (max-width: 1500px) {
        display: none;
  }
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
        font-size: 3rem;
    }
    @media (max-width: 1500px) {
    h2 {
      margin: 1rem 0rem;
      font-size: 2.5rem;
    }
  }
`;

export default ContactUs;