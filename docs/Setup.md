---
id: Set-up
title: Input/Output 
sidebar_label: Setup
---
---
## Bluetooth And Pulseadio
[Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) is a standard for the short-range wireless interconnection of cellular phones, computers, and other electronic devices. In Linux, the canonical implementation of the Bluetooth protocol stack is [BlueZ](http://www.bluez.org/).
### Setup The Basics
>**Note:** If you have already installed its library, you can skip this commands
First, You need to install the bluetooth libraries `bluez` and `bluez-utils`. Below here is the command:
```Text
    $ pi -Suy bluez bluez-utils
```

After that, the `btusb` module must to be  loaded into kernel by:
```Text
    $ modprobe btusb
```
Last but not least the bluetooth service must be loaded. So, lets do that via:
```Text
    $ sudo systemctl start bluetooth
```
If you want to enable it permanently, you can do this `systemctl enable`:
```Text
    $ sudo systemctl enable bluetooth
```
That's all!!! Down here is the other way, To install it:

1.  Open the terminal, by default Pionux comes with Konsole.

2.  Install blueman `sudo pi -Sy blueman`

3.  Restart bluetooth `sudo systemctl restart bluetooth`

4.  Check the status of bluetooth `sudo systemctl status bluetooth`

5.  To ensure that the bluetooth is working, restart your machine
### Bluetooth Connection
For the connection to the headset, we use the tool bluetoothctl. As this is an interactive tool, start it up with this:
```Text
    $ bluetoothctl
```
Here the sample :
```Text
    [koompi@koompi-pc ~]$ bluetoothctl
    Agent registered
```
Within this tool we are able to communicate with the bluetooth stack. So first of all, we need to power on the bluetooth stack:
```Text
    # power on
```
>**Noted:** If you have already **Agent Registered** you can just go to next commands.

After that, we need to turn the bluetooth agent on. The agent allows us to handle the pairing of devices. For this purpose a default agent is sufficient, so we set this parameter.
```Text
    # agent on
    # default-agent
```
Now bring your headset into discoverable mode and then start scanning for that device by typing this:
```Text
    # scan on
```
You should see some output like this sample:
```Text
    Device 00:11:22:33:44:55 Philips SHB7000
```
With this information you are now able to pair with that device by:
```
    # pair code_series 
```
Here is the sample:
```Text
    # pair 00:11:22:33:44:55
```
And after a successful pairing one is able to connect to that device:
```Text
    # connect 00:11:22:33:44:55
```
Once the connection is established, we can clean up and end `bluetoothctl`:
```Text
    # scan off
    # exit
```
We have now a connection to the bluetooth headset and are able to stream audio to that device.

>**Tips:** For A2DP

The headset supports the A2DP profile and therefore is able to playback music with a much higher quality. But You must switch bluetooth card into a a2dp sink. This is done by this simple command.
```Text
    $ pacmd set-card-profile 2 a2dp_sink
```
After that switch, You now able to listen to music in great quality, cordless.
>**Helps:** If you can't connect to any device, you can input the command below.
```
    $ sudo pacman -S pulseaudio-bluetooth
```
After you finished, you must restart your pc:
```Text
    $ reboot
```
<!-- ## Fonts -->
## KeyBoard
The default console [keymap]() is [US](). Available layouts can be listed with:
```Text
    $ ls /usr/share/kbd/keymaps/**/*.map.gz
```
To view the current keyboard configurations.
```Text
    $ localectl status
```
To modify the layout, append a corresponding file name to loadkeys(1), omitting path and file extension. For example, to set a German keyboard layout:
```Text
    $ loadkeys de-latin1
```

<!-- ## Network
## Printer -->
## Time
Showing the current settings of the system clock and RTC, including whether network time synchronization is active by command below: 
```Text
    $ timedatectl status
```
This command below also shows the same information as status, but in machine readable form. This command is intended to be used whenever computer-parsable output is required. Use status if you are looking for formatted human-readable output.
```Text
    $ timedatectl show
```
>**Tips:**By default, empty properties are suppressed. Use --all to show those too. To select specific properties to show, use --property=.
```Text
    $ timedatectl show --all
```
In order to Set the system clock to the specified time. This will also update the RTC time accordingly. The time may be specified in the format "2012-10-30 18:17:16".
```Text
    $ timedatectl set-time[TIME]
```
Sample: 
```Text
    [Time] =>[2012-10-30 18:17:16]
```
For checking `list-timezones` that are available:
```Text
    $ timedatectl list-timezones
```