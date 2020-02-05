---
id: D-IntermediatedCommands
title: All You Need To Know About Intermediate Commands
sidebar_label: Intermediate Commands Info
---
---

## Echo Command

- The **echo** command helps us move some data, usually text into file.For example, if you want to create a new text file or add to an already made text file, you just need to type in, **“echo Hello, This is Pionux. >> new.txt”**.

## Cat Command

- **cat** is the command for showing the contents in file. It is usually used to easily view programs. 
```shell
    [koompi@koompi-pc ~]$ echo Hello, This is Pionux. >> new.txt
    [koompi@koompi-pc ~]$ cat new.txt
```
Output :
```text
    Hello, This is Pionux.
```
## Nano Command

- "**nano**" and "**vi**" are already installed in Pionux command line. The **nano** command is a good text editor that denotes keywords with color and can recognize most languages. And **vi** is simpler than nano.

## Locale Command
**Locales** are used by `glibc` and other locale-aware programs or libraries for rendering text, correctly displaying regional monetary values, time and date formats, alphabetic idiosyncrasies, and other locale-specific standards.

- `locale-gen` also runs with every update of `glibc.`
- `UTF-8` is recommended over other character sets. 

#### Setting the locale
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
#### Generating locales
Before a **locale** can be enabled on the system, it must be generated. This can be achieved by uncommenting applicable entries in `/etc/locale`.gen, and running:
```Text
    $ sudo locale-gen`.
```
## Sudo Command
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
## Df Command
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

## Grep Command

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
***