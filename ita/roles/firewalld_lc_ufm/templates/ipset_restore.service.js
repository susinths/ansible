[Unit]
Description=Restore saved ipset config
Before=firewalld.service

[Service]
Type=oneshot
ExecStart=/usr/sbin/ipset restore -f /etc/ipset.up.rules

[Install]
WantedBy=multi-user.target
