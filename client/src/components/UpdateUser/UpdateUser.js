import React from "react";
import "./UpdateUser.css";


const UpdateUser = (props) => (



  <div className="updateuser-area">
    <div>Update User Info Below.</div>

    <form>
      <div>
        <label >Previous: {props.oldUsername}</label>
        <input
          id="username"
          name="username"
          value={props.username}
          onChange={props.onChange}
          type="text"
        // placeholder="Full Name"
        />

      </div>
      <div>
        <label >Previous: {props.oldUseremail}</label>
        <input
          id="useremail"
          name="useremail"
          value={props.useremail}
          onChange={props.onChange}
          type="text"
        // placeholder="Email Address"
        />

      </div>

      <div>
        <label >Previous: {props.oldAdmin}</label>
        <br />
        <select
          id="useradmin"
          value={props.userAdmin}
          name="userAdmin"
          onChange={props.onChange}
        >
         {/* <option >Select</option> */}
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>

      </div>

      {/* <input
        id="useradmin"
          name="userAdmin"
          value={props.userAdmin}
          onChange={props.onChange}
          type=
          placeholder="Password"
        /> */}

      <button onClick={props.submitUpdatedUser}>
        Update
        </button>


    </form>
  </div>
);

export default UpdateUser;

