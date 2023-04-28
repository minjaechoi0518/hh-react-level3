import React from "react";
import styled from "styled-components";

export const TwoButtonModal = ({ onClose }) => {
  return (
    <StModalOverLay>
      <StModal>
        <StModalContent>
          <p>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <button className="pinkbutton" onClick={onClose}>
            닫기
          </button>
          <button className="mintbutton">확인</button>
        </StModalContent>
      </StModal>
    </StModalOverLay>
  );
};

export const OneButtonModal = ({ onClose }) => {
  return (
    <StModalOverLay>
      <StModal>
        <dStModalContent>
          <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
          <StXButton onClick={onClose}>X</StXButton>
        </dStModalContent>
      </StModal>
    </StModalOverLay>
  );
};

export default OneButtonModal;

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

const StModal = styled.div`
  background-color: #fff; /* 모달 창의 배경색 */
  border-radius: 4px; /* 모달 창의 둥근 테두리 */
  padding: 20px; /* 모달 창의 내부 여백 */
  max-width: 600px; /* 모달 창의 최대 가로 너비 */
  width: 100%; /* 모달 창의 너비를 100%로 설정하여 중앙 정렬 */
  max-height: 80vh; /* 모달 창의 최대 세로 높이 (화면 높이의 80%) */
  overflow-y: auto; /* 내용이 모달 창보다 길어질 경우 스크롤바 표시 */
`;

const StModalContent = styled.div`
  max-width: 500px;
  max-height: 500px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 4px;
`;

const StXButton = styled.button`
  top: 10px;
  right: 10px;
  border: none;
  background-color: #dadbd0;
  cursor: pointer;
  &:hover {
    background-color: #f36118;
  }
`;
