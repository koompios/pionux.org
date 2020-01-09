---
id: installation
title: Application Installation 
sidebar_label: Info of Applications
---

> **Tips**:Down here are all the application that you can install in PionuxOS. It is all open-source apps. You can install them through commands or through snap store.

## Code Editors
#### Atom
Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node. js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies.
You can install atom by go into **Terminal**, type this:
```Text
     $ pi -S atom
```
After that follow the instruction.

#### Visual Studio Code
Visual Studio Code is a source-code editor developed by Microsoft which includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.
First update the pi package repository cache with the following command:
```Text
    $ pi -Sy
```
After it updated
Use this command
```Text
    $ pi -S code --classic
```


## Web Browser
#### Chrome
A Google Chrome App, or commonly just Chrome App, is a web application that runs on the Google Chrome web browser. Chrome apps can be obtained from the Chrome Web Store where apps, extensions, and themes can be installed or bought.

To install chrome, follow steps below:
```Text
    1. Open Konsole or Terminal'ctrl'+'Alt'+T
    2. Type '$ pi -S google-chrome'
    3. Following the sentences have been given.
```
#### Brave 
Brave is a new way of thinking about how the web works. Brave is open source and built by a team of privacy focused, performance oriented pioneers of the web. Brave fights malware and prevents tracking while keeping your information safe and secure.
To installed **Brave Browser**, open terminal and use this command:
```Text
    $ pi -S brave
```

#### Firefox 
Mozilla Firefox, Firefox Browser, or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation and its subsidiary, Mozilla Corporation. Firefox uses the Gecko layout engine to render web pages, which implements current and anticipated web standards.
In order to install it use these command
```Text
    1. Open Konsole or Terminal'ctrl'+'Alt'+T
    2. Type '$ pi -S firefox'
    3. And it would ask for your permission 'Enter' for 'Yes'
```

#### Git
Git is the version control system (VCS) designed and developed by Linus Torvalds, the creator of the Linux kernel. Git is now used to maintain AUR packages, as well as many other projects, including sources for the Linux kernel.

You can install git through this line:
```Text
    $ pi -S git
```

## Editors
#### Krita
[Krita](https://docs.krita.org/en/index.html) is a raster graphics editor designed primarily for digital painting and animation. It is a fast,flexible, and free Photoshop alternative built by artists and perfect for everyone from amateur to professional. Krita gives budding artists and illustrators a pro-level set of tools with a natural painting toolbox.

``` 
    $ pi -S krita
```
#### Kdenlive
Kdenlive is a non-linear video editing software featuring multi-track editing with a timeline. It supports an unlimited number of video and audio tracks and includes tools to create, move, crop and delete video, audio, text and image clips. Kdenlive has a built-in title editor and the ability to add custom effects and transitions.
```
    $ pi -S kdenlive
```
#### KMPlayer
KMPlayer is a highly customizable multimedia software providing high-quality video playback of media files with much more additional functionality. KMPlayer recognizes a large number of file formats, is able to capture videos from online sources and allows users to make animated GIFs.
```
    $ pi -S kmplayer
```
## Music
#### Spotify
```Text
    $ pi -S spotify
```
>**Noted:**If you run the commands below, but it failed. And show like kind of error like below run the other command below and reinstall the command above again.
```Text
    ....
    bsdtar: Failed to set default locale
    -> Compressing package...
    bsdtar: Failed to set default locale
 
```
Here is the command for  solve the error:
```Text
    $ sudo locale-gen
```
## Software
#### Gnome
GNOME Software utility for software application installations and updates. The Software Center allows for easy installations and updates of software applications and system extensions.
First of all, make sure you have updated your PionuxOS system.
```Text
    $ sudo pacman -Syu
```
After updating, reboot Arch Linux to apply the latest updates.
```Text
    $ sudo reboot
```
Next, Install X Window System (xorg) using command:
```Text
    $ sudo pacman -S xorg xorg-server
```
Finally, install GNOME Desktop environment using command:
```Text
    $ sudo pacman -S gnome
```
This command will install all required applications including the gnome display manager for the GNOME desktip environment.
For more info [Click here]().
## WordSheets
#### Apache OpenOffice
Apache OpenOffice is an office productivity software suite containing a word processor (Writer), a spreadsheet (Calc), a presentation application (Impress), a drawing application (Draw), a formula editor (Math), and a database management application (Base). It's default file format is the OpenDocument Format (ODF), and can also read and write a wide variety of other file formats, including those from Microsoft Office.

#### Libra Office

#### Office 365
Office 365 is a cloud-based subscription service that brings together the best tools for the way people work today. Combining the best-in-class apps like Excel and Outlook with cloud services like OneDrive and Microsoft Teams, Office 365 lets anyone create and share anywhere on any device.

## Others
#### Snap Store
Snaps are applications packaged with all their dependencies to run on all popular Linux distributions from a single build. They update automatically and roll back gracefully.

Snaps are discoverable and installable from the Snap Store, an app store with an audience of millions.
```Text 
    1. $ git clone https://aur.archlinux.org/snapd.git
    2. $ cd snapd
    3. $ makepkg -si
    4. $ sudo systemctl enable --now snapd.socket
    5. $ sudo ln -s /var/lib/snapd/snap /snap
    6. $ sudo snap install snap-store
```
Make sure you have download git [Click here](http://localhost:3030/docs/installation#git)
#### Guvcview
Guvcview is a webcam application at providing a simple interface for capturing and viewing video from v4l2 devices.
Here the command:
```Text
    $ pi -S guvcview
```
#### Dropbox
Dropbox is a file sharing system with a GNU/Linux client. Use it to transparently sync files across computers and architectures. It is really easy to use. You can use Dropbox for free. But it also has paid plans if you want more storage space than the free version of it.
>**Tips :** Make sure your system up to date, want to update system [Click Here](http://localhost:3030/docs/documentation#update-the-system)

You need Git version control system to clone the git repository of Dropbox AUR (Arch User Repository)
To install git:
```Text
    $ pi -S git
```
Want to know more about git [here](http://localhost:3030/docs/installation#git).
Before you start clone the repo of dropbox Find location for installing it.
We recommend to install in `~/Downloads` directory, Go into the Downloads directory using this:
```Text
    $ cd Downloads/ 
```
**Noted:**Or you want to go into other director use the same command, but changing the directory name.
After you done with installing git run this command to clone Dropbox repo:
```Text
    $ git clone https://aur.archlinux.org/dropbox.git
```
Your dropbox repo was cloned and then go into the directory by `$ cd dropbox/`.
After that run this command:
```Text
    $ makepkg -S
```
When the processed is done, now you have to list the files. by using this `$ ls`.
After that you see the name of a dropbox that end with this `.pkg.tar.xz `.
```Text
    $ pi -U 
```
And you will be done installing it and it will be appear on your  system.
#### Popcorn Time
Popcorn Time is a multi-platform, free software BitTorrent client that includes an integrated media player. Popcorn Time provide a free "alternative" to subscription-based video streaming services such as Netflix.
```Text
    $ pi -S popcorntime-bin  or $ pi -S popcorntime
```