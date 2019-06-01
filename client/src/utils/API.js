import axios from "axios";

export default {
  // Gets all polls
  // getPolls: function() {
  //   return axios.get("/api/polls");
  // },

  getOpenPolls: function() {
    return axios.get("/api/polls");
  },
  // Gets the poll with the given id
  getPoll: function(id) {
    return axios.get("/api/polls/" + id);
  },
  getClosedPolls: function() {
    return axios.get("/api/polls/closed/");
  },
  //update closed polls
  updateClosedPolls: function(){
    return axios.put("/api/polls/");
  },

  //update the poll with given id and vote
  updatePoll: function(id, vote){
    return axios.put("/api/polls/" + id, {vote});
  },
  // Deletes the poll with the given id
  deletePoll: function(id) {
    return axios.delete("/api/polls/" + id);
  },
  // Saves a pollto the database
  savePoll: function(pollData) {
    return axios.post("/api/polls", pollData);
  },

  saveUser: function(userData) {
    console.log("In api axios route");
    console.log(userData)
    return axios.post("/api/users/signup", userData);
  },
  findUser: function(userEmail) {
    console.log("In api axios route");
    console.log(userEmail)
    return axios.post("/api/users/login", userEmail);
  },
  

  //get all polls by specific user id
  getUserPolls: function(authorId){
    console.log("In api axios route" + authorId);
    return axios.get("/api/polls/" + authorId);
  },

  getUserData: function(userID){
    console.log("In api axios route");
    console.log(userID)
    console.log(userID._id)
    return axios.get("/api/users/login/" + userID);
  },
  getProfile: function (token){
    return axios.get("/api/users/profile", {
      headers: { Authorization: 'Bearer ' + token }
    });
  }
};