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
  width: 24px;
  background-size: 24px;
  background-position: 0 50%;
  background-repeat: repeat-y;
  animation: ${scrolling} 60s linear infinite;
  transform: rotate(45deg) scale(1);
  top: -100%;
  left: 110px;
  transition: 0.3s;

  &:hover {
    animation-duration: 1s;
    transform: rotate(45deg) scale(1.3);
  }
`

export const Box = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
  max-width: 768px;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: var(--white);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: var(--gray);
  color: var(--silver);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  svg {
    margin-right: 10px;
  }
`

export const Main = styled.main`
  position: relative;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
`

export const Footer = styled.span`
  width: 100%;
  bottom: 6px;
  left: 6px;
  font-size: 12px;
  border-top: solid 1px var(--gray);
  padding: 0.6em;
`

export const Baltz = styled.a`
  text-decoration: none;
  color: var(--silver);
  small {
    color: #555;
    margin-left: 0.2em;
    padding-left: 0.2em;
  }
`

export const Hero = styled.aside`
  flex: 2;
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
