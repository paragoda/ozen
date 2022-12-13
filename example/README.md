# OZEN IN FUTURE
Show complexity to solve. To understand the problem + realize it in future to show potential of ozen.

## Structure
Shoul keep in mind that projects can be in multiply repos.

|- ozen <- repo/folder where full ozen schema = "point of truth"
|- servers
  |- main server
    |- ozen client handler
    |- extra functionality
  |- second owned server (through server orm)
  |- independent server (through client orm)
|- clients
  |- ts (web sdk)
  |- dart (mobile sdk)
  |- swift (macos only api)

### Servers

Main server:
- Set up handler of client requests
- Extra functionality which work with only 1 table

Second server:
- Work with db independent of main server
- Still 1 db structure

Independent server:
- Don't have direct access to db
- Communicate as client

### Clients

Web (ts for example):
- Use ts sdk
- Define structure of db (as first source)?

Mobile (dart for exmaple):
- Use client orm

Macos (for example swift if not have sdk):
- Comunicate through api, not typesafe because no sdk, but possible