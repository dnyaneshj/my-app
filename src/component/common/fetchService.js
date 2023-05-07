import axios from "axios";

const postAPI = async (data) => {
  try {
    const payLoad = data.payLoad;
    let res = await axios.post(`${baseURL}/${data.url}`, payLoad, {
      headers: { ...getCommonHeaders() },
    });
    if (res.status === 200) {
      console.log("HTTP POST REQUEST WAS SUCCESS");
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

const getAPI = async (data) => {
  try {
    let res = await axios.get(`${baseURL}/${data.url}`, {
      headers: { ...getCommonHeaders() },
    });
    if (res.status === 200) {
      console.log("HTTP Get REQUEST WAS SUCCESS");
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteAPI = async (data) => {
  const payLoad = data.payLoad;
  try {
    let res = await axios.delete(`${baseURL}/${data.url}`, {
      headers: { ...getCommonHeaders() },
      data: payLoad,
    });
    if (res.status === 200) {
      console.log("HTTP Get REQUEST WAS SUCCESS");
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
export { postAPI, getAPI, deleteAPI };
