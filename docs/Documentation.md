---
id: documentation
title: PionuxOS Infomations
sidebar_label: PionuxOS
---
---
Pionux is an open source and free software operating system build around Linux Kernel. You can customize everything on Pionux that you want.

Down here are almost the commands for using. Furthermore, There are somethings more that how team have produces in this past years. [Click here]() to see what is news? 
## Basic Commands Info
> **Noted**: To do all  basic commands below, you must be in the terminal:

To show the directory you are currently in:

```
    [koompi@koompi-pc ~]$ pwd
```

Output :

```
    /home/koompi
```

Use "ls" for showing all the files in your directory:

```
    [koompi@koompi-pc ~]$ ls
```

Output :

```
    Desktop         Save               dconf       mkrepo     
    Documents       Videos             Downloads   code    
    Musics          example.desktop
```

Use "ls -a" to list down even the hidden files:

```
    [koompi@koompi-pc ~]$ ls -a
```

Output :

```
    .               ..                 .mozilla        .viminfo
    .vscode-oss     Save               dconf           mkrepo   
    Desktop         Videos             Documents       Downloads           
    Musics          example.desktop    code
 ```
 " cd " ― Use this command for go into other directory.If you are in /home/koompi you want go into *Documents*:
 ```
    [koompi@koompi-pc ~]$ pwd
    /home/koompi
    [koompi@koompi-pc ~]$ cd Documents/
```

Output :
```
    [koompi@koompi-pc Documents]$
```
#### touch
To create file " touch ":
```
    $ touch <file name with extension >
```
For example :
```
    $ touch Name.txt
```
#### mkdir

To create a directory, you must use:
``` 
    $ mkdir <name of directory you want to put>
```

For removing the directory, you can use:
```
    $ rmdir <name of directory you want to delete>
```

> **Noted**: This command only working when your directory is empty.

#### rm
To delete directory or files, "rm" it is:
```
    $ rm <file's name or directory's name>
```

> **Tips**: Not Strongly Recommended.

> **Warning**: Not only empty directory or file, but also everything!!!

If you cant't delete, you can use command below to force remove:
```
    $ rm -rf <directory or files's name>
```

Need some help with commands, this would be useful:
```
    $ man cd or $ cd --help
```

#### cd

(" cd ") is the command you want to know more info.
Output :
```shell
cd: cd [-L|[-P [-e]] [-@]] [dir]
    Change shell working directory.
    
    Change the current directory to DIR.  The default DIR is the value 
    HOME shell variable.
    
    The variable CDPATH defines the search path for the directory conta
    DIR.  Alternative directory names in CDPATH are separated by a colo
    A null directory name is the same as the current directory.  If DIR
    with a slash (/), then CDPATH is not used.
    
    If the directory is not found, and the shell option `cdable_vars' i
    the word is assumed to be  a variable name.  If that variable has a
    its value is used for DIR.
    
    Options:
      -L        force symbolic links to be followed: resolve symbolic
                links in DIR after processing instances of `..'
      -P        use the physical directory structure without following
                symbolic links: resolve symbolic links in DIR before
                processing instances of `..'
      -e        if the -P option is supplied, and the current working
                directory cannot be determined successfully, exit with
                a non-zero status
      -@        on systems that support it, present a file with extende
                attributes as a directory containing the file attribute
    
    The default is to follow symbolic links, as if `-L' were specified.
    `..' is processed by removing the immediately previous pathname com
    back to a slash or the beginning of DIR.

    Exit Status:
    Returns 0 if the directory is changed, and if $PWD is set successful
    -P is used; non-zero otherwise.
```

You know, you can also copy file through command. It takes only two arguments: The first is the location of the file to be copied, the second is where to copy.

```shell
    [koompi@koompi-pc ~]$ ls
    Desktop         Save               dconf       mkrepo
    Documents       Videos             Downloads   code
    Musics          example.desktop    New.txt
    [koompi@koompi-pc ~]$ cp New.txt /Documents
```

Let's check in *Documents* directory:

```
    [koompi@koompi-pc ~]$ ls Documents/
    New.txt
