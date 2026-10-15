# FieldWas Privacy Policy

**Effective date:** October 15, 2026

This Privacy Policy explains how **TMSM** ("we", "us") processes data when
you use **FieldWas for Jira Cloud**. Questions about this policy or FieldWas
can be sent to [info@tmsm.cz](mailto:info@tmsm.cz).

## What FieldWas does

FieldWas lets Jira administrators create a historical index for selected
custom fields, projects, and retention periods. Jira users can then search for
work items that held a particular custom-field value during a specified time
interval.

## Data processed and stored

FieldWas stores only the information required to build and query the
administrator-configured index:

- Jira work-item IDs, project keys, custom-field IDs, field names, and field
  types;
- hashed historical field values and the time intervals during which those
  values applied;
- value aliases needed to resolve human-readable Jira values to stable Jira
  identifiers; for user-picker fields, these aliases can include Jira display
  names and account identifiers;
- JQL arguments, matching work-item IDs, opaque query tokens, and Jira
  precomputation identifiers used to maintain search results.

FieldWas does **not** store issue summaries, descriptions, comments,
attachments, passwords, Atlassian API tokens, payment information, or customer
email addresses. Rovo responses may display permitted work-item keys,
summaries, and statuses to the requesting user, but FieldWas does not add that
content to its persistent index.

## Why we process this data

The data is processed only to:

- create and maintain the historical index configured by a Jira
  administrator;
- resolve Jira values used in historical searches;
- return and refresh JQL and Rovo search results; and
- operate, secure, diagnose, and support the app.

We do not use customer data for advertising, sell it, or use it to train
general-purpose artificial-intelligence models.

## Hosting and data transfers

FieldWas is built on Atlassian Forge. Its application code runs on Atlassian's
Forge platform, and persistent app data is stored in Forge SQL, Forge KVS, and
an app-owned Jira custom field. FieldWas has no Forge Remote backend and does
not declare external network egress.

The location and handling of Forge-hosted data are governed by the customer's
Atlassian Cloud configuration and Atlassian's applicable terms and policies.

## Access and permissions

Only Jira administrators can configure which fields, projects, and retention
periods FieldWas indexes. Jira applies each searching user's normal project
and work-item permissions to JQL results. Rovo searches are also executed in
the context of the requesting user. FieldWas does not grant access to Jira
content that the user cannot otherwise view.

## Retention and deletion

- Historical values remain searchable only within the rolling retention
  period selected by the Jira administrator.
- Configuration and index records are replaced or removed when an
  administrator rebuilds or removes the corresponding coverage.
- Temporary large-result projection records expire after eight days unless
  the query is used again.
- When FieldWas is uninstalled, deletion of Forge-hosted application data
  follows Atlassian's Forge application-data lifecycle.

Customers can ask their Jira administrator to change or remove configured
index coverage. Privacy and deletion questions can also be sent to
[info@tmsm.cz](mailto:info@tmsm.cz).

## Security

FieldWas uses authenticated Forge APIs, validates and bounds its inputs, and
uses Jira's permission model when returning user-visible results. Operational
logs are designed to contain identifiers, counts, and processing status rather
than customer field values, credentials, or secrets.

## Service provider

Atlassian provides the Jira Cloud and Forge infrastructure used by FieldWas.
For information about Atlassian's privacy and security practices, consult the
agreements and policies applicable to your Atlassian Cloud subscription.

## Changes to this policy

We may update this policy when FieldWas, its data handling, or applicable
requirements change. The effective date at the top of this page identifies the
latest published version.
