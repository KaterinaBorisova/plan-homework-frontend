import axios from "axios"

const getAllPlans = (setPlan) => {
   axios.get("https://homework-plane.onrender.com")
      .then(({ data }) => {
         console.log(data)
         setPlan(data);
      })
}

const addPlan = (title, setTitle, setPlan) => {
   axios.post("https://homework-plane.onrender.com/savePlans", { title })
      .then((data) => {
         console.log(data)
         setTitle("")
         getAllPlans(setPlan)
      })
}

const editPlan = (planId, title, setTitle, setPlan, setEditing) => {
   axios.post("https://homework-plane.onrender.com/editPlan", { _id: planId, title })
      .then((data) => {
         console.log(data)
         setTitle("")
         setEditing(false)
         getAllPlans(setPlan)
      })
}

const deletPlan = (_id, setPlan) => {
   axios.post("https://homework-plane.onrender.com/deletPlan", { _id })
      .then((data) => {
         console.log(data)
         getAllPlans(setPlan)
      })
}

export { getAllPlans, addPlan, editPlan, deletPlan };
//https://homework-plane.onrender.com