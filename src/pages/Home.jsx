import { useEffect, useState } from "react";
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/api";

import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import "./Home.css";

function Home() {
  // State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch Users
  const getUsers = async () => {
    try {
      setLoading(true);

      const data = await fetchUsers();
      setUsers(data);
      setError("");
    } catch (error) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Add User
  const addUser = async (user) => {
    try {
      const newUser = await createUser(user);

      setUsers([...users, newUser]);

      setShowModal(false);
    } catch (error) {
      setError("Failed to add user.");
    }
  };

  // Edit User
  const editUser = async (user) => {
    try {
      const updatedUser = await updateUser(selectedUser.id, user);

      setUsers(
        users.map((u) =>
          u.id === selectedUser.id ? updatedUser : u
        )
      );

      setShowModal(false);
      setSelectedUser(null);
    } catch (error) {
      setError("Failed to update user.");
    }
  };

  // Delete User
  const removeUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError("Failed to delete user.");
    }
  };

  // Search User
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open Add Modal
  const openAddModal = () => {
    setSelectedUser(null);
    setShowModal(true);
  };

  // Open Edit Modal
  const openEditModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Close Modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="home">

      <div className="home-header">
        <h1>User Management System</h1>

        <button onClick={openAddModal} className="add-btn">
          Add User
        </button>
      </div>

      <input type="text" placeholder="Search User..." value={search} onChange={(e) => setSearch(e.target.value)} />

      {loading && <Loader />}

      {error && (
        <ErrorMessage message={error} onRetry={getUsers} />
      )}

      {!loading &&
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} onEdit={openEditModal} onDelete={removeUser} />
        ))}

      {showModal && (
        <Modal onClose={closeModal}>
          <UserForm initialUser={selectedUser} onSubmit={selectedUser ? editUser : addUser } onCancel={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default Home;