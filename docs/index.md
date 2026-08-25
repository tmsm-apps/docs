# Smart Duration Field for Jira

Enter, display, and search Jira durations using familiar values such as `2w`, `5d`, `4h`, or `30m`.

Smart Duration Field is a Forge app for Jira Cloud that stores durations as seconds while presenting them in a format that people can easily understand and edit.

[Create your first field](getting-started.md){ .md-button .md-button--primary }
[Jira working-time calendar](settings.md){ .md-button }

## Key features

- Enter durations using weeks, days, hours, minutes, and seconds.
- Combine units, for example `1w 2d 4h 30m`.
- Automatically use Jira's global working hours per day and working days per week.
- Search duration values with JQL.
- Compare Smart Duration values with Jira Time Spent.
- Add several role estimates into one read-only Smart Duration Total.
- Use the field on create, edit, transition, and issue view screens.
- Export the formatted duration value.

## Common setup

A team can create several Smart Duration fields for different kinds of work, for example:

- **Analysis estimate**
- **Development estimate**
- **Test estimate**

The app's read-only **Smart Duration Total** field can add them together. Empty
estimates count as zero, and the total can also be compared with Time Spent. See the
[Smart Duration Total guide](total-estimate.md).

## Supported input

| Input | Default stored value |
|---|---:|
| `2w` | 80 hours |
| `5d` | 40 hours |
| `4h` | 4 hours |
| `30m` | 30 minutes |
| `1w 2d 4h` | 60 hours |

The examples use the default configuration of 8 working hours per day and 5 working days per week.

## JQL examples

Search for work items using familiar duration values:

```jql
"Analysis budget" >= 7w
```

Compare the field with Jira Time Spent.

Find work items that exceeded their analysis budget:

```jql
issue in smartDurationOverrun("Analysis budget")
```

Find work items that still have time remaining:

```jql
issue in smartDurationRemaining("Analysis budget")
```

Find work items where Time Spent exactly matches the budget:

```jql
issue in smartDurationOnTarget("Analysis budget")
```

[See the full JQL reference](jql.md) for detailed behavior, examples, and edge cases.

## Administration

- [Create a Smart Duration custom field](getting-started.md)
- [Use Jira's working-time calendar](settings.md)
- [Configure Smart Duration Total for several role estimates](total-estimate.md)

!!! note

    Smart Duration Field is currently under development. Features and documentation may change before the Marketplace release.
