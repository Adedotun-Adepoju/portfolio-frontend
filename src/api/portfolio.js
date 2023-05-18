import axios from "axios";

async function fetchExperiences() {
  const response = await axios.get(
    `https://portfolio-backend-c3wk.onrender.com/portfolio/experiences`
  );
  return response;
}

async function fetchProjects() {
  const response = await axios.get(
    `https://portfolio-backend-c3wk.onrender.com/portfolio/projects`
  );
  return response;
}

export default {
  fetchExperiences,
  fetchProjects,
};
