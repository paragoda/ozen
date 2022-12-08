# STRUCTURE
We need images/diagrams to describe structure. Structure will give some new questions.

|-server
|
|
|- client
  |- ts (web sdk)
  |- dart (mobile sdk)
  |- swift (macos only api)

We should keep typesafety in all clients (full in sdk, partial in api). But HOW if not use codegen and not to write tables definition/types 3 times.