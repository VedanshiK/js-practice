// const maths=document.getElementById("maths");
// const science=document.getElementById("science");
// const sst=document.getElementById("sst");
// const english=document.getElementById("english");
// const btn=document.querySelector(".btn");
// const display=document.querySelector(".display");
// const errorMessage = document.getElementById("error-message");
// let total_marks,percent;
// function Calculate(event){
//     event.preventDefault();
//     try{
//     localStorage.setItem("math",parseFloat(maths.value)) || 0; 
//     localStorage.setItem("sci",parseFloat(science.value) || 0); 
//     localStorage.setItem("social",parseFloat(sst.value)  || 0);  
//     localStorage.setItem("eng",parseFloat(english.value) || 0);
//     const sub1=parseFloat(localStorage.getItem("sci"));
//     const sub2=parseFloat(localStorage.getItem("math"));
//     const sub3=parseFloat(localStorage.getItem("social"));
//     const sub4=parseFloat(localStorage.getItem("eng"));
//     console.log(sub1,sub2,sub3,sub4);
//     total_marks=(sub1+sub2+sub3+sub4);
//     percent=(total_marks/4).toFixed(2);
//     display.innerHTML=`You have got ${total_marks} marks out of 400 and your percentage is ${percent}%.`;
//     errorMessage.textContent = "";
//     }
//     catch(err){
//         errorMessage.textContent = err.message; 
//         display.innerHTML = "";
//     }
// }
// document.getElementById("buton").addEventListener('click',Calculate);
const calculateFormEl = document.getElementById("form-container");
const resultEl = document.getElementById("display");

const calculateMarks = (event) => {
  const maxMarks = 400;
  event.preventDefault();

  const formData = new FormData(calculateFormEl);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });
  const totalMarks = data.maths + data.science + data.sst + data.english;
  const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);
  resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
};