```
#### mv
"mv" ― You know, you can also move file through command. It takes only two arguments like `cp`:
```shell
    [koompi@koompi-pc ~]$ ls
    Desktop         Save               dconf       mkrepo     
    Documents       Videos             Downloads   code    
    Musics          example.desktop    New.txt
    [koompi@koompi-pc ~]$ mv New.txt /Documents
```
Here in **Documents** directory:
```
    [koompi@koompi-pc ~]$ ls Documents/
    New.txt
```
If you want to search for the locateion of the file, you can use **locate**:
```command
    $ locate <file_name>
```
## Intermediate Commands Info

- The **echo** command helps us move some data, usually text into file.For example, if you want to create a new text file or add to an already made text file, you just need to type in, **“echo Hello, This is Pionux. >> new.txt”**.

#### cat

- **cat** is the command for showing the contents in file. It is usually used to easily view programs. 
```shell
    [koompi@koompi-pc ~]$ echo Hello, This is Pionux. >> new.txt
    [koompi@koompi-pc ~]$ cat new.txt
```
Output :
```text
    Hello, This is Pionux.
```
#### nano

- "**nano**" and "**vi**" are already installed in Pionux command line. The **nano** command is a good text editor that denotes keywords with color and can recognize most languages. And **vi** is simpler than nano.
#### locale
**Locales** are used by `glibc` and other locale-aware programs or libraries for rendering text, correctly displaying regional monetary values, time and date formats, alphabetic idiosyncrasies, and other locale-specific standards.

- `locale-gen` also runs with every update of `glibc.`
- `UTF-8` is recommended over other character sets. 

##### Setting the locale
To display the currently set locale and its related environmental settings, type:
```
    $ locale
```
The locale to be used, chosen among the previously generated ones, is set in locale.conf files. Each of these files must contain a new-line separated list of environment variable assignments, having the same format as output by locale.

To list available locales which have been previously generated, run:
```
    $ localedef --list-archive
```
Alternatively, using `localectl`:
```Text
    $ localectl list-locales
```
##### Generating locales
Before a **locale** can be enabled on the system, it must be generated. This can be achieved by uncommenting applicable entries in `/etc/locale`.gen, and running:
```Text
    $ sudo locale-gen`.
```
#### sudo
- **sudo** — A widely used command in the Linux command line, sudo stands for "SuperUser Do". So, if you want any command to be done with administrative or root privileges, you can use the sudo command. 
you can change root password by using command below:
```
    [koompi@koompi-pc ~]$ sudo passwd
```
Output :
```
    New password: 
    Retype new password: 
    passwd: password updated successfully
```
> **Tips**: When you type the password it was hidden you can't see.
#### df
- **df** — We use **df**  command to see the available disk space in each of the partitions in your system. You can add more options like **-h** to see size in gigabyte.
```
    [koompi@koompi-pc ~]$ df -h
```
Output :
```
    ilesystem      Size  Used Avail Use% Mounted on
    dev             3.9G     0  3.9G   0% /dev
    run             3.9G   18M  3.9G   1% /run
    /dev/sdb6        58G   33G   23G  60% /
    tmpfs           3.9G   85M  3.8G   3% /dev/shm
    tmpfs           3.9G     0  3.9G   0% /sys/fs/cgroup
    tmpfs           3.9G   15M  3.9G   1% /tmp
    tmpfs           3.9G  1.5M  3.9G   1% /etc/pacman.d/gnupg
    tmpfs           786M   20K  786M   1% /run/user/1001
```

#### grep

The grep command which stands for “global regular expression print,” processes text line by line and prints any lines which match a specified pattern. The grep command is used to search text or searches the given file for lines containing a match to the given strings or words. By default, grep displays the matching lines. Use grep to search for lines of text that match one or many regular expressions, and outputs only the matching lines. Grep is considered to be one of the most useful commands on Pionux and Linux operating systems. `grep` is a powerful file pattern searcher in Pionux and Linux. If it is not installed on your system, you can easily install it via your package manager.For installing grep in your system, please use the following command.
```
    $ pi -S grep
```

