// import React, { useState } from "react";
// import "./Card.css";
// import { motion, AnimateSharedLayout } from "framer-motion";
// // parent Card

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <AnimateSharedLayout>
//       {expanded ? (
//         <SelectCard param={props} setExpanded={() => setExpanded(false)} />
//       ) : (
//         <CompactCard param={props} setExpanded={() => setExpanded(false)} />
//       )}
//     </AnimateSharedLayout>
//   );
// };

// // Compact Card
// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       layoutId="expandableCard"
//       onClick={setExpanded}
//     >
//       <div className="codeBox">

//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <span>{param.img}</span>
//       </div>
//     </motion.div>
//   );
// }

// // Expanded Card
// function SelectCard({ param, setExpanded }) {
//   const data = {

//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       layoutId="expandableCard"
//     >

//       <span>{param.title}</span>
//     </motion.div>
//   );
// }



// export default Card;
