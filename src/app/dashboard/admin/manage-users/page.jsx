import ManageUsersTable from "@/components/dashboard/admin/ManageUsersTable";
import { getUsers } from "@/lib/api/users";
import React from "react";

const AdminMangeUsersPage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <ManageUsersTable users={users} />
    </div>
  );
};

export default AdminMangeUsersPage;
