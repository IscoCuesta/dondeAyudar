import axios from "axios";

export default {
  getOrgs: function() {
    return axios.get("/api/orgs");
  },

  getOrgDetails: function(id) {
    return axios.get("/api/orgs/" + id);
  },

  saveOrg: function(orgData) {
    return axios.post("/api/orgs", orgData);
  },

  savePost: function(postData) {
    return axios.post("/api/posts", postData)
  },

  saveUser: function(postData) {
    return axios.post("/api/user", postData)
  }
};
