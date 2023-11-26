# API Usages

## Get counts of all records, unique titles, and unique locations:

```bash
https://erniejohnson.ca/lib/api.py?countrecords=true
```

### Returns:
```json
{
"all_records_count": 13,
"unique_titles_count": 6,
"unique_locations_count": 12
}
```

## Return full record by user id
```bash
https://erniejohnson.ca/lib/api.py?user_id=123
```

### Returns:
```json
[
{
  "id": "123",
  "firstName": "Ernie",
  "lastName": "Johnson",
  "photoUrl": "https://erniejohnson.ca/assets/profile2-8fa8b026.png",
  "phone": "+1 705-331-8899",
  "location": "Calgary, AB, Canada",
  "title": "Software Engineer",
  "bio": "Software developer since the 1990's involved in design and development of standalone applications, mobile device apps, web apps and fully interactive web and e-commerce sites. Experienced with Sharepoint development, GIS, Geospatial organization, cyber security awareness.",
  "email": "ernie@erniejohnson.ca",
  "website": "http://www.erniejohnson.ca",
  "organization": "ErnieJohnson.ca",
  "socials": {
    "twitter": "http://www.twitter.com/ejdevscom",
    "instagram": "https://www.instagram.com/erniejohnsonca/",
    "github": "https://github.com/ej8899/",
    "youtube": "https://www.youtube.com/@oldmancodes",
    "linkedin": "https://www.linkedin.com/in/ernie-johnson/"
  },
  "links": [
    {
    "order": 1,
    "type": "external-link",
    "label": "Web & App Design Portfolio",
    "url": "https://erniejohnson.ca"
    },
    {
    "order": 3,
    "type": "email",
    "label": "Reach out via e-mail",
    "url": "mailto:ernie@erniejohnson.ca"
    },
    {
    "order": 2,
    "type": "external-link",
    "label": "Game Dev (Pixel Realms)",
    "url": "https://erniejohnson.ca/pixelrealms"
    }
  ],
  "showqr": true,
  "showLocation": true,
  "showPhone": true
}
]

```

## Return full list of records with matching title
```bash
https://erniejohnson.ca/lib/api.py?title=Software%20Engineer
```

### Returns:
```json
[
{
  "id": "1",
  "firstName": "John",
  "lastName": "Smith",
  "photoUrl": "https://xsgames.co/randomusers/avatar.php?g=male",
  "phone": "+1 123-456-7890",
  "location": "New York, NY, USA",
  "title": "Software Engineer",
  ...
},
{
  "id": "7",
  "firstName": "Daniel",
  "lastName": "Lee",
  "photoUrl": "https://xsgames.co/randomusers/avatar.php?g=male",
  "phone": "+1 555-987-6543",
  "location": "Seattle, WA, USA",
  "title": "Software Engineer",
  ...
},
{
  "id": "8",
  "firstName": "Olivia",
  "lastName": "Martinez",
  "photoUrl": "https://xsgames.co/randomusers/avatar.php?g=female",
  "phone": "+1 876-543-2109",
  "location": "San Francisco, CA, USA",
  "title": "Software Engineer",
  ...
},
{
  "id": "123",
  "firstName": "Ernie",
  "lastName": "Johnson",
  "photoUrl": "https://erniejohnson.ca/assets/profile2-8fa8b026.png",
  "phone": "+1 705-331-8899",
  "location": "Calgary, AB, Canada",
  "title": "Software Engineer",
  ...
}
]
```


## Return full list of records with matching location
```bash
https://erniejohnson.ca/lib/api.py?location=San%20Francisco,%20CA,%20USA
```
### Returns:
```json
[
{
  "id": "5",
  "firstName": "Brian",
  "lastName": "Wilson",
  "photoUrl": "https://xsgames.co/randomusers/avatar.php?g=male",
  "phone": "+1 555-987-6543",
  "location": "San Francisco, CA, USA",
  ...
},
{
  "id": "8",
  "firstName": "Olivia",
  "lastName": "Martinez",
  "photoUrl": "https://xsgames.co/randomusers/avatar.php?g=female",
  "phone": "+1 876-543-2109",
  "location": "San Francisco, CA, USA",
  ...
}
]
```




## Return a list of all unique titles:
```bash
https://erniejohnson.ca/lib/api.py?title=all
```

### Returns:
```json
{
"unique_titles": [
  "Program Manager",
  "Tech Lead",
  "UI/UX Designer",
  "Division Lead",
  "Software Engineer",
  "UX Designer"
]
}
```


## Return a list of all unique locations:
```bash
https://erniejohnson.ca/lib/api.py?location=all
```

### Returns:
```json
{
"unique_locations": [
  "Los Angeles, CA, USA",
  "Philadelphia, PA, USA",
  "San Francisco, CA, USA",
  "Chicago, IL, USA",
  "Boston, MA, USA",
  "Austin, TX, USA",
  "Seattle, WA, USA",
  "New York, NY, USA",
  "Houston, TX, USA",
  "Miami, FL, USA",
  "Calgary, AB, Canada",
  "Windsor, ON, Canada"
]
}
```