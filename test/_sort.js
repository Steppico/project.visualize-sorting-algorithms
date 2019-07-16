const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should be able to return even when nothing is passed", () => {
    expect(new Sort().sort()).not.to.be.undefined;
  });
  it("should be able to sort arrays", () => {
    expect(new Sort([5, 6, 2, 4, 1, 3]).sort([5, 6, 2, 4, 1, 3])).to.deep.equal(
      [1, 2, 3, 4, 5, 6]
    );
  });
  it("should return the requested value", () => {
    const array = new Sort([52, 12, 33, 92, 7, 29]);
    expect(array.returnValue(12)).to.deep.equal(12);
  });
  it("should return empty arrays", () => {
    const array = new Sort([]);
    expect(array.sort()).to.deep.equal([]);
  });
  it("should not sort arrays with length of 1", () => {
    const array = new Sort([5]);
    expect(array.sort()).to.deep.equal([5]);
  });
  it("it should be able to sort arrays with length of 2", () => {
    const array = new Sort([9, 2]);
    expect(array.sort()).to.deep.equal([2, 9]);
  });
  it("should not accept arrays with typeof element !== number", () => {
    let array = new Sort([null, NaN, undefined, 0]);
    expect(array.sort()).to.be.undefined;
    array = new Sort([NaN]);
    expect(array.sort()).to.be.undefined;
    array = new Sort([null]);
    expect(array.sort()).to.be.undefined;
    array = new Sort([false]);
    expect(array.sort()).to.be.undefined;
    array = new Sort([true]);
    expect(array.sort()).to.be.undefined;
    array = new Sort(["hello, everyone!"]);
    expect(array.sort()).to.be.undefined;
    array = new Sort([undefined]);
    expect(array.sort()).to.be.undefined;
  });
  it("but it should accept strings for returnValue", () => {
    const array = new Sort();
    expect(array.returnValue("hello, everyone!")).to.eql("hello, everyone!");
  });

  it("should be able to sort random arrays - 1", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 2", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 3", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 4", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 5", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 6", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 7", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 8", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 10; i++) {
      random = Math.ceil(Math.random() * 50);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
  it("should be able to sort random arrays - 9", () => {
    const sortMe = [];
    const sorted = [];
    let random = null;
    for (let i = 0; i < 100; i++) {
      random = Math.ceil(Math.random() * 500);
      sortMe.push(random);
      sorted.push(random);
    }
    const array = new Sort(sortMe);
    sorted.sort(function(a, b) {
      return a - b;
    });
    expect(array.sort()).to.deep.equal(sorted);
  });
});
