---
id: tutorial1
title: Mobile OS Details
sidebar_label: Mobile OS Details
---
---
## MobileOS Installation

1. First, Download android studio IDE on web browser. [Click here](https://developer.android.com/studio)
2. Extract to your directory folder. 
	- Open **terminal** or **konsole**
    - After you are in **terminal** or **Konsole**, Go into folder to find `bin/`
	- And then type `./studio` to run android studio.
3. And reload bashrc file `“ source ~/.bashrc “`.

4. And run `“ flutter doctor --android-licenses “` to accept android toolchain licence.
5. Need to make Icon entry
	 - click `“ Configure “`.
	 - And finding Create Desktop Entry.

And finally, you've done with IDE.


## Add Android Home To Machine

1. Open terminal.If you  haven't install package `gedit` yet. 
2. Just update your OS first sudo pacman -Syu
3. And then type `“ sudo pacman -S gedit “` to install editor.
4. type `“ gedit ~/.bashrc “`.
5. And then export
	- export `ANDROID_HOME= android-sdk directory`.
	- export `PATH=$PATH:$ANDROID_HOME/tools`.
	- And then save.
 
## Installing Flutter SDK
1. Go to https://flutter.dev/docs/get-started/install/linux and download **flutter sdk**.
2. Then, Opening terminal and find `flutter file at directory` that you downloaded.
3. And extract it, then go back in terminal and type `$ tar xf ~/Downloads/flutter_linux_v1.2.1-stable.tar.xz.`
4. And then **make sure** your pc connected with internet!! 
5. You must Update your system first: `sudo pacman -Syu` 
6. Install **Gedit Editor Of GNOME** by Type `“sudo pacman  -S gedit”` or `“sudo pacman -Sy gedit”`.
7. And type `“gedit ~/.bashrc”` to open **GNOME**.
8. To export flutter as global go to underneath **GNOME** file and write export `PATH=$PATH:/your flutter directory/flutter/bin.`
9. Reload bashrc use `“ source ~/.bashrc ”`.
10. And then type `flutter doctor` to check what instruction to follow  more and fix issues.

