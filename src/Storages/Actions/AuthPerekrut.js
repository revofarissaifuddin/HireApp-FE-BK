import axios from "axios";

export const registerUserPerekrut = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register/recruiter`, data);
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    // navigate("/login");
  } catch (err) {
    console.log("registerUser error");
    console.log(err);
  }
};

export const loginUserPerekrut = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("email", user.email);
    localStorage.setItem("nama", user.nama);
    localStorage.setItem("photo", user.photo);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/edit/home-profile-corporate");
  } catch (err) {
    console.log("loginUser error");
    console.log(err);
  }
};

