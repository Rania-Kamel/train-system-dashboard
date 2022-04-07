import { useParams } from "react-router-dom";
import Profile from '../../components/articles/Profile'
import { useState } from 'react';

import avatarImage from "../../assets/avatar.jpg";


const employees = [
  {
  _id:'1',
firstName:"rania",
lastName:"kamel",
phone_number:'01234567',
nationalIdNumber:"1234567890",
// nationalId:image
personalPicture:avatarImage ,
authority:"admin",
age:'22',
gender:'Female',
address:"ghjkl",
email:"tfgyuhj@ghjk",
jobTitle:"front end"
},
{
  _id:'2',
firstName:"ishak",
lastName:"saad",
phone_number:'01234567',
nationalIdNumber:"1234567890",
// nationalId:image
personalPicture:avatarImage ,
authority:"admin",
age:'22',
gender:'Female',
address:"ghjkl",
email:"tfgyuhj@ghjk",
jobTitle:"front end"
},
]




export default function OneEmployee() {
  const { id } = useParams();
    const result = employees.find( ({_id }) => _id === id )
  
    const [value, setValue] = useState(result)
  

  return(
 
      <Profile {...value}  />
   
  );
}
