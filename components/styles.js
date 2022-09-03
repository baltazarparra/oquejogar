import styled, { keyframes } from 'styled-components'

const scrolling = keyframes`
	100% {
		background-position: -100% 0;
	}
`

export const Marquee = styled.span`
  background-image: url('/brands.png');
  position: fixed;
  height: 200%;
  width: 32px;
  background-size: 32px;
  background-position: 0 50%;
  background-repeat: repeat-y;
  animation: ${scrolling} 60s linear infinite;
  transform: rotate(45deg);
  top: -100%;
  left: 110px;
  transition: 0.3s;

  &:hover {
    animation-duration: 1s;
    transform: rotate(45deg) scale(1.6);
  }
`

export const Box = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    margin-top: 150px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 16px;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #192534;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`

export const Main = styled.main`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
`

export const Footer = styled.em`
  position: fixed;
  bottom: 6px;
  left: 6px;
  font-size: 12px;
`

export const Baltz = styled.a`
  text-decoration: none;
  color: #192534;
`

export const Hero = styled.aside`
  flex: 2;
  max-width: 50%;
  background-image: url('/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin: 1em;

  @media (max-width: 1024px) {
    display: none;
  }
`
