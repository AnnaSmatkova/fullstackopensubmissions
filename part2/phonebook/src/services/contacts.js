import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};

const deleteContact = id => {
  const url = baseUrl + "/" + id;
  const request = axios.delete(url);
  return request;
};

const changeNumber = changedPerson => {
  const url = baseUrl + "/" + changedPerson.id;
  const request = axios.put(url, changedPerson);
  return request.then(response => response.data);
};

export default { getAll, create, deleteContact, changeNumber };
