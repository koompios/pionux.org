---
id: D-KUsers
title: Koompi Users
sidebar_label: Common Problems
---

| Nº  |          Daily Questions                        |       Answer Link         |
|-----|-------------------------------------------------|---------------------------|
|  1. | Can Koompi run Adobe Photoshop or Lightroom?    | [Click Here]()            |
|  2. | How to install new software? Ex, Chrome         | [Click Here]()            |
|  3. | How to download Kroma OS?                       | [Click Here]()            |
|  4. | I'm having a Sound problem.                     | [Click Here]()            |
|  5. | Why the internet is not working?                | [Click Here]()            |

---
 Down here are the answers for all questions that have been required by Koompi Users. We hope that it is more comfortable and suitable for your situation. 

 >**Noted:** If there aren't any questions or answers you was looking for please contacts us. We are very happy for your requestion and participate in our community.

### Can Koompi run Adobe Photoshop or Lightroom? 
In the meantime, We can’t run both of the apps in Koompi yet, but there are many other applications that have similar features and high quality as them. For example: GIMP which is  supporting many works such as graphics editor, Image retouching and editing, free-form drawing, converting between different image formats, and more specialized tasks.
[Click this link to see the way to install it](./D-Applications.md#GIMP)


For Adobe Photoshop and Adobe Lightroom, Our team is trying their best to bring them both for Koompi as soon as possible.
### How to install new software? Ex, Chrome 
It is easy to install any software and applications in Koompi. You can find out how to install them and learn more about them by following the link below which are gathering the information about KoompiOS.
- [**Apps Info Link**](https://pionux.org/docs/D-Applications)
- [**Apps List Link**](https://pionux.org/docs/D-Applications-List)

### How to download Kroma OS?  
These are simply ways for installing it. First thing you need to do is 
1. “Create a bootable USB Key”.
- Get a USB minimum of 4GB.
- Install Etcher.
- Download the ISO. The link is down below
- Follow the instructions on the screen to create your bootable USB key.
2. ”Install the ISO to your machine”
- Plug the USB key to your machine.
- Enter the BIOS of your machine.
- Go to the tap boot.
- Select the USB.
- Press Enter.
- Follow the instructions on the screen to install the OS.

For more clearly how to install it here is “The tutorial how to install it.”
- [**Link For installing**](https://youtu.be/DnavvK4NU6A)
- [**Link of OS**](https://repo.pionux.org/iso/x86_64/koompi-os-v2.1.3-x86_64.iso)

### I'm having a Sound problem.  
If you are surely having sound problems, let’s see if it is true. Following this instructions:

- Launch your terminal
- Run this command : `pulseaudio -k`

After you run that command and your audio still isn’t working. 
- Run this other next command: `pulseaudio --start`

### Why the internet is not working?  
What you need to do first is that you must try to reset your network manager first.
- Run this command in your terminal: `sudo systemctl restart NetworkManager`

---