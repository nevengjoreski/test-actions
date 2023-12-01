const analyze = [
    "@semantic-release/commit-analyzer",
    {
        "preset": "conventionalcommits",
        "releaseRules": [
            {
                "type": "refactor",
                "release": "patch"
            },
            {
                "type": "docs",
                "release": "patch"
            },
            {
                "type": "test",
                "release": "patch"
            },
            {
                "type": "style",
                "release": "patch"
            },
            {
                "type": "perf",
                "release": "patch"
            },
            {
                "type": "ci",
                "release": "patch"
            },
            {
                "type": "build",
                "release": "patch"
            },
            {
                "type": "chore",
                "release": "patch"
            }
        ]
    }
]

const releaseNotes = [
    "@semantic-release/release-notes-generator",
    {
        "preset": "conventionalcommits",
        "presetConfig": {
            "types": [
                {
                    "type": "feat",
                    "section": ":sparkles: New Features",
                    "hidden": false
                },
                {
                    "type": "fix",
                    "section": ":bug: Bug Fixes",
                    "hidden": false
                },
                {
                    "type": "docs",
                    "section": ":memo: Documentation",
                    "hidden": false
                },
                {
                    "type": "refactor",
                    "section": ":zap: Refactors",
                    "hidden": false
                },
                {
                    "type": "perf",
                    "section": ":zap: Performance Improvements",
                    "hidden": false
                },
                {
                    "type": "test",
                    "section": ":test_tube: Tests",
                    "hidden": false
                },
                {
                    "type": "ci",
                    "section": ":repeat: CI",
                    "hidden": false
                },
                {
                    "type": "chore",
                    "section": ":zap: Performance Improvements",
                    "hidden": false
                }
            ]
        }
    }
]

const changelog = [
    '@semantic-release/changelog',
    {
        changelogFile: 'CHANGELOG.md'
    }
]

const git = [
    "@semantic-release/git",
    {
        "assets": [
            "CHANGELOG.md"
        ],
        "message": "chore(release): version ${nextRelease.version} [skip ci] \n\n${nextRelease.notes}"
    }
]
const branches = [
        "main"
]

module.exports = {
    "branches": branches,
    "plugins": [
        analyze,
        releaseNotes,
        changelog,
        git,
        "@semantic-release/github"
    ]
}
