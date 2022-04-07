import OCForm from "../../components/OCForm";
import * as Yup from "yup";
import { useParams } from "react-router";
import React, { useState } from 'react';


const inputs = [
    {
        id: "firstName",
        validation: Yup.string().min(2).max(30).required("first name is required"),
        initialValue: "",
        label: "first name ",
        type: "text",
      },
      {
        id: "lastName",
        validation: Yup.string().min(2).max(30).required("last name is required"),
        initialValue: "",
        label: "last name ",
        type: "text",
      },
      {
        id: "email",
        validation: Yup.string().min(7).max(30).required("email is required"),
        initialValue: "",
        label: "email",
        type: "text",
      },
      {
        id: "phone_number",
        validation: Yup.string().min(11).required("phone is required"),
        initialValue: "",
        label: "phone",
        type: "text",
      },
      {
        id: "nationalIdNumber",
        validation: Yup.string().min(0).max(14).required("nationalIdNumber is required"),
        initialValue: "",
        label: "nationalIdNumber",
        type: "text",
      },
      {
        id: "nationalId",
        validation: Yup.mixed().required("nationalId is required"),
        initialValue: "",
        label: "nationalId",
        type: "file",
      },
      {
        id: "personalPicture",
        validation: Yup.mixed().required("personalPicture is required"),
        initialValue: "",
        label: "personal Picture",
        type: "file",
      },
      {
        id: "authority",
        validation: Yup.string().min(0).max(30).required("authority is required"),
        initialValue: "",
        label: "authority",
        type: "text",
      },
      {
        id: "password",
        validation: Yup.string().min(0).max(30).required("password is required"),
        initialValue: "",
        label: "password",
        type: "text",
      },
      {
        id: "address",
        validation: Yup.string().min(0).max(30).required("address is required"),
        initialValue: "",
        label: "address",
        type: "text",
      },
     
      {
        id: "gender",
        validation: Yup.string()
          .oneOf(["male", "female"])
          .required("gender is required"),
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
        initialValue: "",
        label: "gender",
        type: "text",
      },
    
      {
        id: "age",
        validation: Yup.number().min(0).max(2).required("age is required"),
        label: "age",
        type: "number",
        initialValue: '',
      },
      {
        id: "jobTitle",
        validation: Yup.string().min(4).max(30).required("job title is required"),
        initialValue: "",
        label: "job title",
        type: "text",
      },
     
];

export default function EditEmployee() {
  // const { id } = useParams();
  const [values, setValues] = useState();
  const [inputsData, setInputsData] = useState([...inputs]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   authorizedAPIs
  //     .get(`/employee/getOne/${id}`)
  //     .then((res) => {
  //      console.log({res});
        
  //      // console.log(res.data.getOneModel.endDate);
  //       var date = new Date(res.data.getOneModel.birthdate)
  //         .toISOString()
  //         .substr(0, 10);
  //       res.data.getOneModel.birthdate = date;

  //       setValues(res.data.getOneModel);
       
  //       inputs.forEach(
  //         (item) => (item.initialValue = res.data.getOneModel[item.id])
  //       );
  //       setInputsData(inputs);

        
        
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [ inputsData]);

  // const handleUpdate = async (values , { resetForm }) => {
   
  //   const birthdate = new Date(values.birthdate).getTime();
  //   values.birthdate = birthdate
  //   console.log(values);
  //   await authorizedAPIs
  //     .put("/employee/edit",values)
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(showAlert("this news is updated successfully", "success"));
  //        resetForm();

  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  

  return(
      <OCForm
      //  handleSubmit={handleUpdate}
        inputsProps={inputsData}
        title="Edit employee "
        submitLabel="Edit employee"
      />
      
  );
}
