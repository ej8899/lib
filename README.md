# Link in Bio / Company Directory App

Our freelance client came to us with the problem of wanting ‘link in bio’ pages for numerous key employees and were curious about an in-house solution vs an existing on the market solution that would have cost them over $1300 per month.

Upon evaluation of employee data (which is primarily stored in Excel on their SharePoint site), I was able to easily manipulate this data with a Python script and convert it into JSON format for an internal “Link In Bio” page approach.  At this point, we’re also stripping out PII to protect employee privacy prior to it being synced across to their public facing web server.

As separate Python script is used as an API endpoint to fetch individual user details or, if requested, the entire company directory, or isolated employees based on location and/or title.

The front end is a simple React based application that displays either the company directory, or individual company members with a photo, social media links, contact details, location, company links and other details.

This keeps the company in control of the data, keeps a consistent company theme across the member pages and of course, saves them money. 

In our demo site we’ve removed customer company branding and other details.

Included Features:
- consitent theme across the system for branding
- user data has configurable options -> headers/footers, show phone #, etc.

Removed Features:
- company branding

Planned Features:
- click tracking & reporting



### Attributions:
- <a href="https://www.flaticon.com/free-icons/link" title="link icons">Favicon created by Eucalyp - Flaticon</a>