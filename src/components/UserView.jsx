import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./UserView.css";

function UserView() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/users/${id}`
                );

                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!user) {
        return <h2>User Not Found</h2>;
    }

    return (
        <div className="view-page">
            <div className="view-form">

                <div className="view-header">
                    <div className="profile-avatar">
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                    <h2>User Details</h2>
                </div>

                <form>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={user.name}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={user.email}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={user.phone}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label>Company</label>
                        <input
                            type="text"
                            value={user.company}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label>Website</label>
                        <input
                            type="text"
                            value={user.website}
                            readOnly
                        />
                    </div>

                    <button
                        type="button"
                        className="back-btn"
                        onClick={() => navigate("/")}
                    >
                        ← Back
                    </button>

                </form>

            </div>
        </div>
    );
}

export default UserView;