---
id: password
title: Password
---
# Set or Change User Password

> How do I set or change Pionux system password for any user account?
> How can I change user password on Pionux operating system using the command-line options?

Both Pionux and Linux operating systems use the `passwd` command to change user password. The `passwd` is used to update a user’s authentication token (password) stored in /etc/shadow file. The `passwd` change passwords for user and group accounts. A normal user may only change the password for his/her own account, the super user (or root) may change the password for any account. The administrator of a group may change the password for the group. It also changes account information, such as the full name of the user, user login shell, or password expiry date and interval.

## Set User Password
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
The user is first prompted for his/her old password if one is present. This password is then encrypted and compared against the stored password. The user has only one chance to enter the correct password. The super user is permitted to bypass this step so that forgotten passwords may be changed. A new password is tested for complexity. As a general guideline, passwords should consist of 10 to 20 characters including one or more from each of following sets:

1. Lower case alphabetics
1. Upper case alphabetics
1. Digits 0 thru 9
1. Punctuation marks/spacial characters

## Change Password For Other User Account

You need to login as the root user. [To go into root](./root.md), type the following command to change password for User_Name:

```
    # passwd User_Name
```
or 
```
    $ sudo passwd User_Name
```
Sample Output:
```
    [koompi@koompi-pc ~]$ sudo passwd koompi
    New password: 
    Retype new password: 
    passwd: password updated successfully
```
Where,

koompi – is username or account name.

<p style="color:#1493E1;">Noted :</p>

>Passwords do not display to the screen when you enter them.

## Change Group Password

When the `-g` option is used, the password for the named group is changed. In this example, change password for group:
```
    # passwd -g Group_Name
```
The current group password is not prompted for. The `-r` option is used with the `-g` option to remove the current password from the named group. This allows group access to all members. The `-R` option is used with the `-g` option to restrict the named group for all users.

## Changing user passwords on PionuxOS

As a Pionux or Linux system administrator (sysadmin) you can change password for any users on your server. To change a password on behalf of a user:

1. First sign on or “su” or “sudo” to the “root” account on Linux, run: sudo -i
1. Then type, `passwd Administrator_name` to change a password for Admin user
1. The system will prompt you to enter a password twice

## Conclusion
The passwd command line utility is used to update or change user’s password. The encrypted password is stored in `/etc/shadow` file and account information is in `/etc/passwd file`. To see all user account try [grep command](./basic.md###grep) or [cat command](./basic###cat) as follows:

```
    $ cat /etc/passwd
    $ grep '^userNameHere' /etc/passwd
```

---