# FieldWas JQL reference

## Function syntax

```jql
issue in fieldWas(field, value, after, before[, projectKeys])
```

| Argument | What to enter |
| --- | --- |
| `field` | Custom-field name, or `customfield_<number>` when the name is duplicated. |
| `value` | Exact value shown by Jira, or a canonical ID when required. |
| `after` | Start of the period; this time is included. |
| `before` | End of the period; this time is excluded. |
| `projectKeys` | Optional. One Jira project key, or up to ten uppercase keys separated by commas. Omit it to use every project configured for this field by the administrator. |

## Dates and times

Use UTC dates such as `"2026-09-01"`, timezone-aware date-times such as `"2026-09-01T09:00:00Z"`, `"now"`, or elapsed periods such as `"-30m"`, `"-12h"`, `"-30d"`, and `"-4w"`.

## Project scope

Omit the fifth argument to search every project included in the field's administrator-configured coverage:

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now")
```

To narrow the query, put a comma-separated project list inside the final quoted argument. Existing single-project queries continue to work.

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY, OPS, CRM")
```

You can enter up to ten unique project keys. Spaces after commas are accepted. Every requested project must be part of the field's administrator-configured coverage.

## Examples

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY")

issue in fieldWas("Customer tier", "Gold", "-30d", "now")

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

FieldWas respects Jira permissions. If a value has never been used in the selected project scope, the query returns no work items rather than an error.

## Result preparation

FieldWas reads the history index prepared by the administrator. It does not scan Jira changelogs when a user runs JQL.

- A query with up to 1,000 matching work items returns immediately.
- A query with more than 1,000 matches needs a constant-size Jira projection. The first run can show: **FieldWas is preparing this search from the administrator-configured index. Run the search again in a few seconds.** Wait briefly and run the same JQL again.

The 1,000 threshold selects the delivery method; it is not a result limit.

## Coverage errors

If FieldWas asks you to contact an administrator, check that:

- the custom field has been configured for indexing;
- its status is **ready**;
- every requested project is included in its coverage; and
- the `after` value is within the configured retention period.

See [Administrator setup](administration.md) for details.
