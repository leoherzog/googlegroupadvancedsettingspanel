![Google Group Advanced Settings Panel](https://raw.githubusercontent.com/xd1936/googlegroupadvancedsettingspanel/master/img/screenshot.png)

# Google Group Advanced Settings Panel

### Basics

[Google Groups for Gsuite](https://support.google.com/a/topic/25838) is a product that allows admins to create mailing lists for their domain. It is different than the public-facing [Google Groups](https://groups.google.com/) forums.  Each group has several settings that can only be changed via the [Admin Group Settings API](https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups), but not anywhere in the Admin Console.

In order to make our Admin's lives easier, I created this script. It simply grabs all of the groups on your domain and lets you change most of those available settings.

### Setup

`Note: This project must be initially created by a domain administrator account`

1. Log in as a domain administrator and create a [new Google Apps Script project](https://script.google.com/) in Google Drive.
2. Copy and paste the code from [`code.gs`](https://raw.githubusercontent.com/xd1936/googlegroupadvancedsettingspanel/master/code.gs) into `code.gs` in the Apps Script project
3. Create a new html file with **File** → **New** → **Html file**, name it `index.html`, and copy the code from [`index.html`](https://raw.githubusercontent.com/xd1936/googlegroupadvancedsettingspanel/master/index.html) into it.
4. Go into **Resources** → **Advanced Google services...**, and turn on the **Admin Directory API** and **Groups Settings API**. Also follow the *Developer Console* link on this same screen and enable access to the **Admin SDK** and **Groups Settings API** for this project ([more information](https://developers.google.com/apps-script/guides/services/advanced)).
5. Go into the `code.gs` file and change the `domain` variable on line 3 to be your domain.
6. Go into **Publish** → **Deploy as web app...**. Choose the level of access that you want to have on the panel (Under **Who has access to the app:**), and click **Deploy**.

You're done! Navigate to that web app URL to see your groups and modify each one's setting.

### Updating

When updates are released here on Github, simply copy and paste the newer [`code.gs`](https://raw.githubusercontent.com/xd1936/googlegroupadvancedsettingspanel/master/code.gs) and [`index.html`](https://raw.githubusercontent.com/xd1936/googlegroupadvancedsettingspanel/master/index.html) files to your project, and go to **Publish** → **Deploy as web app...**. Increment the version number (Pick "New" under the **Project Version** dropdown) and click **Deploy**. You should be good to go!

- - -

Feel free to take a look at the source and adapt as you please. I would love to see some pull requests for improvements to the Javascript.

This source is licensed as follows:

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Google Group Advanced Settings Panel</span> is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

- - -

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/white_img.png)](https://buymeacoff.ee/leoherzog)
