import axios from "axios";

export default {
  // Gets all polls
  getPolls: function() {
    return axios.get("/api/polls");
  },
  // Gets the book with the given id
  getPoll: function(id) {
    return axios.get("/api/polls/" + id);
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
  }
};