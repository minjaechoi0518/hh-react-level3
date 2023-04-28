import React from "react";

// 버튼 컴포넌트
const Button = ({ size, content, color }) => {
  const buttonStyle = {
    fontSize: size === "small" ? "14px" : size === "medium" ? "16px" : "20px", // 크기에 따른 폰트 크기 설정
    width: size === "small" ? "110px" : size === "medium" ? "130px" : "190px",
    height: size === "small" ? "50px" : size === "medium" ? "60px" : "70px",
    margin:
      size === "small"
        ? "10px 5px 5px 5px"
        : size === "medium"
        ? "8px 8px 8px 8px"
        : "8px",
    padding:
      size === "small"
        ? "4px 8px"
        : size === "medium"
        ? "8px 16px"
        : "12px 24px", // 크기에 따른 패딩 설정
    backgroundColor: color, // 컬러 props 적용
    border: "2px solid #ffffff",
    color: "#fff", // 텍스트 색상은 항상 흰색
    borderRadius: "7px", // 버튼의 둥근 모서리 설정
    cursor: "pointer", // 커서 스타일 설정
  };

  return <button style={buttonStyle}>{content}</button>;
};
export default Button;
// // 버튼을 사용하는 부모 컴포넌트
// const App = () => {
//   return (
//     <div>
//       <Button size="small" content="Small" color="blue" />
//       <Button size="medium" content="Medium" color="green" />
//       <Button size="large" content="Large Button" color="white" />
//     </div>
//   );
// };

// export default App;
