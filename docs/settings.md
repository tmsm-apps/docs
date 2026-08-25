# Jira working-time calendar

Smart Duration Field automatically uses Jira's global time-tracking calendar and
time display format. There are no duplicate working-time or display settings in the app.

Jira commonly starts with:

| Setting | Default |
|---|---:|
| Working hours per day | 8 |
| Working days per week | 5 |

With these values, `1d` equals 8 hours and `1w` equals 40 hours.

## Open the app settings

1. In Jira, open **Apps → Manage apps**.
2. Open **Connected apps** when Jira redirects you to Atlassian Administration.
3. Find **Smart Duration Field**.
4. Open its actions menu and select **Configure**.

The page reads Jira's current calendar and synchronizes it to every Smart Duration
field context. The app also refreshes it automatically every hour.

## Change the working calendar in Jira

1. Open **Jira settings → Work items**.
2. Under **Work item features**, open **Time tracking**.
3. Select **Edit global settings**.
4. Change **Working hours per day** or **Working days per week** and save Jira's settings.
   You can also choose Jira's **Time display format**: Pretty, Days, or Hours.
5. Either wait for the hourly synchronization or open the Smart Duration Field
   configuration page to apply the change immediately.

Decimal values are supported by Jira, so a working day can be `7.5` hours.

## Time display formats

Smart Duration fields and Smart Duration Total follow Jira's selection:

| Jira format | Smart Duration example for 65 hours at 8h/day and 5d/week |
|---|---:|
| Pretty | `1w 3d 1h` |
| Days | `8.13d` |
| Hours | `65h` |

The Pretty format uses compact, language-independent unit symbols so values remain
valid for CSV re-import and every supported Jira locale.

!!! warning

    Changing Jira's working calendar does not rewrite stored seconds. It changes how
    `w` and `d` are interpreted for newly entered values. Existing absolute hours stay
    unchanged.

For example, a stored value of 144,000 seconds always remains `40h`. With an 8-hour
day and 5-day week, entering `1w` produces those 40 hours. With a 9-hour day and
5-day week, a newly entered `1w` produces 45 hours instead.

For standard JQL searches on a non-default Jira calendar, use explicit hours instead
of `w` or `d`. For example, search for one 10-hour Jira working day as `10h`. See the
[JQL reference](jql.md) for details.

## After creating another field or context

The new context is synchronized automatically within an hour. To use it immediately,
open the Smart Duration Field configuration page once and then reload the work item.

## Time Spent comparison index

Select **Rebuild JQL index**:

- after installing the app,
- after creating a new Smart Duration field,
- after changing the source fields used by Smart Duration Total,
- or when existing issues are missing from Time Spent comparison results.

Later changes are indexed automatically when a Smart Duration value or worklog
changes. Updates can take a short time to appear in JQL.

## Smart Duration Total sources

The same page contains the global source selection for **Smart Duration Total**.
Select the Smart Duration fields that should be added together and choose **Save
total configuration**. Opening the page also synchronizes Jira's working calendar to
the total field. Then rebuild the JQL index so existing work items receive the new
total immediately.

The source selection applies to the whole Jira site. Empty or unavailable source
fields count as zero. For complete setup instructions, see
[Smart Duration Total](total-estimate.md).
