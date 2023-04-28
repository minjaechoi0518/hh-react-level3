// import styled from "styled-components";

// const [contextMenuOpen, setContextMenuOpen] = useState(false);
// const [selectedItem, setSelectedItem] = useState(null);

// const toggleContextMenu = () => {
//   setContextMenuOpen(!contextMenuOpen);
// };

// const selectMenu = (item) => {
//   setSelectedItem(item);
//   setContextMenuOpen(false);
// };

// return (
//   <div>
//     <StSelectContainer>
//       <div className="select" onClick={toggleContextMenu}>
//         {selectedItem ? selectedItem : "Select an option"}
//       </div>
//       {contextMenuOpen && (
//         <div className="options-container">
//           <div onClick={() => selectMenu("react")}>react</div>
//           <div onClick={() => selectMenu("redux")}>redux</div>
//           <div onClick={() => selectMenu("typescript")}>typescript</div>
//           <div onClick={() => selectMenu("javascript")}>javascript</div>
//           <div onClick={() => selectMenu("java")}>java</div>
//         </div>
//       )}
//     </StSelectContainer>
//   </div>
// );
