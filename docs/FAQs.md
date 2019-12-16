---
id: FAQs
title: Contents
sidebar_label: FAQs
---
---
## What is KramaOS?

KramaOS experiment for KOOMPI community users. Those who have old laptop and lower specs hardware. We name our official OS that will run on KOOMPI hardware, KOSMOS.

KramaOS is the **first version** of our operating System(OS). This version is based on Ubuntu Server with user interface customized of Budgie desktop and Brisk Menu.

Our OS version1 is store on Gdrive at the moment due to Github's limited amount of storage. Follow this link: [Click here](https://tinyurl.com/kramaos-iso.)

## What is Kosmos?

Kosmos is the **Old version** of PionuxOS which is customize and self-Customizable by Cambodia based on Archlinux open-source operating system software.Here come new version which based on **Archlinux** with KOOMPI-KDE flavor.

## What is PionuxOS?

[Pionux](https://pionux.org/) is a fully customized and self-customizable Cambodia based open-source operating system software solution for up and coming engineers, inventors, organizers, developers and basically free thinkers in a modern-day post-Microsoft world.

## How can I install PionuxOS?
You can install PionuxOS or our OS by go to download through the links belows:

- [PionuxOS(Latest version)](https://repo.pionux.org/iso/x86_64/koompi-os-v2.1.3-x86_64.iso)

- [KOSMOS](http://repo.kramaos.org/iso/KOSMOS-V2.0.0-BETA-1.1-2019.03.01-x86_64.iso)

- [KramaOS(First version)](https://tinyurl.com/kramaos-iso)
## What is different between Pionux and Linux?

Pinoux is the fully customized and self-customizable which make it more special than Linux. It has:
- More Feature and suitable for Client
- It is Secured
- It is flexible suitable more for your work espically schooling
- You don't have to worry about the breaking down again

## When will the new release be made available?

PionuxOS releases are simply a live environment for installation or rescue, which include the base meta package and a few other packages. The releases will be let everyone know through [here](../README.md##Resources).

## The Packages update was released, but pi says system is up to date!
## How to upgrade or update system?

In order to update or upgrade system in PionuxOS, you need to run this command:
```
      $ pi -Syu
```
If you want to update the database, you can use this command in terminal:
```
      $ pi -Syy
```

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
[Click here for more Info]()
## How to Change password in PinouxOS?

As a Pionux or Linux system administrator (sysadmin) you can change password for any users on your server. To change a password on behalf of a user:

1. First sign on or “`su`” or “`sudo`” to the “`root`” account on **Pionux**, run: `sudo -i`
1. Then type, `passwd Administrator_name` to change a password for Admin user
1. The system will prompt you to enter a password twice

For more Info about password: [Click here](https://pionux.org/docs/documentation#password-info-in-pionuxos)

## If I need an older version of an installed library, can I just symlink to the newer version?
