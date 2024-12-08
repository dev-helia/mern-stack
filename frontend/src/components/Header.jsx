import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

const onLogout = () => {
  dispatch(logout());
  console.log("Logout dispatched!"); // 第二层
  dispatch(reset());
  console.log("Reset dispatched!"); // 第三层
  navigate("/login");
  console.log("Navigated to login!"); // 第四层
};

return (
  <header className="header">
    <div className="logo">
      <Link to="/">GoalSetter</Link>
    </div>
    <ul>
      {user ? (
        <li>
          <button
            className="btn"
            onClick={() => {
              onLogout();
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </>
      )}
    </ul>
  </header>
);
}

export default Header;
