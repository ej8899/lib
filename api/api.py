#!/usr/bin/env python3
import json
import cgi
from urllib.request import urlopen

def load_user_data():
    try:
      with open('userdata.json', 'r') as file:
        data = json.load(file)
      return data;
    except FileNotFoundError:
        return { 'file not found'}

def get_record_counts(user_data):
    # Get counts of all records, unique titles, and unique locations
    all_records_count = len(user_data)
    unique_titles = set(user.get('title') for user in user_data.values())
    unique_locations = set(user.get('location') for user in user_data.values() if user.get('location'))

    return {
        "all_records_count": all_records_count,
        "unique_titles_count": len(unique_titles),
        "unique_locations_count": len(unique_locations),
    }

def get_user_data(user_id, location, title, user_data):
    # Check if the title parameter is provided
    if title is not None:
        # If a specific title is provided, filter records by title
        if title.lower() == 'all':
            unique_titles = list(set(user.get('title') for user in user_data.values()))
            return {"unique_titles": unique_titles}
        else:
            filtered_data = [{'id': user_id, **user} for user_id, user in user_data.items() if user.get('title') == title]
            return filtered_data

    # Check if the location parameter is provided
    if location is not None:
        if location.lower() == 'all':
            unique_locations = list(set(user.get('location') for user in user_data.values()))
            return {"unique_locations": unique_locations}
        else:
            filtered_data = [{'id': user_id, **user} for user_id, user in user_data.items() if user.get('location') == location]
            return filtered_data

    # Check if the user ID is blank
    if not user_id:
        # If blank, return a count of all records
        return [{'id': user_id, **user} for user_id, user in user_data.items()]
    
    # Check if the user ID exists in the data
    if user_id in user_data:
        return [{'id': user_id, **user_data[user_id]}]
    else:
        # User ID not found
        return None

external_user_data = load_user_data()

form = cgi.FieldStorage()
user_id = form.getvalue('user_id')
location = form.getvalue('location')
title = form.getvalue('title')
count_records = form.getvalue('countrecords')

if count_records is not None:
    # Return counts of all records, unique titles, and unique locations
    result = get_record_counts(external_user_data)
else:
    # Get user data for the specified ID, location, title, or count all records
    result = get_user_data(user_id, location, title, external_user_data)


# Output the result as JSON
print("Access-Control-Allow-Origin: *");
print("Access-Control-Allow-Methods: GET, POST, OPTIONS");
print("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
print("Content-Type: application/json")
print()
print(json.dumps(result, indent=2))
