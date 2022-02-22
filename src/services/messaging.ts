import axios from "axios";

const register = async (token: string) => {
  const ret = await axios.post(`${import.meta.env.VITE_API}/register`, {
    id: token
  });

  console.log(ret, "ret");

  return ret.data;
};

const post = async (message: string) => {
  const ret = await axios.post(`${import.meta.env.VITE_API}/send`, {
    message
  });

  console.log(ret, "ret");

  return ret.data;
};

export default {
  register,
  post
};