#### Using grep for search files

To search /etc/passwd file for the user koompi, enter the following command.
```shell
    $ grep koompi /etc/passwd
```
Where,
`/etc/passwd` is the directory you want to search in

You can force grep to ignore word case i.e match koompi, KOOMPI, Koompi and all other combination with the -i option:
```
    $ grep -i “koompi” 
```

If you want to search for a word, and avoid matching substrings use ‘-w ‘option. Just doing a normal search will show all the lines. The following example is the regular grep where it is searching for “is”. When you search for “is”, without any option it will show out “is”, “his”, “this” and everything which has the substring “is”.

```
    $ grep -i “is” samplefile

    THIS LETTER IS THE 1ST UPPER CASE LETTER IN THIS LINE.

    this letter is the 1st lower case letter in this LINE.

    This Line Has All Its First Character Of The Word With Upper Case.

    Two lines above this line is empty.

    And this is the last line.
```

The following example is the WORD grep where it is searching only for the word “is”. Please note that this output does not contain the line “This Line Has All Its First Character Of The Word With Upper Case”, even though “is” is there in the “This”, as the following is looking only for the word “is” and not for “this”.
```
    grep -iw “is” samplefile

    THIS LETTER IS THE 1ST UPPER CASE LINE IN THIS FILE.

    this letter is the 1st lower case letter in this line.

    Two lines above this line is empty.

    And this is the last line
```
>**Tips**: If you need any further assistance please [contact]() our support department.

## Packages Info 

#### Listing Packages
You may want to get the list of installed packages with their version, which is useful when reporting bugs or discussing installed packages.

- List all explicitly installed packages: `pi -Qe`.
List all packages in the **package group** named group: `pi -Sg group`
- List all explicitly installed native packages (i.e. present in the sync database) that are not direct or optional dependencies: `pi -Qent`.
- List all foreign packages (typically manually downloaded and installed or packages removed from the repositories): `pi -Qm`.
- List all native packages (installed from the sync database(s)): `pi -Qn`.
- List packages by regex: `pi -Qs regex`.
- List packages by regex with custom output format: `expac -s "%-30n %v" regex` (needs **expac**).

#### Removing unused packages (orphans)
For recursively removing orphans and their configuration files:
```shell
    # pi -Rns $ (pi -Qtdq)
```
If no orphans were found pacman outputs `error: no targets specified`. This is expected as no arguments were passed to `pi -Rns`.

#### Listing changed backup files
If you want to backup your system configuration files you could copy all files in `/etc/`, but usually you are only interested in the files that you have changed. Modified **backup files** can be viewed with the following command:
```
    # pi -Qii | awk '/^MODIFIED/ {print $ 2}'
```

Running this command with root permissions will ensure that files readable only by root (such as /etc/sudoers) are included in the output.

#### Listing all changed files from packages
If you are suspecting file corruption (e.g. by software/hardware failure), but are unsure if files were corrupted, you might want to compare with the hash sums in the packages. 
```shell
    # paccheck --md5sum --quiet
```

#### Backup the pi database
The following command can be used to backup the local pi database:
```
    $ tar -cjf pacman_database.tar.bz2 /var/lib/pacman/local
```
> **Noted**: If the **pi** database files are corrupted, and there is no backup file available, there exists some hope of rebuilding the pi database.

#### Reinstalling all packages
To reinstall all native packages, use:
```shell
    # pi -Qqn | pi -S -
```
## Password Info 
> - How do I set or change Pionux system password for any user account?
> - How can I change user password on Pionux operating system using the command-line options?

Both **Pionux** and **Linux** operating systems use the `passwd` command to change user password. The `passwd` is used to update a user’s authentication token (password) stored in /etc/shadow file. The `passwd` change passwords for user and group accounts. A normal user may only change the password for his/her own account, the super user (or root) may change the password for any account. The administrator of a group may change the password for the group. It also changes account information, such as the full name of the user, user login shell, or password expiry date and interval.

