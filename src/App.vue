<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h2>Exercise 1</h2>
        <p>
          {{ text | reverseString }}
        </p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <hr />
        <h2>Exercise 2</h2>
        <p>
          {{ text | countandappend }}
        </p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr />
        <h2>Exercise 3</h2>
        <p>
          {{ computeReverse }}
        </p>
        <p>
          {{ computeCountandAppend }}
        </p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import { exerciseMixin } from "./exerciseMixin";
export default {
  filters: {
    reverseString(text) {
      var splitString = text.split(""); // var splitString = "hello".split("");
      // ["h", "e", "l", "l", "o"]

      // Step 2. Use the reverse() method to reverse the new created array
      var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
      // ["o", "l", "l", "e", "h"]

      // Step 3. Use the join() method to join all elements of the array into a string
      var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
      // "olleh"

      //Step 4. Return the reversed string
      return joinArray; // "olleh"
    }
  },
  mixins: [exerciseMixin],
  data() {
    return {
      text: "Hello"
    };
  }
};
</script>

<style></style>
