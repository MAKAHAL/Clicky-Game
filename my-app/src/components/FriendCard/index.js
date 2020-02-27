// import React from "react";
// import "./style.css";

// const FriendCard = props(
// // {
// //   name: PropTypes.string.isRequired,
// //   src: PropTypes.string.isRequired,
// //   occupation: PropTypes.string.isRequired,
// //   location: PropTypes.string.isRequired,
// // }

// // const FriendCard = ({
// //   name
  
// // }) => (
//   <div className="col-md-3 pictureCard card"  data-id={props.id} onClick={props.onClick}> 
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>{props.name}</strong> {name}
//           </li>
         
//         </ul>
//       </div>
//     </div>
//     </div>
//   );



// export default FriendCard;
import React from "react";
import "./style.css";

const FriendCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={props.onClick}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;