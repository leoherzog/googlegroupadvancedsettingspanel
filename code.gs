//
//
const domain = "yourdomain.com";
//
//

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html').setTitle('Google Group Advanced Settings');
}

// https://developers.google.com/apps-script/advanced/admin-sdk-directory#list_all_groups
function getAllGroups() {
  let groups = [];
  let pageToken, page;
  do {
    page = AdminDirectory.Groups.list({
      "domain": "hope.edu",
      "pageToken": pageToken
    });
    if (page.groups) {
      groups = groups.concat(page.groups);
    } else {
      throw 'No groups found on this check.'; // shouldn't be possible
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
  return groups;
}

function getGroupSettings(groupId) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!groupId || typeof groupId != "string" || !re.test(groupId.toLowerCase())) {
    throw "Please call this function with a Google Group ID";
  }
  return AdminGroupsSettings.Groups.get(groupId);
}

function setGroupSetting(groupId, settingToChange, newSetting) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!groupId || typeof groupId != "string" || !re.test(groupId.toLowerCase())) {
    throw "Please call this function with a Google Group ID";
  }
  if (!settingToChange || typeof settingToChange != "string") {
     throw "Please call this function with a setting to change";
  }
  if (!newSetting || typeof newSetting != "string") {
     throw "Please call this function with the new setting value";
  }
  // okay. we now have a valid email address for the group id and the setting we want to change
  // get the group object
  let group = AdminGroupsSettings.Groups.get(groupId);
  // update it with the new property
  group[settingToChange] = newSetting;
  // then patch the group with it's new setting
  AdminGroupsSettings.Groups.patch(group, groupId);
}
