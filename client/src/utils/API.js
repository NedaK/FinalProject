import axios from "axios";

export default {
  // Gets all polls
  getPolls: function() {
    return axios.get("/api/polls");
  },
  // Gets the poll with the given id
  getPoll: function(id) {
    return axios.get("/api/polls/" + id);
  },
  updatePoll: function(id, vote){
    return axios.put("/api/polls/" + id, {vote})
  },
  // Deletes the book with the given id
  deletePoll: function(id) {
    return axios.delete("/api/polls/" + id);
  },
  // Saves a book to the database
  savePoll: function(pollData) {
    return axios.post("/api/polls", pollData);
  },

  saveUser: function(userData) {
    console.log("In api axios route");
    console.log(userData)
    return axios.post("/api/users", userData);
  },
  findUser: function(userEmail) {
    console.log("In api axios route");
    console.log(userEmail)
    return axios.post("/api/users/login", userEmail);
  },
  // getUserPolls: function(id){
  //   console.log("In api axios route" + id);
  //   return axios.get("/api/users/" + id);
  // },
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