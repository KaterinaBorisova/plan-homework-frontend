import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const MyPlans = ({ text, updatingInInput, deletPlan }) => {
   return (
      <div>
         <p>{text}</p>
         <AiFillEdit onClick={updatingInInput}></AiFillEdit>
         <AiFillDelete onClick={deletPlan}></AiFillDelete>
      </div>
   )
}