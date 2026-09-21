# FieldWas for Jira

Find work items that held a custom-field value at any time in a selected period.

FieldWas adds historical custom-field search to Jira Cloud. Use it when the current value is not enough—for example, to find work that was once marked as `Blocked`, assigned to a particular team, or planned for a release.

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY")
```

[Get started](getting-started.md){ .md-button .md-button--primary }
[JQL reference](jql.md){ .md-button }

## Key features

- Find work items that held a value during a time period, even when the value has since changed.
- Works with 19 native Jira custom-field types, including select lists, text, dates, users, groups, versions, labels, and projects.
- Uses Jira work-item history and does not change work items.
- Combine the result with the rest of your normal JQL.

## Example

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY")
AND statusCategory != Done
```

!!! note

    FieldWas is currently a bounded pilot. Each query searches one named project and up to 1,000 work items visible to the person running it.
