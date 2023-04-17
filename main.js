'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
      let movedpiece = stacks[startStack].pop()
      stacks[endStack].push(movedpiece)
  //remove from old place and add to new place (remove from end of array)


  // Your code here

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  if (stacks[endStack].length == 0) {
    return true
  } else if (stacks[endStack].slice(-1)>stacks[startStack].slice(-1)) {
    return true
  } else
    return false
  //is there sometihgn in starting stack? 
  //handle this with try again or proceed
  // if there is a peiece in the ending stack
    //is my srtarting piece smaller?  
  // Your code here

}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if (stacks['b'].length == 4 || stacks['c'].length == 4) {
    console.log('you win!')
    return true 
  } else {
    return false
  }
  //does stack c have all 4
  // Your code here

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
    if(isLegal(startStack, endStack)) {
      movePiece(startStack, endStack)
      checkForWin()
    } else {
      console.log("Try again sucka. That move is illegal!")
    }
  //check if the moove is legal using isLegal()
  //print illegal if its not
  //else i will call movePiece

  //check for a win using checkFor Win()
  //either congrats
  //keep playing


  // Your code here

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
