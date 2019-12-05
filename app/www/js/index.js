/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  initialize: function() {
    generateTarget();
    document
      .getElementById("enter")
      .addEventListener("click", enterValue, false);
  }
};
function enterValue() {
  var guess = parseInt(document.getElementById("guess").value, 10);
  if (guess > 10 || guess < 1) {
    document.getElementById("answer").innerHTML = "Invalid Guess";
  } else {
    var count = document.getElementById("count").innerHTML;
    count++;
    document.getElementById("count").innerHTML = count.toString();
    var target = document.getElementById("target").innerHTML;
    if (guess == target) {
      document.getElementById("answer").innerHTML = "Correct";
      document.getElementById("last").innerHTML = count.toString();
      navigator.vibrate(3000);
      alert("You are correct! You took " + count.toString() + " guesses!");
      count = 0;
      document.getElementById("count").innerHTML = count.toString();
      generateTarget();
    } else {
      document.getElementById("answer").innerHTML = "Incorrect";
    }
  }
}
function generateTarget() {
  var target = Math.floor(Math.random() * 9 + 1);
  document.getElementById("target").innerHTML = target.toString();
}

app.initialize();
