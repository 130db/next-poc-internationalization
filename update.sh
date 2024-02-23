#!/bin/bash

# Path to package.json
PACKAGE_JSON="./package.json"

# Get outdated packages in JSON format, excluding header lines
OUTDATED_JSON=$(yarn outdated --json | jq -s 'map(select(.type == "table")) | .[0].data.body | map({(.[0]): .[2]}) | add')

# Function to update versions with prefix retention for backward compatibility
update_version() {
    local package=$1
    local wanted_version=$2
    local package_json_path=$3

    # Extract the current version
    local current_version=$(jq -r --arg pkg "$package" '.dependencies[$pkg] // .devDependencies[$pkg]' "$package_json_path")
    
    # Determine the prefix based on semantic versioning rules
    local prefix="^" # Default to using ^ for backward-compatible updates
    if [[ $wanted_version =~ ^0\. ]]; then
        prefix="~" # Use ~ for versions below 1.0.0 to be more conservative
    fi

    # Update the version with the determined prefix
    jq --arg pkg "$package" --arg ver "${prefix}${wanted_version}" \
       'if .dependencies[$pkg] then .dependencies[$pkg] = $ver else . end |
        if .devDependencies[$pkg] then .devDependencies[$pkg] = $ver else . end' \
       "$package_json_path" > temp.json && mv temp.json "$package_json_path"
}

# Iterate through each outdated package and update its version in package.json
echo "$OUTDATED_JSON" | jq -r 'to_entries | .[] | .key + " " + .value' | while read -r pkg wanted_version; do
    update_version "$pkg" "$wanted_version" "$PACKAGE_JSON"
done
