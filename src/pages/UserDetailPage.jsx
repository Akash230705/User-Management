import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUserById } from "../services/api";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import "./UserDetailPage.css";

function UserDetailPage() {

    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getUser = async () => {

        try {

            setLoading(true);

            const data = await fetchUserById(id);

            setUser(data);

        } catch (error) {

            setError("Failed to fetch user details.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        getUser();

    }, [id]);

    return (

        <div className="user-details">

          <Link to="/" className="back-btn">
              ← Back to Home
          </Link>

          {loading && <Loader />}

          {error && (
              <ErrorMessage message={error} onRetry={getUser} />
          )}

          {!loading && user && (

              <div className="user-card">

                  <div className="user-header">

                      <div className="user-avatar">
                          {user.name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                          <h2>{user.name}</h2>
                          <p>User Profile</p>
                      </div>

                  </div>

                  <div className="user-info">

                      <div className="info-box">
                          <h4>Email</h4>
                          <p>{user.email}</p>
                      </div>

                      <div className="info-box">
                          <h4>Phone</h4>
                          <p>{user.phone}</p>
                      </div>

                      <div className="info-box">
                          <h4>Company</h4>
                          <p>{user.company}</p>
                      </div>

                      <div className="info-box">
                          <h4>Website</h4>
                          <a href={`https://${user.website}`} target="_blank" rel="noreferrer" > {user.website} </a>
                      </div>

                  </div>

              </div>

          )}

      </div>

    );

}

export default UserDetailPage;