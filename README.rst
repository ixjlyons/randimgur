=========
RandImgur
=========

What it is
----------
This is a fairly basic Google Chrome extension that generates and displays random images hosted on `imgur.com <http://imgur.com>`_ one at a time. All imgur images are identified by a 5-character alphanumeric string. The extension generates one of these and checks if that ID corresponds to an actual image on their server. If it does, it displays it. If not, it generates another ID and tries again, etc. 

Once you go through a few rolls of the dice and find that not every image is day-ruining, it's strangely addictive.

How to install it
-----------------
If you have a folder with all sources above inside, go to chrome://extensions and click "Load unpacked extension...", then select the root folder.

How to use it
-------------
Once installed, open a new tab in Chrome, navigate to Apps if not already there, and select the RandImgur app. A simple instructions popup can be found by hovering over the icon in the top left corner.

Development
-----------
It's actually really simple and fun to make Chrome extensions. They're really just a combination of HTML and Javascript with a JSON manifest to identify some things for the browser. There are some details that restrict some things and add some interesting functionality. To learn more, Google of course offers some pretty decent documentation `here <http://developer.chrome.com/extensions/index.html>`_.

Disclaimer
----------
As stated in the in-app instructions, use the extension at your own risk. There is some truly weird stuff hosted on imgur and I am in no way responsible for any psychological damages you may encounter. 
