# FieldWas JQL reference

## Function syntax

```jql
issue in fieldWas(field, value, after, before, projectKey)
```

| Argument | What to enter |
| --- | --- |
| `field` | Custom-field name, or `customfield_<number>` when the name is duplicated. |
| `value` | Exact value shown by Jira, or a canonical ID when required. |
| `after` | Start of the period. This time is included. |
| `before` | End of the period. This time is excluded. |
| `projectKey` | Jira project key to search. |

A work item matches when it held the requested value at any time from `after`
up to, but not including, `before`.

## Dates and times

| Value | Meaning |
| --- | --- |
| `"2026-09-01"` | UTC midnight on 1 September 2026 |
| `"2026-09-01T09:00:00Z"` | UTC date and time |
| `"2026-09-01T11:00:00+02:00"` | Date and time with an offset |
| `"now"` | Current time |
| `"-30m"`, `"-12h"`, `"-30d"`, `"-4w"` | 30 minutes, 12 hours, 30 days, or 4 weeks ago |

Date-time values must include `Z` or an explicit numeric timezone offset.

## Common searches

Find a select-list value in the last 30 days:

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY")
```

Find a label that was later removed:

```jql
issue in fieldWas("Escalation labels", "customer-escalation", "-30d", "now", "SUP")
```

Find a version during a release period:

```jql
issue in fieldWas("Target release", "Release 2.0", "2026-09-01", "2026-10-01", "APP")
```

For a cascading select, use the parent name for any child, or `Parent > Child`
for one exact path:

```jql
issue in fieldWas("Region", "Europe > Slovakia", "-30d", "now", "OPS")
```

## How values match

- Multi-value fields match while the requested value was one of the selected
  members.
- Labels are case-insensitive.
- Text, paragraph, and URL values must match exactly and are case-sensitive.
- Number values match numerically.
- Dates use `YYYY-MM-DD`; date-times represent an exact instant.

FieldWas asks for a canonical ID rather than guessing when Jira cannot uniquely
resolve a field or value name.

If a value has never been used in the selected project, the query returns no
work items rather than an error.
