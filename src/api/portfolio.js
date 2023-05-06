import axios from "axios";

async function fetchExperiences() {
  const response = await axios.get(
    `http://localhost:3000/portfolio/experiences`
  );
  return response;
}

async function fetchProjects() {
  const response = await axios.get(`http://localhost:3000/portfolio/projects`);
  return response;
}

export default {
  fetchExperiences,
  fetchProjects,
};
