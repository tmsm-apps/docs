# Supported FieldWas field types

FieldWas currently supports these native Jira custom-field types.

| Category | Supported types |
| --- | --- |
| Options | Radio Buttons; Select List (single choice); Checkboxes; Select List (multiple choices); Select List (cascading) |
| Text and values | Labels; Text (single line); Text (Paragraph); URL; Number; Date; Date time |
| People and groups | User Picker (single); User Picker (multiple); Group Picker (single); Group Picker (multiple) |
| Releases and projects | Version Picker (single); Version Picker (multiple); Project Picker (single) |

For checkboxes, multiple-select fields, labels, multiple user pickers, multiple group pickers, and multiple version pickers, one matching selected member is enough.

Rich text, Assets, Formula, Team, and third-party object fields are not currently supported. FieldWas shows an actionable error for an unsupported field instead of returning an incomplete result.
