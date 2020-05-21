import React from "react";

const ContactList = (props) => {
  // let contact1 = contacts;
  // const deleteAllContact = () => {
  //   alert("work in progress");
  //   contact1 =[];
  // }
  const {contacts,deleteContact} = props;

  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
        {contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td onClick={()=>deleteContact(contact.id)}>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// const ContactList = ({ contacts }) => {
//   // let contact1 = contacts;
//   // const deleteAllContact = () => {
//   //   alert("work in progress");
//   //   contact1 =[];
//   // }

//   return (
//     <table className="contacts-table">
//       <tbody>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           {/* <th>Actions</th> */}
//         </tr>
//         {contacts.map((contact, i) => (
//           <tr key={i}>
//             <td>{contact.name}</td>
//             <td>{contact.email}</td>
//             {/* <td onClick={deleteAllContact.bind(this)}>Clear All Contacts</td> */}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

export default ContactList;
