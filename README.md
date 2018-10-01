# Welcome to the Complete Intro to React v4 and Intermediate React v1!

[See the course website here][v4].

This course was written for and recorded by [Frontend Masters][fem] as the [Complete Intro to React v4][course] and [Intermediate React][course-intermediate] courses. The code here is licensed under the Apache 2.0 license and the [course notes][v4] are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.

## Debugging

Parcel is an ever evolving project that's just getting better. If you run into problems with it not respecting changes (particularly to your `.babelrc` or `.env` files) then delete the `dist/` and the `.cache/` directories. You can do this in bash by running from the root directoy of your project `rm -rf dist/ .cache/` or just by deleting those directories in your editor. This will force Parcel to start over and not cache anything.

See [this issue](https://github.com/btholt/complete-intro-to-react-v4/issues/3#issuecomment-425124265) for more specific instructions.

If you run into anything else, open an issue and we'll try to clarify or help.

[v4]: https://bit.ly/react-v4
[fem]: https://frontendmasters.com/
[course]: https://frontendmasters.com/courses/complete-react-v4/
[course-intermediate]: https://frontendmasters.com/courses/intermediate-react/
