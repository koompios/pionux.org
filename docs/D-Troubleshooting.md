---
id: D-Troubleshooting
title: Bugs & Helps
sidebar_label: Bugs & Helps
---
---
## **"Failed to commit transaction (conflicting files)" error**
If you see the following error:[1]()
```
    error: could not prepare transaction
    error: failed to commit transaction (conflicting files)
    package: /path/to/file exists in filesystem
    Errors occurred, no packages were upgraded.
```

This is happening because *pi* has detected a file conflict, and by design, will not overwrite files for you. This is by design, not a flaw.

The problem is usually trivial to solve. A safe way is to first check if another package owns the file `(pi -Qo /path/to/file)`. If the file is owned by another package, [file a bug report](). If the file is not owned by another package, rename the file which 'exists in filesystem' and re-issue the update command. If all goes well, the file may then be removed.

If you had installed a program manually without using *pacman*, for example through `make install`, you have to remove/uninstall this program with all of its files. 

>Warning: Generally avoid using the --overwrite switch.

## **"Failed to commit transaction (invalid or corrupted package)" error**

Look for `.part files` (partially downloaded packages) in `/var/cache/pacman/pkg` and remove them (often caused by usage of a custom `XferCommand` in `pacman.conf`).

```
    # find /var/cache/pacman/pkg/ -iname "*.part" -exec rm {} \;
```

## Packages cannot be retrieved on installation
This error manifests as `Not found in sync db`, `Target not found` or `Failed retrieving file`.

Firstly, ensure the package actually exists. If certain the package exists, your package list may be out-of-date. Try running `pi -Syu` to force a refresh of all package lists and upgrade. Also make sure the selected [mirrors]() are up-to-date and [repositories]() are correctly configured 

## Manually reinstalling pi

> Warning: It is extremely easy to break your system even worse using this approach. Use this only as a last resort if the method from #Pi or #Pacman crashes during an upgrade is not an option..

Even if pi is terribly broken, you can fix it manually by downloading the latest packages and extracting them to the correct locations. The rough steps to perform are:

1. Determine the `pi` dependencies to install
2. Download each package from a [mirror]() of your choice
3. Extract each package to root
4. Reinstall these packages with *pi -S --overwrite* to update the package database accordingly
5. Do a full system upgrade

If you have a healthy Arch system on hand, you can see the full list of dependencies with:
```
    $ pi -Q $(pactree -u pi)
```

## Pi crashes during an upgrade
In the case that pi crashes with a "database write" error while removing packages, and reinstalling or upgrading packages fails thereafter, do the following:

1. Boot using the Arch installation media. Preferably use a recent media so that the pi version matches/is newer than the system.
2. Mount the system's root filesystem, e.g. `mount /dev/sdaX /mnt` as root, and check the mount has sufficient space with `df -h`
3. Mount the proc, sys and dev filesystems as well: `mount -t proc proc /mnt/proc; mount --rbind /sys /mnt/sys; mount --rbind /dev /mnt/dev`
4. If the system uses default database and directory locations, you can now update the system's pi database and upgrade it via `pi --sysroot /mnt -Syu as root`.
5. After the upgrade, one way to double-check for not upgraded but still broken packages: `find /mnt/usr/lib -size 0`
6. Followed by a re-install of any still broken package via `pi --sysroot /mnt -S package`.

## How do I reinstall all packages, retaining information on whether something was explicitly installed or as a dependency?

To reinstall all the native packages: `pi -Qnq` | `pi -S -` or `pi -S $(pi -Qnq)` (the `-S` option preserves the installation reason by default).

You will then need to reinstall all the foreign packages, which can be listed with `pi -Qmq`.

