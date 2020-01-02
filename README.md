
FYI this course has been updated. See the updated, [Complete Intro to React, v5](https://github.com/btholt/complete-intro-to-react-v5)

# Welcome to the Complete Intro to React v4 and Intermediate React v1!

[See the course website here][v4].

This course was written for and recorded by [Frontend Masters][fem] as the [Complete Intro to React v4][course] and [Intermediate React][course-intermediate] courses. The code here is licensed under the Apache 2.0 license and the [course notes][v4] are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.

## Important Note About the Petfinder API

__This course now uses an internal mock of the Petfinder API.__ 

The Petfinder API was updated to v2, and the v1 API (used in this course) was deprecated. The Petfinder Client API library was updated to return hardcoded, mock results to simulate the Petfinder API live response.

Don't worry, all course code still works as in the videos! 😀

**Note: If you started the course before April 2nd, 2019**, you'll need to update your Petfinder Client (petfinder-client) to `v1.0.1` in your package.json, delete your package-lock.json and run `npm install`. See: https://github.com/btholt/complete-intro-to-react-v4/blob/master/package.json#L38

## Debugging

Parcel is an ever evolving project that's just getting better. If you run into problems with it not respecting changes (particularly to your `.babelrc` or `.env` files) then delete the `dist/` and the `.cache/` directories. You can do this in bash by running from the root directoy of your project `rm -rf dist/ .cache/` or just by deleting those directories in your editor. This will force Parcel to start over and not cache anything.

See [this issue](https://github.com/btholt/complete-intro-to-react-v4/issues/3#issuecomment-425124265) for more specific instructions.

If you run into anything else, open an issue and we'll try to clarify or help.

[v4]: https://bit.ly/react-v4
[fem]: https://frontendmasters.com/
[course]: https://frontendmasters.com/courses/complete-react-v4/
[course-intermediate]: https://frontendmasters.com/courses/intermediate-react/
