---
id: Set-up
title: Input/Output 
sidebar_label: Setup
---
---
## Bluetooth And Pulseaudio
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
That's all!!! 
Down here is the other way, To install it:

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

>**Tips:** For A2DP Device

The headset supports the A2DP profile and therefore is able to playback music with a much higher quality. But You must switch bluetooth card into a a2dp sink. This is done by this simple command.
```Text
    $ pacmd set-card-profile 2 a2dp_sink
```
After that switch, You now able to listen to music in great quality, cordless.
>**Helps:** If you can't connect to any device, you can input the command below.
```
    $ sudo pacman -S pulseaudio-bluetooth
```
In order to restart only your bluetooth system run this:
```Text
    $ sudo systemctl restart bluetooth.service
```
And to status your bluetooth:
```Text
    $ sudo systemctl status bluetooth.service
```
After you finished, you must restart your pc:
```Text
    $ reboot
```
If all the above commands don't go well for connecting to any device use this:
```Text
    $ sudo nano /etc/bluetooth/main.conf
```
After that you will see something like this:
```Text
    # Defaults to 'BlueZ X.YZ'
    #Name = BlueZ

    # Default device class. Only the major and minor device class bits are
    # considered. Defaults to '0x000000'.
    #Class = 0x000100

    # How long to stay in discoverable mode before going back to non-discoverable
    # The value is in seconds. Default is 180, i.e. 3 minutes.
    # 0 = disable timer, i.e. stay discoverable forever
    #DiscoverableTimeout = 0

    # How long to stay in pairable mode before going back to non-discoverable
    # The value is in seconds. Default is 0.
    # 0 = disable timer, i.e. stay pairable forever
    #PairableTimeout = 0

    # Use vendor id source (assigner), vendor, product and version information for
    # DID profile support. The values are separated by ":" and assigner, VID, PID
    # and version.
    # Possible vendor id source values: bluetooth, usb (defaults to usb)
    #DeviceID = bluetooth:1234:5678:abcd

    # Do reverse service discovery for previously unknown devices that connect to
    # us. This option is really only needed for qualification since the BITE tester
    # doesn't like us doing reverse SDP for some test cases (though there could in
    # theory be other useful purposes for this too). Defaults to 'true'.
    #ReverseServiceDiscovery = true

    # Enable name resolving after inquiry. Set it to 'false' if you don't need
    # remote devices name and want shorter discovery cycle. Defaults to 'true'.
    #NameResolving = true

    # Enable runtime persistency of debug link keys. Default is false which
    # makes debug link keys valid only for the duration of the connection
    # that they were created for.
    #DebugKeys = false

    # Restricts all controllers to the specified transport. Default value
    # is "dual", i.e. both BR/EDR and LE enabled (when supported by the HW).
    # Possible values: "dual", "bredr", "le"
    #ControllerMode = dual

    # Enables Multi Profile Specification support. This allows to specify if
    # system supports only Multiple Profiles Single Device (MPSD) configuration
    # or both Multiple Profiles Single Device (MPSD) and Multiple Profiles Multiple
    # Devices (MPMD) configurations.
    # Possible values: "off", "single", "multiple"
    #MultiProfile = off

    # Permanently enables the Fast Connectable setting for adapters that
    # support it. When enabled other devices can connect faster to us,
    # however the tradeoff is increased power consumptions. This feature
    # will fully work only on kernel version 4.1 and newer. Defaults to
    # 'false'.
    #FastConnectable = false

    # Default privacy setting.
    # Enables use of private address.
    # Possible values: "off", "device", "network"
    # "network" option not supported currently
    # Defaults to "off"
    # Privacy = off

    [GATT]
    # GATT attribute cache.
    # Possible values:
    # always: Always cache attributes even for devices not paired, this is
    # recommended as it is best for interoperability, with more consistent
    # reconnection times and enables proper tracking of notifications for all
    # devices.
    # yes: Only cache attributes of paired devices.
    # no: Never cache attributes
    # Default: always
    #Cache = always

    # Minimum required Encryption Key Size for accessing secured characteristics.
    # Possible values: 0 and 7-16. 0 means don't care.
    # Defaults to 0
    # MinEncKeySize = 0

    [Policy]
    #
    # The ReconnectUUIDs defines the set of remote services that should try
    # to be reconnected to in case of a link loss (link supervision
    # timeout). The policy plugin should contain a sane set of values by
    # default, but this list can be overridden here. By setting the list to
    # empty the reconnection feature gets disabled.
    #ReconnectUUIDs=00001112-0000-1000-8000-00805f9b34fb,0000111f-0000-1000-8000-00805f9b34fb,0000110a-0000-1000-8000-00805f9b34fb

    # ReconnectAttempts define the number of attempts to reconnect after a link
    # lost. Setting the value to 0 disables reconnecting feature.
    #ReconnectAttempts=7

    # ReconnectIntervals define the set of intervals in seconds to use in between
    # attempts.
    # If the number of attempts defined in ReconnectAttempts is bigger than the
```
You must find the line that look like this and  change to this:
```
    #ControllerMode = dual (Original)
    ControllerMode = bredr (The Change)
```
After that you have to save by `ctrl+x`=>`y`=> `Enter`

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
