#!bin/bash
pkg update -y
pkg upgrade -y

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo -e $YELLOW"Seguro que quieres actualizar a gati-bot? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
echo -e $YELLOW"Actualizando gati-bot, espere..."
git clone https://github.com/g4tito/gati-bot > /dev/null 2> /dev/null

cd gati-bot
cp -r * ..
cd ..
rm -rf gati-bot
npm i

clear
echo -e $GREEN"gati-bot actualizado con exito!!"

elif [ $opts = "n"]; then
    clear
    echo -e $RED"La actualizacion de gati-bot se canceló"
    exit
fi
