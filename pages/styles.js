import styled from 'styled-components'

export const Main = styled.main`
  max-width: 768px;
  margin: 0 auto;
`

export const List = styled.ul`
  display: flex;
  text-align: center;
  align-items: baseline;
  padding: 0;
  position: sticky;
  top: 20px;

  li {
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: 0.3s;

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

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;

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
`

export const Title = styled.h1`
  color: #192534;
  font-size: 36px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 0;
`

export const Search = styled.input`
  background-color: rgba(217, 217, 217, 70%);
  border-radius: 3px;
  border: solid 1px #192534;
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  color: #192534;
  line-height: 2;
  width: 100%;

  &:focus {
    outline: solid 1px #192534;
  }
`

export const Results = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 100px;
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d9d9d9;
  border-radius: 4px;
  list-style: none;
  text-align: center;
  width: 160px;
  min-height: 260px;
  margin: 1em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  button {
    border: 0;
    border-radius: 4px;
    padding: 0.4em;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    border-radius: 4px !important;
    padding: 6px !important;
  }
`

export const Anchor = styled.a`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1em;
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
