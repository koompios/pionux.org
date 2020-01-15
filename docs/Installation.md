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
After that follow the instructions have given!!!
#### Visual Studio Code
Visual Studio Code is a source-code editor developed by Microsoft which includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.
First update the pi package repository cache with the following command:
```Text
    $ pi -Sy
```
After it updated,Use this command:
```Text
    $ pi -S code --classic
```
## Docs And WordSheets
#### Apache OpenOffice
Apache OpenOffice is an office productivity software suite containing a word processor (Writer), a spreadsheet (Calc), a presentation application (Impress), a drawing application (Draw), a formula editor (Math), and a database management application (Base). It's default file format is the OpenDocument Format (ODF), and can also read and write a wide variety of other file formats, including those from Microsoft Office.

#### Libra Office
 Libra Office is the free power-packed Open Source personal productivity suite for Windows, Macintosh and Linux, that gives you six feature-rich applications for all your document production and data processing needs: Writer, Calc, Impress, Draw, Math and Base.
```Text
    $ pi -S libreoffice-fresh 
``` 
or 
```Text
    $ pi -S libraoffice-still    
```
#### Okular
Okular is a multiplatform document viewer developed by the KDE community and based on Qt and KDE Frameworks libraries. It is distributed as part of the KDE Applications bundle. Its origins are from KPDF and it replaces KPDF, KGhostView, KFax, KFaxview and KDVI in KDE 4.
We can install it by run:
```Text
    $ pi -S okular
```
#### Office 365
Office 365 is a cloud-based subscription service that brings together the best tools for the way people work today. Combining the best-in-class apps like Excel and Outlook with cloud services like OneDrive and Microsoft Teams, Office 365 lets anyone create and share anywhere on any device.
#### WPS Office
WPS Office (an acronym for Writer, Presentation and Spreadsheets, previously known as Kingsoft Office)is an office suite for Microsoft Windows, Linux, iOS and Android.
```Text
    $ pi -S wps-office
```
>**Tips:** The following steps that installing has given please chooseing number 2. We recommended.
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
#### Photoshop
Adobe Photoshop is an image editor developed by Adobe Inc. Widely considered as one of the most powerful image editors in the market, Adobe Photoshop is equipped with advanced features that can cater to a wide range of artistic professionals and hobbyists.

We have just made this app to run on PionuxOS.To install it, please following the steps below:
```Text
    1. Open Terminal or Konsole
    2. typing this : $ curl -s https://repo.koompi.org/script/pix.sh -o pix && chmod +x pix && sudo mv pix /usr/bin/
    3. Last step, $ pix i adobe-photoshop-cc

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

## Others
#### Dropbox
Dropbox is a file sharing system with a GNU/Linux client. Use it to transparently sync files across computers and architectures. It is really easy to use. You can use Dropbox for free. But it also has paid plans if you want more storage space than the free version of it.
>**Tips :** Make sure your system up to date, want to update system [Click Here]()
Down here are commands that is possible for installing it:
```Text
    - $ pi -S nemo-dropbox
    - $ pi -S nautilus-dropbox
    - $ pi -S dropbox-cli
    - $ pi -S thunar-dropbox
    - $ pi -S caja-dropbox
    - $ pi -S kfilebox
```

#### Guvcview
Guvcview is a webcam application at providing a simple interface for capturing and viewing video from v4l2 devices.
Here the command:
```Text
    $ pi -S guvcview
```
#### Parted
Parted is a program for creating and manipulating partition tables. GParted is a GUI frontend.
In other to install it you must type this command in konsole:
```Text
    $ pi -S parted
```
Parted has two modes: command line and interactive. Parted should always be started with:
```
    # parted device
```
where `device` is the hard disk device to edit (for example `/dev/sda`). If you omit the `device` argument, *parted* will attempt to guess which device you want.
**Note:**If you are't in root, use this:
```
    $ sudo bash
```

##### Command line mode for Parted
In command line mode, this is followed by one or more commands. For example:
```Text
    # parted /dev/sda mklabel gpt mkpart P1 ext3 1MiB 8MiB 
```
**Note:** Options (like `--help`) can only be specified on the command line.
##### Interactive mode for Parted
Interactive mode simplifies the partitioning process and reduces unnecessary repetition by automatically applying all partitioning commands to the specified device.

In order to start operating on a device, execute:
```Text
    # parted /dev/sdx
```
**Tips:**You will notice that the command-line prompt changes from a hash (`#`) to (`parted`): this also means that the new prompt is not a command to be manually entered when running the commands in the examples.
To see a list of the available commands, enter:
```Text
    (parted) help
```
When finished, or if wishing to implement a partition table or scheme for another device, exit from parted with:
```Text
    (parted) quit
```
After exiting, the command-line prompt will change back to `#`.

