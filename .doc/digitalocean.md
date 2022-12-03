# DROPLET
Droplet is a linux virtual machine host on Digital Ocean.
[Connect to droplet with OpenSSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/openssh/)
[Create a firewell](https://docs.digitalocean.com/products/networking/firewalls/quickstart/)
[Set Postgres database](https://docs.digitalocean.com/products/databases/postgresql/quickstart/)

## set ssh
ssh -i ~/.ssh/id_rsa_2 root@ADDRES_IP
ssh -i ~/.ssh/id_rsa_2 mahadou@ADDRES_IP

## create day-to-day user
adduser mahadou
and file others options. 

## add user to superuser group
usermod -aG sudo mahadou