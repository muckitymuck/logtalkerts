# Network Infrastructure Topology for XYZ Manufacturing

## Overview

**Purpose:** Provide robust, secure, and efficient network connectivity for manufacturing operations, data management, and office activities.

**Buildings:** Warehouse, Fabrication Floor, Laboratory, Support Office

## Core Network Infrastructure

### Main Data Center (Support Office Building)

**Servers:**
- **File Server:** 192.168.1.10
- **Application Server:** 192.168.1.11
- **Database Server:** 192.168.1.12

**Network Hardware:**
- **Core Router:** 192.168.1.1
- **Primary Switch:** 192.168.1.2
- **Firewall:** 192.168.1.3

### Secondary Data Center (Warehouse Building)

**Backup Servers:**
- **File Server:** 192.168.2.10
- **Application Server:** 192.168.2.11

**Network Hardware:**
- **Secondary Router:** 192.168.2.1
- **Backup Switch:** 192.168.2.2

## Building-Specific Infrastructure

### Warehouse

- **Wireless Access Points:** 192.168.2.50-59
- **IP Cameras:** 192.168.2.100-110
- **Inventory Management Terminals:** 192.168.2.150-160

### Fabrication Floor

- **Industrial Network Switch:** 192.168.3.2
- **Machine Control Systems:** 192.168.3.20-40
- **Local Workstations:** 192.168.3.50-60

### Laboratory

- **Research Network Switch:** 192.168.4.2
- **Laboratory Equipment (various IPs):** 192.168.4.20-50
- **Data Analysis Workstations:** 192.168.4.60-70

### Support Office

- **Office Switch:** 192.168.1.20
- **Desktop Computers:** 192.168.1.100-150
- **Printers and Scanners:** 192.168.1.200-210

## Connectivity and Redundancy

- **Inter-Building Connectivity:** Fiber-optic links connecting all building-specific networks to the main data center.
- **Internet Access:** High-speed internet connection through the main router, with a backup line connected to the secondary router.
- **VPN Access:** For remote workers and secure external connections.
- **Redundant Pathways:** Ensuring network connectivity in case of a single point of failure.

## Security Measures

- **Firewalls:** Positioned at both the main and secondary data centers to protect internal networks.
- **Intrusion Detection Systems:** Monitoring network traffic for suspicious activities.
- **Regular Security Updates:** On servers and network equipment.

## Backup and Disaster Recovery

- **Data Backup:** Regular backups of critical data from main servers to secondary servers.
- **Disaster Recovery Plan:** In place, detailing procedures for data restoration and system recovery in case of an incident.