If you do not give a parameter to a command, Parted will prompt you for it. For example:
```Text
(parted) mklabel
New disk label type? gpt
```
##### Create new partition table
You need to (re)create the partition table of a device when it has never been partitioned before, or when you want to change the type of its partition table. Recreating the partition table of a device is also useful when the partition scheme needs to be restructured from scratch.

Open each device whose partition table must be (re)created with:
```Text
    # parted /dev/sdx
```
To then create a new **GUID Partition Table**, use the following command:
```
    (part) mklabel gpt
```
To create a new **Master Boot Record**/MS-DOS partition table instead, use:
```Text
    (parted) mklabel msdos
```
You can decide the number and size of the partitions the devices should be split into, and which directories will be used to mount the partitions in the installed system (also known as mount points).
The following command will be used to create partitions:
```Text
    $ (parted) mkpart part-type fs-type start end
```
- `part-type` is one of `primary`, `extended` or `logical`, and is meaningful only for MBR partition tables.
- `fs-type` is an identifier chosen among those listed by entering `help mkpart` as the closest match to the file system that you will use. The *mkpart* command does not actually create the file system: the `fs-type` parameter will simply be used by parted to set a 1-byte code that is used by boot loaders to "preview" what kind of data is found in the partition, and act accordingly if necessary.
- `start` is the beginning of the partition from the start of the device. It consists of a number followed by a **unit**, for example `1MiB` means start at 1 MiB.
- `end` is the end of the partition from the start of the device (not from the start value). It has the same syntax as `start`, for example `100%` means end at the end of the device (use all the remaining space).
>**Tip:** Most Open-Source native file systems map to the same MBR partition type code **{0x83](https://en.wikipedia.org/wiki/Partition_type#PID_83h)**, so it is perfectly safe to e.g. use ext2 for an ext4-formatted partition.

>**Warning:** It is important that the partitions do not overlap each other: if you do not want to leave unused space in the device, make sure that each partition starts where the previous one ends.

>**Note:** parted may issue a warning like:
```Text
    Warning: The resulting partition is not properly aligned for best performance.
    Ignore/Cancel?
```
The following command will be used to flag the partition that contains the /boot directory as bootable:
```Text
    (parted) set partition boot on
```
- `partition` is the number of the partition to be flagged (see the output of the `print` command).
- `esp` is an alias for `boot` on GPT.
Resizing partitions is used by this command:
```Text
    (parted) resizepart number end
```
##### Tips and tricks]
###### Dual booting with Windows XP
If you have a Windows XP partition that you would like to move from drive-to-drive that also happens to be your boot partition, you can do so easily with GParted and keep Windows happy simply by deleting the following registry key PRIOR to the partition move:
```Text
    HKEY_LOCAL_MACHINE\SYSTEM\MountedDevices
```
#### Popcorn Time
Popcorn Time is a multi-platform, free software BitTorrent client that includes an integrated media player. Popcorn Time provide a free "alternative" to subscription-based video streaming services such as Netflix.
```Text
    $ pi -S popcorntime-bin  or $ pi -S popcorntime
```
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
#### Teamviewer
Team Viewer is an awesome application for remotely accessing a computer or letting someone remotely access your computer. It is easy to use and its completely free of charge.
To install it using this command:
```Text
    $ pi -S teamviewer
```
#### VMware

>**Noted:** VMware Workstation text based installer depends on `ncurses5-compat-libs`. So you will have to install that from AUR as well as it is not available in the official package repository.

VMware Workstation is one of the best Virtualization Tool. It is a little bit more complicated to install. In this article, Let's show how to install and configure VMware Workstation Pro 14 on PionuxOS:
```Text
    Step 1: Update pi packages
    => $ pi -Syu
    Step 2: Installing git
    => $ pi -S git
    Step 3: Now navigate to the ~/Downloads directory with the following command
    => $ cd Downloads/
    Step 4: Now clone the AUR Git repository of vmware-workstation.
    => $ git clone https://aur.archlinux.org/vmware-workstation.git
    Step 5: Navigate to the vmware-workstation/ directory.
    => $ cd vmware-workstation/
```
>**&Noted:**: I tried the `makepkg -S` command for `vmware-workstation` but it throws the following errors.
```Text
    ==> Making package: vmware-workstation 15.5.1-3 (Tue Jan 14 20:10:41 2020)
    ==> Checking runtime dependencies...
    ==> Installing missing dependencies...
    error: target not found: vmware-keymaps
    ==> ERROR: 'pacman' failed to install missing dependencies.

```
