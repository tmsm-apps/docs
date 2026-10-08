# Get started with FieldWas

FieldWas searches Jira work items by values their custom fields held in the past. A work item matches when it held the value at any moment in the selected period—even if the value has since changed.

## 1. Choose a supported custom field

FieldWas works with native Jira custom fields such as select lists, checkboxes, labels, text, dates, users, groups, versions, and project pickers. Check the [supported field types](field-types.md) before creating a new field.

## 2. Make the field available on work items

Create a supported custom field in Jira, or use one that already exists. Add it to the create, edit, and view locations where your team needs it.

In a team-managed project, also add a global field to the project and the relevant work-type layout.

## 3. Give the field a value

1. Set `Customer tier` to `Gold`.
2. Change it to `Silver`.
3. Search for the period in which it was `Gold`.

The work item still matches the `Gold` search because it held that value during the requested period.

## 4. Run a FieldWas search

```jql
issue in fieldWas("Customer tier", "Gold", "2026-09-01", "2026-10-01", "PAY")
```

The start of the period is included and the end is excluded. See the [JQL reference](jql.md) for all argument formats and matching rules.
