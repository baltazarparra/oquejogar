import styled from 'styled-components'

export const Main = styled.main`
  max-width: 100%;
  padding: 0 1em;
  max-width: 768px;
  margin: 0 auto;
`

export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: baseline;
  padding: 0;
  flex-wrap: wrap;

  li {
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    flex: 1;

    &:first-child {
      margin-left: 0 !important;
    }

    &:hover {
      transform: scale(2);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: solid 1px #a1a1a1;
  padding-bottom: 10px;
  right: 0;
  top: 0;
  background: #ccd1dd;
  z-index: 9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  img {
    border-radius: 100%;
  }

  a {
    margin-right: 10px;
    font-size: 14px;
  }

  a:visited {
    color: #192534;
  }

  section {
    display: flex;
    align-items: center;
  }

  button {
    font-family: inherit;
    border: 0;
    margin-left: 2em;
    border-radius: 4px;
    padding: 0.4em 1em;
    cursor: pointer;
  }
`

export const Username = styled.a`
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
  margin-right: 0 !important;
  padding-right: 10px;

  @media (min-width: 1024px) {
    max-width: 100%;
  }
`

export const Title = styled.h1`
  color: #192534;
  font-size: 20px;
  line-height: 1.1;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 30px;
    text-align: center;
    margin: 120px 0 40px;
  }
`

export const Search = styled.input`
  background-color: rgba(217, 217, 217, 70%);
  border-radius: 3px;
  border: solid 1px #192534;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  color: #192534;
  line-height: 2;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;

  &:focus {
    outline: solid 1px #192534;
  }
`

export const Results = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (min-width: 1024px) {
    margin: 40px 0;
  }
`

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #d9d9d9;
  border-radius: 4px;
  list-style: none;
  text-align: center;
  flex: 1;
  min-width: 160px;
  max-width: 160px;
  min-height: 260px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  button {
    border: 0;
    border-radius: 4px;
    padding: 0.4em;
  }

  &:before {
    content: '';
    opacity: 0;
    position: absolute;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    &:before {
      content: 'adicionar';
      opacity: 1;
      color: white;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: all 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }

  img {
    border-radius: 13px !important;
    padding: 10px !important;
  }
`

export const Genres = styled.ul`
  font-size: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  align-items: center;
`

export const Tag = styled.li`
  margin: 0 3px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
`

export const Platforms = styled.div`
  img {
    padding: 4px !important;
    border-radius: 0 !important;
  }
`

export const Anchor = styled.a`
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1em 0;
  text-align: center;
  background-color: #bfc3cd;
  cursor: pointer;
  border-top: solid 1px #8a90a1;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #8a90a1;
  }
`

export const Footer = styled.span`
  width: 100%;
  bottom: 6px;
  left: 6px;
  font-size: 12px;
  border-top: solid 1px #a1a1a1;
  padding: 1em;
  text-align: center;
`

export const Baltz = styled.a`
  text-decoration: none;
  color: #192534;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #192534;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: 0.3s;
  width: 200px;
  justify-content: center;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  svg {
    margin-right: 10px;
  }
`

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Link = styled.button`
  margin: 0 !important;
`
