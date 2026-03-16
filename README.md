# sabaticket
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

sabaticket is a simple ticket management system built with JavaScript. It allows users to issue and use digital tickets with QR codes.

## Demo
You can view the [sabaticket admin panel](https://code4fukui.github.io/sabaticket/admin.html) to create and manage tickets.

## Features
- Issue tickets with customizable details like title, description, and expiration date
- Generate QR codes for tickets that can be scanned and used
- Manage issued tickets and their usage history
- Backup and restore the private key used to sign tickets

## Requirements
This project runs in the browser and requires no additional software to be installed.

## Usage
1. Open the [sabaticket admin panel](https://code4fukui.github.io/sabaticket/admin.html) in your web browser.
2. Fill out the ticket details and click "Issue" to create a new ticket.
3. The QR code for the new ticket will be displayed, which can be scanned and used.
4. The "Issued" section will show all the tickets that have been created, and you can click on the ticket ID to view its QR code.
5. Use the "Backup private key", "Restore private key", and "Regenerate private key" buttons to manage the private key used to sign tickets.

## License
This project is licensed under the [MIT License](LICENSE).
