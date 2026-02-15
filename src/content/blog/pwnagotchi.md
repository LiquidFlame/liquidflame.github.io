---
title: 'My Journey with Pwnagotchi'
description: 'asdfasdfasdfasdfadfa'
pubDate: '2026-02-12'
draft: true
---

# Recommended Components
---
- [Raspberry Pi Zero 2 WH](https://amzn.to/3ZwpadZ)
- [32GB microSDHC Class 10 ](https://amzn.to/4rho8Pb)
- [USB-A to Micro USB Data Cable](https://amzn.to/4rSRDH4)
- [Waveshare V4](https://amzn.to/4awppL9)
- [PiSugar 3](https://amzn.to/407Rfs8)

# Windows Setup
---

## Flashing the Image
- If you're using a Raspberry Pi 0W use the 32-bit image and if you are using a Raspberry Pi 02W, use the 64-bit image of [jayofelony/pwnagotchi](https://github.com/jayofelony/pwnagotchi/releases/latest)
- Once you have your image download, use the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to flash the software.
  - On the left hand side select **OS** and then scroll down to the bottom and select **Use custom**. This will pop-up a window for you to select your downloaded image.
![Raspberry Pi Imager - OS](../../assets/pwnagotchi/rpi-imager-os.png)
  - Once you have your image selected, click **NEXT*
  - Choose your microSDHC card for the storage device and click **NEXT**
![Raspberry Pi Imager - Storage](../../assets/pwnagotchi/rpi-imager-storage.png)
  - Click the **WRITE* button
![Raspberry Pi Imager - Write](../../assets/pwnagotchi/rpi-imager-write.png)
  - Click the **I UNDERSTAND, ERASE AND WRITE** button 
![Raspberry Pi Imager - Erase](../../assets/pwnagotchi/rpi-imager-erase.png)
  - Click the **FINISH** button and then safely eject your microSDHC card
![Raspberry Pi Imager - Finish](../../assets/pwnagotchi/rpi-imager-finish.png)

## Install RNDIS Driver
Before connecting the Pwnagotchi to your computer, you need to install the [RNDIS driver](https://github.com/jayofelony/pwnagotchi/wiki/rpi-usb-gadget-driver-setup.exe) in order for Windows to recognize your Pwnagotchi as a valid network device. Once installed, RNDIS creates a virtual network card that lets your computer treat the USB cable exactly like an Ethernet cable.

## Connecting the Pwnagotchi
- Open Device Manager and Network Connections, this will make it easier to know when the Pwnagotchi has connected to our computer and is ready to communicate.
- Plug the USB-A to Micro USB data cable into the micro usb port closet to the HDMI port. Once you do this you will see in your Device Manager, **Unknown USB Device (Device Descriptor Request Failed)** under Universal Serial Bus controllers.
![Device Manager - Unknown](../../assets/pwnagotchi/device-manager-unknown.png)