import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';

export const postProject = async (procedure: any) => {
  const res = await axios.post("/procedure", procedure);
  return res.data;
}

export const getProjects = async (typeAlt: "Complex" | "Simple") => {
  const res = await axios.get(`/procedure?typeAlt=${typeAlt}`);
  return res.data;
}