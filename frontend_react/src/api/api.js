const baseurl = "http://localhost:4000";
const defaultHeaders = {
  "Content-type": "application/json",
  "Accept": "application/json",
};

export const addNewCar = (car) => {
  return fetch(baseurl + "/api/car", {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(car),
  });
};


export const getAllCars = (value) => {
    return fetch(baseurl + `/api/car?isSold=${value}`, {
      method: "GET",
      headers: defaultHeaders,
    });
  };
  
  export const buyCar = (id) => {
    return fetch(baseurl + `/api/car/sold/${id}`, {
      method: "PUT",
      headers: defaultHeaders,
    });
  };