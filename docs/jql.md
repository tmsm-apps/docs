# JQL reference

Smart Duration Field stores duration values as seconds, but Jira can parse familiar duration expressions such as `7w`, `5d`, or `4h 30m`.

## Search by duration value

Use a Smart Duration field in standard JQL comparisons:

```jql
"Analysis budget" >= 7w
```

Additional examples:

```jql
"Analysis budget" = 5d
"Analysis budget" > "1w 2d"
"Analysis budget" <= 40h
"Analysis budget" IS EMPTY
ORDER BY "Analysis budget" ASC
```

In standard JQL, Jira evaluates `w` and `d` with the default 8-hour day and
5-day week:

- `1d` equals 8 hours.
- `1w` equals 5 working days or 40 hours.

If Jira uses a non-default working calendar, use explicit hours, minutes, or
seconds in standard JQL. For example, when Jira is configured with a 10-hour
day, search for one Jira working day as `10h`:

```jql
"Analysis budget" = 10h
```

The issue editor still interprets `1d` and `1w` using Jira's global working
calendar. This restriction applies only to duration literals in standard JQL.

## Compare a duration with Time Spent

Smart Duration Field provides three JQL functions that compare the selected Smart Duration field with Jira's Time Spent value.

| Function | Matches when |
|---|---|
| `smartDurationOverrun` | Time Spent is greater than Smart Duration |
| `smartDurationRemaining` | Time Spent is lower than Smart Duration |
| `smartDurationOnTarget` | Time Spent is exactly equal to Smart Duration |

These functions filter issues. They do not return the numerical difference between the two values.

All three functions also support the app's read-only total field. For example:

```jql
issue in smartDurationOverrun("Smart Duration Total")
```

This compares Time Spent with the sum of the source fields selected in the app
settings. See [Smart Duration Total](total-estimate.md).

## Overrun

Use `smartDurationOverrun` to find issues where more time has been logged than allowed by the Smart Duration field.

```jql
issue in smartDurationOverrun("Analysis budget")
```

Example:

| Smart Duration | Time Spent | Match |
|---:|---:|---|
| 40h | 41h | Yes |
| 40h | 40h | No |
| 40h | 20h | No |

This can be used to find exceeded analysis budgets or work that took longer than expected.

## Remaining

Use `smartDurationRemaining` to find issues where Time Spent is still below the Smart Duration value.

```jql
issue in smartDurationRemaining("Analysis budget")
```

Example:

| Smart Duration | Time Spent | Match |
|---:|---:|---|
| 40h | 20h | Yes |
| 40h | 40h | No |
| 40h | 41h | No |

The function does not calculate or display the remaining duration. It only identifies issues that still have time remaining.

## On target

Use `smartDurationOnTarget` to find issues where Time Spent is exactly equal to the Smart Duration value.

```jql
issue in smartDurationOnTarget("Analysis budget")
```

Example:

| Smart Duration | Time Spent | Match |
|---:|---:|---|
| 40h | 40h | Yes |
| 40h | 39h 59m | No |
| 40h | 41h | No |

The comparison is exact and does not use a tolerance range.

## Use a custom field ID

A field can be referenced by its name or custom field ID:

```jql
issue in smartDurationOverrun("customfield_10143")
```

Use the custom field ID when multiple Smart Duration fields have the same name.

## Empty values and missing worklogs

- Issues with an empty Smart Duration field are excluded from all three comparison functions.
- Missing Time Spent is treated as zero.
- A positive Smart Duration with no worklogs matches `smartDurationRemaining`.
- A zero Smart Duration with no worklogs matches `smartDurationOnTarget`.

## Index updates

Comparison results are updated when:

- an issue is created,
- a Smart Duration value changes,
- a Smart Duration Total source selection is saved and the index is rebuilt,
- a worklog is created,
- a worklog is updated,
- a worklog is deleted.

A newly changed issue may take a short time to appear in comparison results while Jira processes the update.