## Using Dropbox with non-ext4 filesystems
Workarounds have been created, see for example [dropbox-fix2AUR](https://aur.archlinux.org/packages/dropbox-fix2/). These workarounds are based on substituting the filesystem detection functions by the use of LD_PRELOAD.

It is also possible to create an ext4 formatted [sparse file](https://wiki.archlinux.org/index.php/Sparse_file) within a non-ext4 filesystem. It can then be mounted to the desired location for the Dropbox folder. On btrfs systems, it's recommended to disable copy-on-write.

## Dropbox keeps saying Downloading files

But in fact now files are synced with your box. This problem is likely to appear when your Dropbox folder is located on a NTFS partition whose mount path contains spaces, or permissions are not set for that partition. See more in the [forums](https://bbs.archlinux.org/viewtopic.php?id=153368). To resolve the problem pay attention to your entry in /`etc/fstab`. Avoid spaces in the mount path and set write permissions with the "default_permissions" option:
```shelll
    UUID=01CD2ABB65E17DE0 /run/media/username/Windows ntfs-3g uid=username,gid=users,default_permissions 0 0
```
## Error Connecting with dropbox...
It may happen that Dropbox cannot connect successfully because it was loaded before an internet connection was established. This can happen on wireless connections, or fast loading machines on wired networks. The best solution to this problem, for wired and wireless connections, is #Dropbox on laptops which will ensure that Dropbox is started only after the connection is established.

An alternative solution, for those not using netctl or NetworkManager, is to delay the startup of Dropbox:

- `cp ~/.config/autostart/dropbox.desktop ~/.config/autostart/dropbox-delayed.desktop`
- Prevent Dropbox from doing a standard autostart by unchecking Dropbox - Preferences - General - Start Dropbox on system startup. This removes `~/.config/autostart/dropbox.desktop.`
- Edit `~/.config/autostart/dropbox-delayed.desktop` and replace` Exec=dropbox` with `Exec=bash -c "sleep timeout && dropbox"`. Tweak the **timeout** parameter, the value of `3` is a good start.

## Dropbox does not start - "This is usually because of a permission error"
**Check permissions**
Make sure that you own Dropbox's directories before running the application. This includes

- `/.dropbox` - Dropbox's configuration directory
- `/Dropbox` - Dropbox's download directory (default)
You can ensure this by changing their owner with `chown -R.`

This error could also be caused by `/var` being full.
## Dropbox was Errors caused by running out of space
A common error that might happen is that there is no more available space on your `/tmp` and `/var` partitions. If this happens, Dropbox will crash on startup with the following error in its log:
```Text
    Exception: Not a valid FileCache file
```
A detailed story of such an occurrence can be found in the forums. Make sure there is enough space available before launching Dropbox.

Another case is when the root partition is full:
```Text
    OperationalError: database or disk is full
```
Check to see the available space on partitions with `df`.
## My terminal does not support UTF-8
The following lists some (not all) terminals that support UTF-8:

- gnustep-terminal
- konsole
- mlterm
- rxvt-unicode
- st
- termite
- VTE-based terminals
- xterm - Run with the argument `-u8` or configure resource `xterm*utf8: 2`.

## Gnome-terminal or rxvt-unicode
You need to launch these applications from a UTF-8 locale or they will drop UTF-8 support. Enable the `en_US.UTF-8` locale (or your local UTF-8 alternative) per the instructions above and set it as the default locale, then reboot.
## My system is still using wrong language
It is possible that the environment variables are redefined in other files than `locale.conf`, for example ~/.pam_environment. 
If you are using a desktop environment, such as **GNOME**, its language settings may be overriding the settings in `locale.conf.`

**KDE** Plasma also allows to change the UI's language through the system settings. If the desktop environment is still using the default language after the modification, deleting the file at `~/.config/plasma-localerc` (previously: `~/.config/plasma-locale-settings.sh`) should resolve the issue.
## Fixing VMware not fullscreen
Following the commands below:
```Text
    1. $ sudo bash
    2. $ pacman -Sy gtkmm net-tools
    3. $ pacman -Sy opeb-vm-tools
    4. $ pacman -Sy xf86-video-vmware
    5. $ pacman -Sy xf86-input-vmmouse
    6. $ systemctl enable vmtoolsd.service
    7. $ reboot
```
---
