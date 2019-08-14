import axios from "axios";

export default {
  getOrgs: function() {
    return axios.get("/api/orgs");
  },
  
  getOrgUid: function(firebaseUid) {
    return axios.post("/api/orgs/uid", firebaseUid);
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

  getPostDetails: function(id){
    return axios.get("/api/posts/" + id);
  },

  getOrgPosts: function(orgId) {
    return axios.post("/api/posts/getOrgPosts/", orgId);
  },

  saveUser: function(postData) {
    return axios.post("/api/user", postData)
  }
};