#### Set User Password
Type the following command to change your own password
```
    $ passwd
```
Sample Output:
```
    [koompi@koompi-pc ~]$ passwd
    Changing password for koompi.
    Current password: 
    New password: 
    Retype new password: 
    passwd: password updated successfully
```
The **user** is first prompted for his/her old password if one is present. This password is then encrypted and compared against the stored password. The user has only one chance to enter the correct **password**. The super user is permitted to bypass this step so that forgotten passwords may be changed. **A new password** is tested for complexity. As a general guideline, passwords should consist of 10 `to` 20 `characters` including one or more** from each of following sets:

1. `Lower` case alphabetics
1. `Upper` case alphabetics
1. Digits `0` to `9`
1. `Punctuation marks`/`spacial characters`

#### Change Password For Other User Account

You need to login as the root user. [To go into root](), type the following command to change password for User_Name:

```shell
    # passwd User_Name
```
or 
```shell
    $ sudo passwd User_Name
```
Sample Output:
```
    [koompi@koompi-pc ~]$ sudo passwd koompi
    New password: 
    Retype new password: 
    passwd: password updated successfully
```
Where, **koompi** – is username or account name.

>**Noted**: Passwords do not display to the screen when you enter them.

#### Change Group Password

When the `-g` option is used, the password for the named group is changed. In this example, change password for group:
```
    # passwd -g Group_Name
```
The current group password is not prompted for. The `-r` option is used with the `-g` option to remove the current password from the named group. This allows group access to all members. The `-R` option is used with the `-g` option to restrict the named group for all users.

#### Changing user passwords on PionuxOS

As a Pionux or Linux system administrator (sysadmin) you can change password for any users on your server. To change a password on behalf of a user:

1. First sign on or “`su`” or “`sudo`” to the “`root`” account on **Pionux**, run: `sudo -i`
1. Then type, `passwd Administrator_name` to change a password for Admin user
1. The system will prompt you to enter a password twice

