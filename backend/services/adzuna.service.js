import axios from "axios";

const fetchJobs = async (searchQuery) => {
  try {
    const response = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/in/search/1`,
      {
        params: {
          app_id: process.env.APPLICATION_ID,
          app_key: process.env.ADZUNA_API_KEY,
          what: searchQuery,
          results_per_page: 20,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    throw new Error(
      `Failed to fetch jobs: ${
        error.response?.data?.message || error.message
      }`
    );
  }
};

export default fetchJobs;