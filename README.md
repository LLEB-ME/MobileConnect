# MobileConnect
MobileConnect is an identity provider extension for Keycloak, allowing users who do not have the ability to use NFC cards issued by the sign-on service to use another device that does have support to authenticate. This is done by scanning a QR code and completing the login via another device.

## What does MobileConnect do to protect against fradulent usage ?
MobileConnect is written with similar principles as [France Identité](https://france-identite.gouv.fr/) – login requires :
  1. tapping your NFC card to your device when prompted,
  2. inserting your personal username (not your user ID) when prompted,
  3. having a secure code that links the two details together.

Your personal username and secure code are two details that no one else should know, with the secure code and personal username both being salted and hashed to prevent fradulent activity from system admistrators.

MobileConnect does not require or use a mobile application, and does not use any proprietary JavaScript to complete authentication. It does not store cookies on your devices.

## Building
0. Install [Golang](https://golang.org) and deploy a PostgreSQL server.
1. Set the environment variable `POSTGRESQL_URL` to your PostgreSQL URL (`postgresql://user:password@server:port/dbname`)
2. Build the server (`go build server.go`) and run the database setup (`go run db_setup.go`).
3. Start the server (`./server`) and confirm operation by checking `http://localhost:2400` or whatever you set the `PORT` variable to for the command execution. You will be able to add users from the web interface or use a database editor to manually add users.

## Acknowledgements
This software is licensed under the 3-Clause BSD License. A copy of this licence is in the root directory in a file named `LICENSE`. This software was designed and developed for usage [by The Farer Group.](https://farer.group)

MobileConnect has pre-installed a copy of [ErrDump](https://git.sr.ht/~maatt/errdump), a private (no cookies or session data stored) console dumping tool that sends errors and warnings to developers to help fix bugs as they happen. No user information is copied and you can view the data sent by opening your browser's console.
