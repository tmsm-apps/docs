# Get started with FieldWas

FieldWas lets you search Jira work items by the values their custom fields held
in the past. A work item matches when it held the selected value at any moment
inside the selected period—even if its value has since changed.

## 1. Choose a supported custom field

FieldWas works with native Jira custom fields such as select lists, checkboxes,
labels, text, dates, users, groups, versions, and project pickers. Check the
[supported field types](field-types.md) before creating a new field.

## 2. Make the field available on work items

Create a supported custom field in Jira, or use one that already exists. Add it
to the create, edit, and view locations where your team needs it.

In a team-managed project, also add a global field to the project and the
relevant work-type layout.

## 3. Give the field a value

Set a value on at least one work item. To confirm historical matching:

1. Set `Customer tier` to `Gold`.
2. Change it to `Silver`.
3. Search for the period in which it was `Gold`.

The work item still matches the `Gold` search because it held that value during
the requested period.

## 4. Run a FieldWas search

Use the function in Jira's advanced search:

```jql
issue in fieldWas(field, value, after, before, projectKey)
```

For a field named `Customer tier`, search for `Gold` during September 2026:

```jql
issue in fieldWas("Customer tier", "Gold", "2026-09-01", "2026-10-01", "PAY")
```

The start of the period is included and the end is excluded. The example covers
1 September through 30 September.

## If a search does not return the expected work item

- Confirm the field and value are exact. If field names are duplicated, use its
  `customfield_<number>` ID instead.
- Check the project key and the selected dates.
- Confirm that you can view the work item. FieldWas respects Jira permissions.

See the [JQL reference](jql.md) for all argument formats and matching rules.
