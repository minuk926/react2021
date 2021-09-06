//import logo from './logo.svg';
//import './App.scss';
//import './App.scss';

import styles from "./App.module.css";
import Button from "./components/Button";
import styled from "styled-components";
import StyledButton from "./components/StyledButton";
import EmotionButton from "./components/EmotionButton";

const PrimaryStyledButton = styled(StyledButton)`
    background: palevioletred;
    color: white;
`;

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['header']}>
          <Button>Button</Button>
          <StyledButton primary>StyledButton</StyledButton>
          <PrimaryStyledButton>SPrimary버튼</PrimaryStyledButton>
          <StyledButton as='a' href="/">StyledButton</StyledButton>
          <EmotionButton primary>E버튼</EmotionButton>
      </header>
    </div>
  );
}

export default App;
