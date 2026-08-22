# Create a Total estimate

Teams often split an estimate by role and still need one total value on the work item. For example:

- **Analysis estimate**
- **Development estimate**
- **Test estimate**

Jira Cloud's native Formula field can add these Smart Duration values. Smart Duration fields store seconds as numbers, so the total can be displayed as a duration.

## Create the formula field

1. Open **Settings → Work items → Fields**.
2. Select **Create new field**.
3. Choose the **Formula** field type.
4. Name the field **Total estimate**.
5. Select **Duration** as the formula output.
6. Enter the following formula and create the field:

```text
SUM(
  IF(IS_NONE({Analysis estimate}), 0, {Analysis estimate}),
  IF(IS_NONE({Development estimate}), 0, {Development estimate}),
  IF(IS_NONE({Test estimate}), 0, {Test estimate})
)
```

The formula only uses values from the same work item. It does not add values from subtasks, linked work items, or other issues.

!!! tip

    Field availability in Jira's Formula editor can depend on the Jira rollout and field type support on your site. If a Smart Duration field is not offered by the editor, use Jira Automation as a fallback or contact support.

See Atlassian's documentation for [creating a Formula field](https://support.atlassian.com/jira-cloud-administration/docs/create-a-formula-field/) and [supported formula functions](https://support.atlassian.com/jira-cloud-administration/docs/supported-functions-for-formulas/).
