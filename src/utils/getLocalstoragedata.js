// create localstorage data
export const postLocal = (params) => {
  return localStorage.setItem("token", JSON.stringify(params));
};

// get localstroage data
export const GetLocal = () => {
  return JSON.parse(localStorage.getItem("token"));
};

// delete localstorage data
export const DeleteLocal = () => {
  localStorage.clear();
  localStorage.removeItem("token");
};
