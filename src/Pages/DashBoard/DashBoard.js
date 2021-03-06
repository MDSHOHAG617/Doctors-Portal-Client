import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin();
  return (
    <div class="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-center text-purple-500 p-2">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side ">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-72 bg-base-200 m-2 rounded text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className=" font-bold " to="/dashboard">
              My Appointments
            </Link>
          </li>
          <li>
            <Link className=" font-bold " to="/dashboard/review">
              My reviews
            </Link>
          </li>
          <li>
            <Link className=" font-bold " to="/dashboard/history">
              My History
            </Link>
          </li>
          <li>
            <Link className=" font-bold " to="/dashboard/users">
              All users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
