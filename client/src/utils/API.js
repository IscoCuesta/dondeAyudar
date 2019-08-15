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

  updatePost: function(id, data){
    return axios.post("/api/posts/" + id, data);
  },

  getPosts: function(filter){
    return axios.post("/api/posts/filterPosts", filter);
  },

  saveUser: function(postData) {
    return axios.post("/api/user", postData)
  }
};
