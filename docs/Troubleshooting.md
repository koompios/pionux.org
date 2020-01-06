---
id: Troubleshooting
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

---
