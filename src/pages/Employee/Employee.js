import EnhancedTable from "../../components/Table/table";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import avatarImage from "../../assets/avatar.jpg";


const intialHeadCells = [
  {
    id: "personalPicture",
    numeric: false,
    label: "avatar",
    type: "file",
  },
  {
    id: "fullName",
    numeric: false,
    label: "full Name",
  },

  {
    id: "jobTitle",
    numeric: false,
    label: "job title",
  },
];

// const employees = [
//   {
//     _id: 1,
//     personalPicture: avatarImage,
//     firstName: "rania",
//     lastName: "kamel",
//     jobTitle: "front end",
//   },
//   {
//     _id: 2,
//     personalPicture: avatarImage,
//     firstName: "ishak",
//     lastName: "saad",
//     jobTitle: "full stak",
//   },
// ];

export default function Employee() {
  employees.forEach((e) => (e.fullName = e.firstName + " " + e.lastName));

  

  return (
    <div>
      <Button variant="contained" component={Link} to="/employee/add-employee">
        Add employee
      </Button>

      <EnhancedTable
        withEdit
        // handleDeleteAPI={handleDelete}
        initialRows={employees}
        headCells={intialHeadCells}
        path={"/employee/"}
      />
    </div>
  );
}
