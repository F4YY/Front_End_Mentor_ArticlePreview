import React from 'react';
import {
  Articleimage,
  Articleinfo,
  Attribution,
  AttributionA,
  NameDate,
  NameDateButton,
  Profilinfo,
  Profpic,
  Sharebutton,
  Sharetip,
  Sharetipinfo,
  Styledarticlepreview,
} from './styled/Articlepreview.styled';
import { Container } from './styled/Container.styled';
import articleimage from './images/drawers.jpg';
import michelle from './images/avatar-michelle.jpg';
import icon from './images/icon-share.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import 'react-tooltip/dist/react-tooltip.css';

export const Articlepreview = () => {
  return (
    <Container>
      <Styledarticlepreview>
        <Articleimage src={articleimage} alt='articleimage'/>
        <Articleinfo>
          <h1>
            Shift the overall look and feel by adding these wonderful
            touches to furniture in your home
          </h1>
          <h3>
            Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.
          </h3>
          <Profilinfo>
            <Profpic src={michelle} alt='profpic' />
            <NameDateButton>
              <NameDate>
                <h2>
                  Michelle Appleton
                </h2>
                <h4>
                  28 Jun 2020
                </h4>
              </NameDate>
              <Sharebutton data-tooltip-id='sharingiscaring'>
                <img src={icon} alt='icon'/>
              </Sharebutton>
            </NameDateButton>
            <Sharetip
              id='sharingiscaring'
              events={['click']}
              clickable='true'
              content={
                <Sharetipinfo>
                  <p>
                    Share
                  </p>
                  <a href="https://www.facebook.com"><img src={facebook} alt='facebook'/></a>
                  <a href="https://www.twitter.com"><img src={twitter} alt='twitter'/></a>
                  <a href="https://www.pinterest.com"><img src={pinterest} alt='pinterest'/></a>
                </Sharetipinfo>
              }
            >
            </Sharetip>
          </Profilinfo>
        </Articleinfo>
      </Styledarticlepreview>
      <Attribution>
        <AttributionA>
            <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Article Preview.</a></h4>
        </AttributionA>
        <AttributionA>
            <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
        </AttributionA>
      </Attribution>
    </Container>
  )
}
