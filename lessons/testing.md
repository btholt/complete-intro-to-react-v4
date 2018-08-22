---
title: "Testing"
path: "/testing"
order: 13
---

This is meant to be a very brief treatise on how to do testing on React applications. Frontend Masters already has a [thorough course on how to test React applications][kcd] here from Kent C. Dodds. This will be a brief intro on how to set up Jest tests for the application we just created.

First we'll start with [Jest][jest]. Jest is the testing framework that Facebook puts out. It is not at all tied to React despite both being maintained by Facebook. It's useful for other frameworks and I use it frequently with Node.js applications.

It's useful to know that Jest is built on top of [Jasmine][jasmine]. Jasmine does the underlying testing part while Jest is the highlevel runner of the tests. Sometimes it's useful to consult the Jasmine docs too.

So let's start testing our application. Run `npm install -D jest react-test-renderer`.

react-test-renderer is a tool directly from Facebook to rendering React component for testing purposes. Super useful.

Next go into your src directory and create a folder called `__tests__`. Notice that's double underscores on both sides. Why double? They borrowed it from Python where double underscores ("dunders" as I've heard them called) mean something magic happens. In this case, Jest assumes all JS files in here are tests.

We're going to write tests for Details. Make a file called Details.test.js. In there put:

```javascript
import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});
```

`test` and `expect` come from Jasmine via Jest and are injected in the global scope. To fix your lint errors, add this your `env` in your .eslintrc.json: `"jest": true`.

Here we're doing a Jest test in which we're doing a snapshot test. As soon as you run this test the first time, it'll run and capture the output in a snapshot file (you'll see it after you run it successfully the first time.) Every time afterwards when you run it it will compare the output with this snapshot. If it changes, it'll fail the test. If you mean to change it, you just run `jest -u` and it will update the snapshots. Cool, right?

Let's go make it run first though. First we need to complete our Babel config. Jest doesn't know how to use Parcel's Babel config so we need to make ours complete. Update it to this:

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions"]
        }
      }
    ],
    "react"
  ],
  "plugins": ["transform-class-properties"],
  "env": {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
}
```

Now run `npm install -D babel-preset-env babel-plugin-transform-es2015-modules-commonjs`.

We've made it so whenever we run tests, Jest will apply these transformation. Specifically we have to make our browser code work in Node.js, hence the module transformation (since those don't work in Node yet.)

Also add this to your package.json:

```json
"jest": {
  "transformIgnorePatterns": [
    "/node_modules/(?!petfinder-client).+"
  ]
},
```

I didn't transpile my module so have Jest do it for you.

Now your snapshot test should pass. Check out that it created a `__snapshots__` directory with your snapshot in it. You should commit this file as everyone should get the same output as you.

Let's add one more test.

```javascript
test("shows modal when toggleModal is called", () => {
  const c = create(<Details search={() => {}} />);
  const instance = c.getInstance();
  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
```

This creates an instance of your component and lets your run the functions on it. I don't show you this to show you a particularly good test: testing implementation details isn't necessarily a good idea, but wanted to show you how to get a handle on an instance.

If you want to go further with testing, checkout [Enzyme][enzyme], which I taught in former versions on this course.

## 🌳 d467e575aea8ca0427ae0e06de1d8481221980e3 (branch testing)

[kcd]: https://frontendmasters.com/courses/testing-react/
[jest]: https://jestjs.io
[jasmine]: https://jasmine.github.io/
[enzyme]: http://airbnb.io/enzyme/
