#!bin/bash

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo -e " ${YELLOW}Iniciando..."
sleep 4

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${CYAN}Instalando todas las dependencias ..." | lolcat -a -d 50 

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: pkg update"
echo -e " ${GREEN}"
sleep 5
pkg update -y
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: pkg upgrade"
echo -e " ${GREEN}"
sleep 5
pkg upgrade -y
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e $YELLOW"Seguro que quieres actualizar a gati-bot? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e $YELLOW"Actualizando gati-bot, espere..."
git clone https://github.com/g4tito/gati-bot > /dev/null 2> /dev/null

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: cd gati-bot"
echo -e " ${GREEN}"
sleep 5
cd gati-bot
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: cp -r * .."
echo -e " ${GREEN}"
sleep 5
cp -r * ..
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: cd .."
echo -e " ${GREEN}"
sleep 5
cd ..
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: rm -rf gati-bot"
echo -e " ${GREEN}"
sleep 5
rm -rf gati-bot
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando el comando: npm i"
echo -e " ${GREEN}"
sleep 5
npm i
sleep 2

clear
figlet -c -f slant -t 'gati-bot' | lolcat 
echo ""
echo -e $GREEN"gati-bot actualizado con exito!!"
echo ""
elif [ $opts = "n"]; then
    clear
    figlet -c -f slant -t 'gati-bot' | lolcat
echo ""
    echo -e $RED"La actualizacion de gati-bot se canceló"
    exit
fi
