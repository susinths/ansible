# Default limit for number of user's processes to prevent
# accidental fork bombs.
# See rhbz #432903 for reasoning.

*          soft    nofile     10240
*          hard    nofile     10240

root       soft    nofile     unlimited

*          soft    nproc      262144
