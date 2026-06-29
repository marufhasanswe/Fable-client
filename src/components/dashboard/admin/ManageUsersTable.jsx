"use client";

import {
  Table,
  Input,
  Button,
  Chip,
  Select,
  Card,
  ListBox,
} from "@heroui/react";

import { Search, Trash2 } from "lucide-react";
import { Person } from "@gravity-ui/icons";

import { useState } from "react";
import { deleteUser, updateUser } from "@/lib/api/users";
import { toast } from "react-toastify";

const roles = ["user", "writer", "admin"];

export default function ManageUsersTable({ users = [] }) {
  const [search, setSearch] = useState("");

  const [roleValues, setRoleValues] = useState(
    users.reduce((acc, user) => {
      acc[user._id] = user.role;

      return acc;
    }, {}),
  );

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase()),
  );

  const changeRole = async (id, role) => {
    const res = await updateUser(id, { role: role });
    if (res.error) {
      toast.error(res.error);
    }
    if (res.modifiedCount) {
      toast.success(`Successfully user role updated to ${role}!`);
    }
  };

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");

    if (!confirmDelete) return;

    const res = await deleteUser(id);
    console.log(res);
    // if (res) {
    //   toast.success("Successfully deleted user!");
    // }

    window.location.reload();
  };

  return (
    <Card className="p-5">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold">Manage Users</h2>

          <p className="text-sm text-default-500">
            Change roles and manage accounts
          </p>
        </div>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />

          <Input
            placeholder="Search users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 md:w-80"
          />
        </div>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="users">
            <Table.Header>
              <Table.Column isRowHeader>User</Table.Column>

              <Table.Column>Email</Table.Column>

              <Table.Column>Role</Table.Column>

              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {filteredUsers.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-indigo-50 p-2">
                        <Person />
                      </div>

                      <span className="font-medium">{user.name}</span>
                    </div>
                  </Table.Cell>

                  <Table.Cell>{user.email}</Table.Cell>

                  <Table.Cell>
                    <Chip size="sm" variant="flat">
                      {roleValues[user._id]}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Select
                        className="w-40"
                        aria-label="Change user role"
                        value={roleValues[user._id]}
                        onChange={(value) => {
                          setRoleValues((prev) => ({
                            ...prev,

                            [user._id]: value,
                          }));

                          changeRole(user._id, value);
                        }}
                      >
                        <Select.Trigger>
                          <Select.Value />

                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {roles.map((role) => (
                              <ListBox.Item
                                key={role}
                                id={role}
                                textValue={role}
                              >
                                {role}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <Button
                        size="sm"
                        isIconOnly
                        color="danger"
                        className="text-red-500"
                        variant="flat"
                        onPress={() => handleDeleteUser(user._id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </Card>
  );
}
