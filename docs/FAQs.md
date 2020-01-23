---
id: FAQs
title: Contents
sidebar_label: FAQs
---
---

## How can I install PionuxOS?
You can install the PionuxOS by go to click below and download it. After that booted it into the USB. For more details [Click here](https://pionux.org/docs/pionux-OS)
[PionuxOS(Latest version)](https://repo.pionux.org/iso/x86_64/koompi-os-v2.1.3-x86_64.iso)

## What is different in Pionux?

Pinoux is the fully customized and self-customizable which make it more special than Linux. It has:
- More Feature and suitable for Client
- It is Secured
- It is flexible suitable more for your work espically schooling
- You don't have to worry about the breaking down again

## When will the new release be made available?

PionuxOS releases are simply a live environment for installation or rescue, which include the base meta package and a few other packages. The releases will be let everyone know through [here](../README.md##Resources).

## How to upgrade or update system?

In order to update or upgrade system in PionuxOS [Click here](https://pionux.org/docs/Guide-line#update-the-system)
## Is PionuxOS free to use?

Indeed, It is a yes answer, PionuxOS is the open source and it is free to use as much as everyone like it.

## What is the requirement do I need for Installing PionuxOS?
In order to install PionuxOS in your computer what you need the most is Booted flash drive of PionuxOS.

If you aren't familiar with it you can come to KOOMPI Center: [Click here for the location:](https://maps.app.goo.gl/h89TJW8gaZHdEkdQ9) 

To Joining our community: [Click here](https://t.me/koompi)
## What is pi?

The `pi` which is the shortcut formation of `pacman` is one of the majority features of our System. It is a combination of simple binary package manager with easy-open-source-to-use build system.

## What is sudo?

**sudo** — A widely used command in the Linux command line, sudo stands for "SuperUser Do". So, if you want any command to be done with administrative or root privileges, you can use the sudo command.
## What is the different between Pix and Pi?

As you know that pi is the shortcut form of pacman which we are using it to install applications and packages. Even thought we  had some updated we still using pi as the main command. 

Pix sounds familiar, but it is quite different because it is stand for **pacman extented or extra** which is supported by many more applicantions..,ect. that **Pi** can't support like Microsoft office. 
## How to install Pi or Pacman?

```shell
    1. Downloads pi.tar.gz in your Downloads folder

    2. Run tar -xvf pi.tar.gz

    3. In the terminal run cd pi-update

    4. In the terminal do sudo chmod +x run

    5. In the terminal do ./run

    6. Test if pi is installed do pi
```

## What is terminal or konsole?

Originally, a konsole was a terminal “plugged into” the computer: it provided the interface that was used to configure and control the computer and to view messages from the operating system.

When a Linux server first boots, it prints status messages to the console, the familiar scroll of text that brings joy to many a Linux user. When you interact with your server, you connect a terminal to a program running in a console.


## How to setup Application in PionuxOS?
In order to install application in PionuxOS you have to use commands in terminal or konsole:
**Sample:**
```shell
      pi -S Application_Name
```
[Click here for more Info](https://pionux.org/docs/installation)
## How to Change password in PinouxOS?

As a Pionux or Linux system administrator (sysadmin) you can change password for any users on your server. To change a password on behalf of a user:

1. First sign on or “`su`” or “`sudo`” to the “`root`” account on **Pionux**, run: `sudo -i`
1. Then type, `passwd Administrator_name` to change a password for Admin user
1. The system will prompt you to enter a password twice

For more Info about password: [Click here](https://pionux.org/docs/documentation#password-info-in-pionuxos)

## Problem with Updating System
#### How can I fix this when I run "$ pi -Syu" it show like this:(pyqt5-common)
```Text
    :: Synchronizing package databases...
    core is up to date
    extra is up to date
    community is up to date
    :: Starting full system upgrade...
    :: Replace ilmbase with extra/openexr? [Y/n] 
    :: Replace libmagick with extra/imagemagick? [Y/n] 
    :: Replace pygobject2-devel with extra/python2-gobject2? [Y/n] 
    resolving dependencies...
    looking for conflicting packages...
    :: python-pyqt5 and pyqt5-common are in conflict. Remove pyqt5-common? [y/N] 
    error: unresolvable package conflicts detected
    error: failed to prepare transaction (conflicting dependencies)
    :: python-pyqt5 and pyqt5-common are in conflict
    Error installing repo packages
```
In order to solve this problem, you have to:
    1. Go into your terminal
    2. Run this commands `$ sudo pacman -Rdd pyqt5-common`. (Following all the insturction)
    3. After it succeed you can update your system now
#### After I have done it, it is still not working. What should I do?
So, What you need to do is that you have to run other command
```Text
    $ sudo pacman -Rdd libdmx libxxf86dga
```
After that is done, run the updated command:
```Text
    $ pi -Syu
```
After update just do this next command, you will be finish:
```Text
    $ pacman -Rns $(pacman -Qqtd)
```
---
<!-- * [I found error, what should I do?]()
* [Can I join the community?]()
* [Is Pionux need more developer?]()
* [I found bugs, How to report bug?]() -->