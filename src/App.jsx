import React, { useState } from "react";
import { TwoButtonModal } from "./Modal";
import OneButtonModal from "./Modal";
import styled from "styled-components";
import Button from "./BtnProps";
import "./App.css";

const App = () => {
  const [input1, setInput1] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleContextMenu = () => {
    setContextMenuOpen(!contextMenuOpen);
  };

  const selectMenu = (item) => {
    setSelectedItem(item);
    setContextMenuOpen(false);
  };

  //맨위의 버튼 alert
  const handleClick = () => {
    alert("버튼을 만들어보세요");
  };

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const modalStateClose = () => {
    setModalOpen(false);
  };

  const modalStateOpen = () => {
    setModalOpen(true);
  };

  //숫자 콤마 찍고 빼기
  const handleNumberChange = (e) => {
    const inputNumber = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    const numberWithComma = inputNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리마다 콤마(,) 추가
    setNumber(numberWithComma);
  };

  const numberNotComma = () => {
    const numberToString = number.replace(/,/g, "");
    alert(`name: ${input1}, price: ${numberToString}`);
  };

  return (
    <div>
      <h1>
        Button
        <div>
          <StLargeGreenButton onClick={handleClick}>
            Large Primary Button 📌
          </StLargeGreenButton>
          <Button size="medium" content="Medium" color="green" />
          <Button size="small" content="Small" color="green" />
        </div>
        <div>
          <StLargePinkButton>Large Negative Button ✅</StLargePinkButton>
          <Button size="medium" content="Medium" color="red" />
          <Button size="small" content="Small" color="red" />
        </div>
      </h1>
      <div>
        {/* input에 내용과 prompt넣기 */}
        <h1>Input</h1>
        이름
        <StInputBox
          type="text"
          value={input1}
          onChange={handleInputChange1}
          placeholder=""
        />
        가격
        <StInputBox
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder=""
        />
        <StSaveButton onClick={numberNotComma}>저장</StSaveButton>
      </div>
      <StModalBox>
        <h1>Modal</h1>
        <div>
          {/* 버튼2개인모달 */}
          <StTwoButtonModal onClick={modalStateOpen}>
            Open Modal
          </StTwoButtonModal>
          {modalOpen && <TwoButtonModal onClose={modalStateClose} />}
        </div>
        <div>
          {/* 버튼한개인모달 */}
          <StOneButtonModal onClick={handleModalOpen}>
            Open Modal
          </StOneButtonModal>
          {isOpen && <OneButtonModal onClose={handleModalClose} />}
          {isOpen && <div onClick={handleModalClose}></div>}
        </div>
      </StModalBox>
      <div>
        <h1>Select</h1>
        <div>
          <StSelectContainer>
            <div className="select" onClick={toggleContextMenu}>
              {selectedItem ? selectedItem : "Select an option"}
            </div>
            {contextMenuOpen && (
              <div className="options-container">
                <div onClick={() => selectMenu("react")}>react</div>
                <div onClick={() => selectMenu("redux")}>redux</div>
                <div onClick={() => selectMenu("typescript")}>typescript</div>
                <div onClick={() => selectMenu("javascript")}>javascript</div>
                <div onClick={() => selectMenu("java")}>java</div>
              </div>
            )}
          </StSelectContainer>
        </div>
      </div>
    </div>
  );
};

//Select
const StSelectContainer = styled.div`
  position: relative;
  width: 200px;
  height: 30px;
`;

//Modal
const StModalBox = styled.div`
  align-items: row;
  align-content: row;
`;

const StInputBox = styled.input`
  margin: 0px 15px 0px 5px;
  border-radius: 7px;
  border: 1px solid grey;
  width: 160px;
  height: 30px;
`;

const StModalOverLay = styled.div`
  position: fixed; /* 고정 위치 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경의 색상 및 투명도 조절 */
  z-index: 999; /* 다른 요소들보다 위에 표시되도록 z-index 조절 */
  display: flex; /* 가운데 정렬을 위해 Flexbox 사용 */
  justify-content: center;
  align-items: center;
`;
const StTwoButtonModal = styled.button`
  font-size: 17px;
  background: inherit;
  border: 2px solid grey;
  width: 130px;
  height: 35px;
  box-shadow: none;
  border-radius: 7px;
  padding: 4px 10px 3px 10px;
  margin: 5px;
  background-color: rgb(107, 228, 168);
  color: rgb(4, 4, 4);
  overflow: visible;
  cursor: pointer;
  &:hover {
    background-color: #fde217;
  }
`;

//button 들

const StLargeGreenButton = styled.button`
  width: 210px;
  height: 60px;
  font-size: 16px;
  color: black;
  border-radius: 7px;
  margin: 8px;
  border: 3px solid green;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  &:hover {
    background-color: #ffe414;
  }
`;
const StLargePinkButton = styled.button`
  width: 210px;
  height: 60px;
  font-size: 16px;
  color: black;
  border-radius: 7px;
  margin: 8px;
  border: 3px solid red;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #6f2be4;
  }
`;

const StOneButtonModal = styled.button`
  font-size: 17px;
  background: inherit;
  width: 220px;
  height: 60px;
  border: 3px solid red;
  box-shadow: none;
  border-radius: 7px;
  padding: 4px 10px 3px 10px;
  margin: 5px;
  background-color: rgb(255, 255, 255);
  color: rgb(255, 68, 68);
  overflow: visible;
  cursor: pointer;
  &:hover {
    background-color: #fde217;
  }
`;

const StSaveButton = styled.button`
  width: 110px;
  height: 50px;
  font-size: 15px;
  color: #ffffff;
  border-radius: 7px;
  margin: 8px;
  border: 3px solid white;
  background-color: green;
  cursor: pointer;
  &:hover {
    background-color: #fde217;
  }
`;

export default App;
