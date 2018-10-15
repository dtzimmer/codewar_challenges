let opposite_num = require("../Level_8_Katas/opposite_num.js");
let assert = require("assert");

describe("CodeWars Challenges", function() {
  describe("Opposite Number", function() {
    it("should convert a number to its inverse", function() {
      assert.equal(-5, opposite_num.number(5));
    });
  });
});
