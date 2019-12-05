---
id: package
title: Listing Packages
sidebar_label: Packages
---

You may want to get the list of installed packages with their version, which is useful when reporting bugs or discussing installed packages.

- List all explicitly installed packages: `pi -Qe`.
List all packages in the **package group** named group: `pi -Sg group`
- List all explicitly installed native packages (i.e. present in the sync database) that are not direct or optional dependencies: `pi -Qent`.
- List all foreign packages (typically manually downloaded and installed or packages removed from the repositories): `pi -Qm`.
- List all native packages (installed from the sync database(s)): `pi -Qn`.
- List packages by regex: `pi -Qs regex`.
- List packages by regex with custom output format: `expac -s "%-30n %v" regex` (needs **expac**).

## Removing unused packages (orphans)
For recursively removing orphans and their configuration files:
```
    # pi -Rns $(pi -Qtdq)
```
If no orphans were found pacman outputs `error: no targets specified`. This is expected as no arguments were passed to `pi -Rns`.

## Listing changed backup files
If you want to backup your system configuration files you could copy all files in `/etc/`, but usually you are only interested in the files that you have changed. Modified **backup files** can be viewed with the following command:
```
    # pi -Qii | awk '/^MODIFIED/ {print $2}'
```

Running this command with root permissions will ensure that files readable only by root (such as /etc/sudoers) are included in the output.

## Listing all changed files from packages
If you are suspecting file corruption (e.g. by software/hardware failure), but are unsure if files were corrupted, you might want to compare with the hash sums in the packages. 
```
    # paccheck --md5sum --quiet
```

## Backup the pi database
The following command can be used to backup the local pi database:
```
    $ tar -cjf pacman_database.tar.bz2 /var/lib/pacman/local
```

<p style="color:#1493E1;">Noted :</p>

> If the pi database files are corrupted, and there is no backup file available, there exists some hope of rebuilding the pi database



## Reinstalling all packages
To reinstall all native packages, use:
```
    # pi -Qqn | pi -S -
```
