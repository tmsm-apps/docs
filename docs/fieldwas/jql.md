# FieldWas JQL reference

## Function syntax

```jql
issue in fieldWas(field, value, after, before, projectKey)
```

| Argument | What to enter |
| --- | --- |
| `field` | Custom-field name, or `customfield_<number>` when the name is duplicated. |
| `value` | Exact value shown by Jira, or a canonical ID when required. |
| `after` | Start of the period; this time is included. |
| `before` | End of the period; this time is excluded. |
| `projectKey` | Jira project key to search. |

## Dates and times

Use UTC dates such as `"2026-09-01"`, timezone-aware date-times such as `"2026-09-01T09:00:00Z"`, `"now"`, or elapsed periods such as `"-30m"`, `"-12h"`, `"-30d"`, and `"-4w"`.

## Examples

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY")

issue in fieldWas("Escalation labels", "customer-escalation", "-30d", "now", "SUP")

issue in fieldWas("Target release", "Release 2.0", "2026-09-01", "2026-10-01", "APP")

issue in fieldWas("Region", "Europe > Slovakia", "-30d", "now", "OPS")
```

## How values match

- Multi-value fields match while the requested value was one of the selected members.
- Labels are case-insensitive.
- Text, paragraph, and URL values must match exactly and are case-sensitive.
- Number values match numerically.
- Dates use `YYYY-MM-DD`; date-times represent an exact instant.

FieldWas respects Jira permissions. If a value has never been used in the selected project, the query returns no work items rather than an error.
