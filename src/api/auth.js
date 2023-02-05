import axios from "axios";

export const loginRequest = async (username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auth`,
      data: {
        username,
        password,
      },
    });

    // console.log(res);
  } catch (e) {
    console.log(e);
  }
};
