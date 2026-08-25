# Smart Duration Total

**Smart Duration Total** is a read-only field supplied by the app. It adds selected
Smart Duration fields on the same work item and displays their exact sum in total hours.

For example, a team can use these editable fields:

- **Analysis estimate** — `2d`
- **Development estimate** — `5d`
- **Test estimate** — `1d`

The editable fields display `16h`, `40h`, and `8h`. Smart Duration Total shows
their exact sum, `64h`. When only one source field contains `40h`, the total also
shows `40h`.

An empty source field counts as zero. The total is empty only when no source fields
are configured.

## 1. Make the total field available

The app creates one **Smart Duration Total** field for the Jira site. A Jira
administrator must make it available where users should see it.

### Company-managed spaces

1. Open **Settings → Work items → Fields**.
2. Find **Smart Duration Total**.
3. Open its actions menu and choose **Associate to screens**.
4. Select the required view screens.

### Team-managed spaces

1. Open **Space settings → Fields**.
2. Select **Add field** and add **Smart Duration Total** to the space.
3. Open **Space settings → Work types** and select a work type.
4. Move **Smart Duration Total** from **Other fields** into the required section.
5. Select **Save changes**.

The field is calculated by the app and cannot be edited by users.

## 2. Select the source fields

1. Open the [Smart Duration Field settings](settings.md).
2. In **Smart Duration Total**, select every Smart Duration field that should be
   included.
3. Select **Save total configuration**.
4. Select **Save settings** once after installing or upgrading the app. This applies
   the site's hours-per-day and days-per-week settings to the total field.
5. Select **Rebuild JQL index** to calculate existing work items immediately.

Later changes are recalculated automatically after Jira delivers the selected
estimate's update event. Because the value is stored in Jira, opening a work item does
not wait for a Forge calculation.

## Use fields from several spaces

The source selection applies to the whole Jira site. You can select Smart Duration
fields whose contexts belong to different spaces. On each work item, only fields
available in that work item's context have values; unavailable and empty fields count
as zero.

This makes one total field suitable for several teams even when they use separate
role-estimate fields.

## Compare the total with Time Spent

The three comparison functions accept **Smart Duration Total** in the same way as an
editable Smart Duration field:

```jql
issue in smartDurationOverrun("Smart Duration Total")
issue in smartDurationRemaining("Smart Duration Total")
issue in smartDurationOnTarget("Smart Duration Total")
```

See the [JQL reference](jql.md) for the exact behavior of each function.

!!! note

    Smart Duration Total adds values from fields on the same work item. It does not
    aggregate subtasks, linked work items, or child work items.
