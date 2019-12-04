---
id: root
title: Root
---

The **root** account on a Pionux computer is the account with full privileges. Root access is often necessary for performing commands in PionuxOS, especially commands that affect system files. Because root is so powerful, it's recommended to only request root access when necessary, as opposed to logging in as the root user. This can help prevent accidental damage to important system files.

## Root Access in Terminal(Konsole)

1. **Open the terminal**. If the terminal is not already open, open it. Many distributions allow you to open it by pressing `Ctrl+Alt+T`.
1. Type **su -** and **press ↵** Enter. This will attempt to log you in as `super user`. You can actually use this command to log in as any user on the machine, but when left blank it will attempt to log in as root.
1. **Enter the root password when prompted**. After typing ***su -** and **press ↵** Enter, you'll be prompted for the root password.
If you get an "authentication error" message, your root account is likely locked. See the next section for instructions on unlocking it.
1. **Check the command prompt**. When you are logged in as root, the command prompt should end with `#` instead of `$`.
1. Now you can use any commands that required root.

## Logout of Root
You can **Logout of Root** by two ways:
First Way,Type:
```
   # exit
```
Second Way,Press:
```
     CTRL+D
```
## Unlocked the Root Account
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