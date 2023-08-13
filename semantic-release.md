
### @semantic-release/commit-analyzer
It determines the type of our release (e.g. major, minor, patch) by analyzing commits with conventional-changelog. semantic-release uses Angular Commit Message Conventions by default.

### @semantic-release/release-notes-generator
It generates the release notes for the changelog.

### @semantic-release/changelog
It creates and updates the changelog file, with the content created by the release-notes-generator in the previous step.

### @semantic-release/npm
It publishes the npm package

### @semantic-release/github
It publishes the GitHub release and comment.

### @semantic-release/git
It commits the release artifacts to the project's Git repository. In this example we're committing the changelog file and all files inside the dist folder. We're also defining the message for the release commit.

Note: [skip ci] in the commit message is used in order to not trigger a new build.