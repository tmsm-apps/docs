# Administrator setup

FieldWas searches a durable history index configured by a Jira administrator. It never starts an unapproved full-site backfill when a user enters JQL.

## Configure an indexed field

1. Open the FieldWas configuration page from Jira Apps administration.
2. Under **Configure an indexed field**, select a supported custom field.
3. Select the projects that users are allowed to search for this field.
4. Enter the history retention in days. The supported range is 30 to 3,650 days.
5. Select **Save and build index**.
6. Under **Configured coverage**, wait until the field is marked **ready**.

You can configure up to 50 projects for one indexed field. Configure only the fields, projects, and retention that your users need; a narrower scope reduces the initial indexing work and ongoing Forge usage.

!!! warning

    Saving a new scope for an already configured field replaces its previous project and retention coverage. FieldWas safely rebuilds that field in the background, but searches against it are temporarily unavailable until it is ready again.

## What the status means

| Status | Meaning |
| --- | --- |
| `pending` or `indexing` | The initial history index is being built. Users cannot search this field yet. |
| `ready` | The configured field, projects, and retained period are available to JQL. |
| `failed` | Indexing needs administrator attention. Use **Refresh field catalogue and continue** and review the status again. |

The page refreshes its status automatically. You can leave it while the background build continues.

## How JQL uses the configured coverage

Users can omit the optional project argument:

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now")
```

This searches every project configured for `Customer tier`. Users can add the fifth argument to search only a subset of that coverage:

```jql
issue in fieldWas("Customer tier", "Gold", "-30d", "now", "PAY, OPS")
```

FieldWas returns an actionable message when:

- the field has no administrator-configured index;
- its index is not ready;
- a requested project is outside the configured coverage; or
- the requested start date is older than the retained history.

## Performance and large results

Every search reads the prepared history index; it does not rescan Jira changelogs.

- **Up to 1,000 matches:** Jira displays the result immediately. FieldWas registers background maintenance so Jira's cached result remains correct when work items change.
- **More than 1,000 matches:** FieldWas creates a constant-size Jira projection because Jira does not accept more than 1,000 literal IDs from a custom JQL function. On the first run, the user sees a message that the search is being prepared and should run it again in a few seconds.

Later issue changes update the history index and active search projections automatically.
