# Soy nuevo en la Coordinación de Sistemas 

Primero, Bienvenido a la Coordinación de Sistemas, en esta seccion realizaras las tareas pertinentes en tu proceso de entrenamiento para asi te adaptes mejor a las necesidades del departamento.

Por lo general el proceso de un integrante nuevo de la coordinación es habilitar un equipo nuevo, lo segundo es instalar y configurar el entorno de de trabajo y por ultimo son las distintas actividades de entrenamiento para ser un trabajador completo dentro de la coordinación.

Vamos a explicar desde la parte 2 en donde tienes que realizar las instalaciones y configuraciones a nuestro computador.

## Programas a instalar y la respectiva configuracion

En este punto se te dejara a continuacion un listado de comandos, donde seguido paso a paso tendras tu entorno local configuracion lo más pronto posible, a continuacion te dejamos la lineas de codigo a seguir para que las realices, lo importante en este punto es saber que se esta instalando y como podemos aprender utilizar los distintos comandos que podemos utilizar en consola. Es necesario que investigues un poco acerca de los comandos basicos en linux, en lo siguiente te dejamos el codigo a correr:

## Apache
`sudo apt-get install apache2`


## PHP 5.6
`sudo add-apt-repository ppa:ondrej/php`
`sudo apt-get update`
`sudo apt-get install php5.6 php5.6-cli php5.6-cgi php5.6-dev php5.6-pgsql php5.6-gd php5.6-mcrypt php-pear` `zend-framework zend-framework-bin libapache2-mod-php5.6 php5.6-mbstring php5.6-mysql php5.6-xml php5.6-soap`

## Switch Between PHP Versions
`sudo a2dismod php5.6`
`sudo a2enmod php7.1`
`sudo service apache2 restart`

## MySQL
`sudo apt-get install mysql-client mysql-server`

## PostgreSQL
`wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`
`sudo apt-get update`
`sudo apt-get install postgresql postgresql-contrib pgadmin3`

## SSH
`sudo apt-get install openssh-server openssh-client`

## Generate SSH Key
`ssh-keygen -t rsa`
`vim /home/usuario/.ssh/id_rsa.pub`

## Sublime Text
`sudo add-apt-repository ppa:webupd8team/sublime-text-3`
`sudo apt-get update`
`sudo apt-get install sublime-text`

## Git
`sudo apt-get install git openssh-client openssh-server`
`git config --global user.name "Nombre Apellido"`
`git config --global user.email email`

## Para el escritorio remoto:
`sudo add-apt-repository ppa:remmina-ppa-team/remmina-master`
`sudo apt-get update`
`sudo apt-get install remmina* -y`

## Configuraciones

Una vez instalado todas las dependecias para nuestro local, seguimos para configurar nuestro entorno de desarrollo.