#### Conclusion
The passwd command line utility is used to update or change user’s password. The encrypted password is stored in `/etc/shadow` file and account information is in `/etc/passwd file`. To see all user account try [grep command](./basic.md###grep) or [cat command](./basic###cat) as follows:

```
    $ cat /etc/passwd
    $ grep '^userNameHere' /etc/passwd
```
## Pi Info
#### What is Pi?
The **`pi`** which is the shortcut formation of **`pacman`** is one of the majority features of our System. It is a combination of simple binary package manager with easy-open-source-to-use build system.

#### How to Install Pi ?


To install pi package on your system, follow these steps:
```shell
    1. Downloads pi.tar.gz in your Downloads folder

    2. Run tar -xvf pi.tar.gz

    3. In the terminal run cd pi-update

    4. In the terminal do sudo chmod +x run

    5. In the terminal do ./run

    6. Test if pi is installed do pi
```
#### Update the System
```
    $ pi -Syu
```
To update the Database:
```
    $ pi -Syy
```

#### Pi Usage
``` 
    $ pi
    $ pi <operation> [...]
    $ pi <package(s)>
```
> **Noted**: Make sure you have your `system is fully up to date` before installing. 

> **Noted**: Packages often have optional dependencies which are packages that provide additional functionality to the application but not strictly required for running it. When installing a package, the list of package optionals dependencies will be pop up.

> **Warning**: "When installing packages, avoid refreshing the packages list without updated the system. In practice for running command  do **not** run ```$ pi -Sy package_name``` instead of ``` $ pi -Syu package_name```, as it could lead to dependency issues.
Basic usage:
> Note: Make sure you have your `system is fully up to date` before installing. 
#### Installing Packages
To installing a signal package, including the dependencies, follow the following command:
```shell
    # pi -S <Package name> or pi -i <Package name>
```
To installing the list of packages:
```shell
    # pi -S <Package name1 Package name2 ...>
```
#### Installing Package Group
Some packages belong to a **group of packages** that call be installed at the same time. For example as down here:
```shell
    # pi -S <Package group name>
```
To see what inside the package group, run:
```shell
    # pi -Sg <Package group name>
```
#### Removing Packages
If you want to only remove the package, the following command is sufficient:
```    
    # pi -R <Package name>
```
To remove the package and those of its dependencies that aren’t needed by any other application, do
```
    # pi -Rs <Package name>
```
To remove a package, its dependencies and all the packages that depend on the target package:
```
    # pi -Rsc <Package name>
```
To remove a package, which is required by another package, without removing the dependent package:
```
    # pi -Rdd <Package name>
```
> **Note:** All operation is required password.Then if you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your operation.

Here Special usage to automate the install procedure (Recommend):
```shell
	$ yes | pi -S <Package name> or $ pi -S --noconfirm <Package name> => [Install packages with no confirm] |	
```

#### Pi Querying Package Database
```shell
    $ pi -Q      #queries the local package database
    $ pi -s      #sync database
    $ pi -F      #files database
```
For more options about querying:
```shell
    $ pi -Q --help
```
Options:
```shell
  -b, --dbpath <path>               # set an alternate database location
  -c, --changelog                   # view the changelog of a package
  -d, --deps                        # list packages installed as dependencies [filter]
  -e, --explicit                    # list packages explicitly installed [filter]
  -g, --groups                      # view all members of a package group
  -i, --info                        # view package information (-ii for backup files)
  -k, --check                       # check that package files exist (-kk for file properties)
  -l, --list                        # list the files owned by the queried package
  -m, --foreign                     # list installed packages not found in sync db(s) [filter]
  -n, --native                      # list installed packages only found in sync db(s) [filter]
  -o, --owns <file>                  # query the package that owns <file>
  -p, --file <package>               # query a package file instead of the database
  -q, --quiet                       # show less information for query and search
  -r, --root <path>                 # set an alternate installation root
  -s, --search <regex>              # search locally-installed packages for matching strings
  -t, --unrequired                  # list packages not (optionally) required by any
                                      package (-tt to ignore optdepends) [filter]
  -u, --upgrades                    # list outdated packages [filter]
  -v, --verbose                     # be verbose
      --arch <arch>                 # set an alternate architecture
      --cachedir <dir>              # set an alternate package cache location
      --color <when>                # colorize the output
      --config <path>                # set an alternate configuration file
      --confirm                      # always ask for confirmation
      --debug                       # display debug messages
      --disable-download-timeout    # use relaxed timeouts for download
      --gpgdir <path>               # set an alternate home directory for GnuPG
      --hookdir <dir>               # set an alternate hook location
      --logfile <path>               # set an alternate log file
      --noconfirm                    # do not ask for any confirmation
      --sysroot                     # operate on a mounted guest system (root-only)
```
**Pi** also can search for packages in the database (package_name and descriptions):
```shell
    $ pi -Ss String
```

> **Warning**: Sometimes, -s's builtin ERE (Extended Regular Expressions) can cause a lot of unwanted results, so it has to be limited to match the package name only; not the description nor any other field:

Example :
```
    $ pi -Ss '^vim-'
```
To Search for already installed package:
```
    $ pi -Qs String1 String2 ...
```
To display extensive information about a given package:
```
    $ pi -F String1 String2
```
> **Tips**: Passing two `-i` flags will also display the list of backup files and their modification states:
```
    $ pi -Qii package_name
```
To verify the presence of the files installed by a package:
```
    $ pi -Qk package_name
```

> **Tips**: Passing the `k` flag twice will perform a more thorough check.

#### Cleaning the Package Caches
**Pi** stores its downloaded packages in `/var/cache/pacman/pkg/` and does not remove the old or uninstalled versions automatically. This has some advantages:

1. It allows to **downgrade** a package without the need to retrieve the previous version through other means, such as the **Arch Linux Archive.**
2. A package that has been uninstalled can easily be reinstalled directly from the cache folder, not requiring a new download from the repository.
However, it is necessary to deliberately clean up the cache periodically to prevent the folder to grow indefinitely in size.

The paccache script, provided within the `pacman-contrib` package, deletes all cached versions of installed and uninstalled packages, except for the most recent 3, by default:
```
    # paccache -r
```
**Enable** and **start** `paccache.timer` to discard unused packages weekly.

> **Tips**: You can create a `hook` to run this automatically after every pi transaction.

For more options aboout paccache use :
```
    # paccache -h
```
**Pacman** also has some built-in options to clean the cache and the leftover database files from repositories which are no longer listed in the configuration file `/etc/pacman.conf`. 
However *pacman* does not offer the possibility to keep a number of past versions and is therefore more aggressive than paccache default options.

To remove all the cached packages that are not currently installed, and the unused sync database, execute:
```
    # pi -Sc
```

To remove all files from the cache, use the clean switch twice, this is the most aggressive approach and will leave nothing in the cache folder:
```
    # pi -Scc
```
> **Warning**: One should avoid deleting from the cache all past versions of installed packages and all uninstalled packages unless one desperately needs to free some disk space. This will prevent downgrading or reinstalling packages without downloading them again.
#### Others
Operations:

```shell
    $ pi {-h --help}
    $ pi {-V --version}
    $ pi {-D --database}    # <options> <package(s)>
    $ pi {-F --files}        # [options] [package(s)]
    $ pi {-Q --query}       # [options] [package(s)]
    $ pi {-R --remove}      # [options] <package(s)>
    $ pi {-S --sync}        # [options] [package(s)]
    $ pi {-T --deptest}     # [options] [package(s)]
    $ pi {-U --upgrade}     # [options] <file(s)>
```

New operations:

```shell
    $ pi {-Y --pi}          # [options] [package(s)]
    $ pi {-P --show}        # [options]
    $ pi {-G --getpkgbuild} # [package(s)]
```

New options:
```shell 
    --repo                  # Assume targets are from the repositories
    -a --aur                # Assume targets are from the AUR
```

Permanent configuration options:

```shell
    --save                 # Causes the following options to be saved back to the config file when used
    --aururl      <url>    # Set an alternative AUR URL  
    --builddir    <dir>    # Directory used to download and run PKGBUILDS
    --editor      <file>    # Editor to use when editing PKGBUILDs
    --editorflags <flags>    # Pass arguments to editor
    --makepkg     <file>    # makepkg command to use  
    --mflags      <flags>    # Pass arguments to makepkg
    --pacman      <file>    # pacman command to use
    --tar         <file>    # bsdtar command to use
    --git         <file>    # Git command to use  
    --gitflags    <flags>    # Pass arguments to git
    --gpg         <file>    # gpg command to use  
    --gpgflags    <flags>    # Pass arguments to gpg
    --config      <file>     # pacman.conf file to use
    --makepkgconf <file>    # makepkg.conf file to use
    --nomakepkgconf        # Use the default makepkg.conf

    --requestsplitn <n>    # Max amount of packages to query per AUR request
    --completioninterval   # <n> Time in days to to refresh completion cache
    --sortby    <field>     # Sort AUR results by a specific field during search
    --answerclean   <a>    # Set a predetermined answer for the clean build menu
    --answerdiff    <a>     # Set a predetermined answer for the diff menu
    --answeredit    <a>    # Set a predetermined answer for the edit pkgbuild menu
    --answerupgrade <a>    # Set a predetermined answer for the upgrade menu
    --noanswerclean        # Unset the answer for the clean build menu
    --noanswerdiff          # Unset the answer for the edit diff menu
    --noansweredit         # Unset the answer for the edit pkgbuild menu
    --noanswerupgrade      # Unset the answer for the upgrade menu
    --cleanmenu            # Give the option to clean build PKGBUILDS
    --diffmenu              # Give the option to show diffs for build files
    --editmenu             # Give the option to edit/view PKGBUILDS
    --upgrademenu          # Show a detailed list of updates with the option to skip any
    --nocleanmenu          # Don't clean build PKGBUILDS
    --nodiffmenu            # Don't show diffs for build files
    --noeditmenu           # Don't edit/view PKGBUILDS
    --noupgrademenu        # Don't show the upgrade menu
    --askremovemake        # Ask to remove makedepends after install
    --removemake           # Remove makedepends after install
    --noremovemake         # Don't remove makedepends after install

    --cleanafter           # Remove package sources after successful install
    --nocleanafter         # Do not remove package sources after successful build
    --bottomup             # Shows AUR's packages first and then repository's
    --topdown              # Shows repository's packages first and then AUR's

    --devel                # Check development packages during sysupgrade
    --nodevel              # Do not check development packages
    --gitclone             # Use git clone for PKGBUILD retrieval
    --nogitclone           # Never use git clone for PKGBUILD retrieval
    --rebuild              # Always build target packages
    --rebuildall           # Always build all AUR packages
    --norebuild            # Skip package build if in cache and up to date
    --rebuildtree          # Always build all AUR packages even if installed
    --redownload           # Always download pkgbuilds of targets
    --noredownload         # Skip pkgbuild download if in cache and up to date
    --redownloadall        # Always download pkgbuilds of all AUR packages
    --provides             # Look for matching providers when searching for packages
    --noprovides           # Just look for packages by pkgname
    --pgpfetch             # Automatically resolve conflicts using pacman's ask flag
    --nouseask             # Confirm conflicts manually during the install
    --combinedupgrade      # Refresh then perform the repo and AUR upgrade together
    --nocombinedupgrade    # Perform the repo upgrade and AUR upgrade separately

    --sudoloop             # Loop sudo calls in the background to avoid timeout
    --nosudoloop           # Do not loop sudo calls in the background

    --timeupdate           # Check packages' AUR page for changes during sysupgrade
    --notimeupdate         # Do not check packages' AUR page for changes
```

Show specific options:

```shell
    -c --complete         # Used for completions
    -d --defaultconfig     # Print default pi configuration
    -g --currentconfig     # Print current pi configuration
    -s --stats            # Display system package statistics
    -w --news             # Print arch news
```

Pi specific options:

```text
    -c --clean            # Remove unneeded dependencies
       --gendb            # Generates development package DB used for updating
```

getpkgbuild specific options:

```text
    -f --force            # Force download for existing tar packages
```

Contributed by @LyhourChhen

## Root Info

The **root** account on a Pionux computer is the account with full privileges. Root access is often necessary for performing commands in PionuxOS, especially commands that affect system files. Because root is so powerful, it's recommended to only request root access when necessary, as opposed to logging in as the root user. This can help prevent accidental damage to important system files.

#### Root Access in Terminal(Konsole)

1. **Open the terminal**. If the terminal is not already open, open it. Many distributions allow you to open it by pressing `Ctrl+Alt+T`.
1. Type **su -** and **press ↵** Enter. This will attempt to log you in as `super user`. You can actually use this command to log in as any user on the machine, but when left blank it will attempt to log in as root.
1. **Enter the root password when prompted**. After typing ***su -** and **press ↵** Enter, you'll be prompted for the root password.
If you get an "authentication error" message, your root account is likely locked. See the next section for instructions on unlocking it.
1. **Check the command prompt**. When you are logged in as root, the command prompt should end with `#` instead of `$`.
1. Now you can use any commands that required root.

#### Logout of Root
You can **Logout of Root** by two ways:
First Way,Type:
```
   # exit
```
Second Way,Press:
```
     CTRL+D
```
#### Unlocked the Root Account
1. **Unlock the root account (PionuxOS)**. PionuxOS locks the root account so that the average user can't access it. This is done because root access is rarely necessary when using the `sudo` command (see the previous section). Unlocking the root account will allow you to log in as root.
```
    sudo passwd root
```
2.  **Open the terminal**. If the terminal is not already open, open it. Many distributions allow you to open it by pressing `Ctrl+Alt+T`.
3. Type `sudo passwd root` and `press ↵` Enter. When prompted for a password, enter your *user* password.
4. `Set a new password`. You'll be prompted to create a new password and enter it twice. Once a password has been set, the root account will be active.
5. `Lock the root account again`. If you want to lock the root account, enter the following command to remove the password and lock root:
```
    sudo passwd -dl root
```