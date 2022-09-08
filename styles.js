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
    max-width: 50px;

    &:first-child {
      margin-left: 0 !important;
    }

    &:hover {
      z-index: 11;
      transform: scale(1.6);
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
  padding-bottom: 10px;
  right: 0;
  top: 0;
  background-color: var(--gray);
  z-index: 9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  img {
    border-radius: 100%;
  }

  a {
    margin-right: 10px;
    font-size: 14px;
    color: var(--silver);
    text-decoration: none;
    font-weight: 700;
  }

  a:visited {
    color: var(--silver);
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
    background-color: var(--silver);
    color: black;
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
  color: var(--white);
  font-size: 26px;
  line-height: 1.4;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 34px;
    text-align: center;
    margin: 120px 0 40px;
    line-height: 1.2;
  }
`

export const Search = styled.input`
  background-color: var(--silver);
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: var(--gray);
  line-height: 2.4;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 0;

  &:focus {
    outline: solid 1px var(--gray);
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

export const Empty = styled.p`
  text-align: center;
`

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--gray);
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
      color: var(--silver);
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

export const Poster = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--gray);
  border-radius: 4px;
  list-style: none;
  text-align: center;
  flex: 1;
  min-width: 160px;
  max-width: 160px;
  min-height: 260px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  button {
    border: 0;
    border-radius: 4px;
    padding: 0.4em;
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

  p {
    padding: 0.6em;
  }
`

export const Add = styled.span`
  font-size: 10px;
  padding: 2px;
  margin: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: var(--black);

  @media (min-width: 1024px) {
    display: none;
  }
`

export const Platforms = styled.div`
  img {
    padding: 4px !important;
    border-radius: 0 !important;
  }
`

export const Footer = styled.span`
  width: 100%;
  bottom: 6px;
  left: 6px;
  font-size: 12px;
  border-top: solid 1px var(--gray);
  padding: 1em;
  text-align: center;
`

export const Baltz = styled.a`
  text-decoration: none;
  color: var(--silver);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px var(--black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: 0.3s;
  width: 200px;
  justify-content: center;
  margin-bottom: 10px;
  background-color: var(--gray);
  color: var(--white);

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
