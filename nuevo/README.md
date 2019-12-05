# Soy nuevo en la Coordinación de Sistemas 

Primero, Bienvenido a la Coordinación de Sistemas, en esta seccion realizaras las tareas pertinentes en tu proceso de entrenamiento para asi te adaptes mejor a las necesidades del departamento.

Por lo general el proceso de un integrante nuevo de la coordinación es habilitar un equipo nuevo, lo segundo es instalar y configurar el entorno de de trabajo y por ultimo son las distintas actividades de entrenamiento para ser un trabajador completo dentro de la coordinación.

Vamos a explicar desde la parte 2 en donde tienes que realizar las instalaciones y configuraciones a nuestro computador.

## Programas a instalar y la respectiva configuracion

En este punto se te dejara a continuacion un listado de comandos, donde seguido paso a paso tendras tu entorno local configuracion lo más pronto posible, a continuacion te dejamos la lineas de codigo a seguir para que las realices, lo importante en este punto es saber que se esta instalando y como podemos aprender utilizar los distintos comandos que podemos utilizar en consola. Es necesario que investigues un poco acerca de los comandos basicos en linux, en lo siguiente te dejamos el codigo a correr:

// Apache2
sudo apt-get install apache2

// Apache2 Configuration < quick access to web server >
cd /etc/apache2/sites-available/
copiar 000-default.conf de otro, o:
sudo vim name.conf
<VirtualHost *:80>
    	# The ServerName directive sets the request scheme, hostname and port that
    	# the server uses to identify itself. This is used when creating
    	# redirection URLs. In the context of virtual hosts, the ServerName
    	# specifies what hostname must appear in the request's Host: header to
    	# match this virtual host. For the default virtual host (this file) this
    	# value is not decisive as it is used as a last resort host regardless.
    	# However, you must set it for any further virtual host explicitly.
    	#ServerName www.example.com

    	ServerAdmin webmaster@localhost
    	ServerName localhost
    	DocumentRoot /var/www/html/MiUNE1/projects
    	SetEnv  APPLICATION_ENV "production"

    	# Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
    	# error, crit, alert, emerg.
    	# It is also possible to configure the loglevel for particular
    	# modules, e.g.
    	#LogLevel info ssl:warn

    	ErrorLog ${APACHE_LOG_DIR}/error.log
    	CustomLog ${APACHE_LOG_DIR}/access.log combined
    	LogLevel warn


    	Alias /MiUNE2 "/var/www/html/MiUNE2/public"
    	<Directory "/var/www/html/MiUNE2/public">
            	DirectoryIndex index.php
            	AllowOverride All
            	order allow,deny
            	Allow from all
    	</Directory>


    	Alias /MiUNE1 "/var/www/html/MiUNEA1/projects"
    	<Directory "/var/www/html/MiUNEA1/projects">
            	DirectoryIndex index.php
            	AllowOverride All
            	order allow,deny
            	Allow from all
    	</Directory>


    	# For most configuration files from conf-available/, which are
    	# enabled or disabled at a global level, it is possible to
    	# include a line for only one particular virtual host. For example the
    	# following line enables the CGI configuration for this host only
    	# after it has been globally disabled with "a2disconf".
    	#Include conf-available/serve-cgi-bin.conf
</VirtualHost>

 #vim: syntax=apache ts=4 sw=4 sts=4 sr noet

//
sudo vim /etc/hosts
	127.0.0.1	name.local

Activar mod rewrite
sudo a2enmod rewrite                                OJO !!!!!

sudo service apache2 restart

// PHP 5.6
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install php5.6 php5.6-cli php5.6-cgi php5.6-dev php5.6-pgsql php5.6-gd php5.6-mcrypt php-pear zend-framework zend-framework-bin libapache2-mod-php5.6 php5.6-mbstring php5.6-mysql php5.6-xml php5.6-soap

// Switch Between PHP Versions
sudo a2dismod php5.6
sudo a2enmod php7.1:
sudo service apache2 restart

// PHP configuration <sudo vim /etc/php/5.6/apache2/php.ini >
//Teclear “i” para comenzar a escribir
//Salir sin guardar :q!
//Salir guardando :wq
202		short_open_tag = On
261		zlib.output_compress = On
303		disable_functions = 												BORRAR TODO
449		error_reporting = E_ALL & ~E_DEPRECATED & ~E_NOTICE & ~E_WARNING
466		display_errors = On
477 	display_startup_errors = On
538		html_errors = Off
574		error_log = syslog                                            		DESCOMENTAR
820     upload_max_filesize = 50M
835		allow_url_include = On
889		extension=php_curl.dll
898 	extension=php_mbstring.dll
900		extension=php_mysql.dll
901		extension=php_mysqli.dll
903		extension=php_openssl.dll
904		extension=php_pdo_firebird.dll
905		extension=php_pdo_mysql.dll
908		extension=php_pdo_psql.dll
910		extension=php_psql.dll
917		extension=php_soap.dll
// reboot 
sudo service apache2 restart

// MySQL
sudo apt-get install mysql-client mysql-server

// PostgreSQL
{{
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib pgadmin3

// SSH
sudo apt-get install openssh-server openssh-client

// Generate SSH Key
ssh-keygen -t rsa
vim /home/usuario/.ssh/id_rsa.pub

// Importar respaldo
-hacer sudo su
  scp
//Para Pluton 
admindb@192.168.14.200:/home/alfred/backup/database/postgresql/2018-10-06/MiUNE.sql.gz /home/usuario/Desktop
//Para Hydra
hydra@192.168.69.200:/home/hydra/backup/database/postgresql/2019-10-03/MiUNE.sql.gz /home/usuario/Desktop
^Recordar buscar fecha actual
-descomprimirla en MiUNE.sql

// Configuration PostgresSQL\l
sudo su postgres
psql
Si ya esta creada:
	pa ve \l
	drop database “MiUNE”;
Si es la primera vez que lo creas:
create user "MiUNE" with superuser password 'tucontrasena'; (solo si no tienes usuario)
create database “MiUNE“ with owner "MiUNE";
\q
psql "MiUNE" -f /home/pepito/MiUNE.sql
psql -U MiUNE -d MiUNE -h localhost
show search_path;
alter user "MiUNE" set search_path = produccion,public;
set search_path to "MiUNE",produccion;
\q
psql
alter database “MiUNE” set datestyle to “ISO, MDY”;
\q
psql -U “MiUNE” -h localhost
show datestyle;
\q
exit
sudo service apache2 restart
sudo service postgresql restart


// Sublime Text
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text

// Git
sudo apt-get install git openssh-client openssh-server
git config --global user.name "Nombre Apellido"
git config --global user.email email

// Clonar la carpeta de MiUNE1 (MiUNEAcademico)
git clone admindb@192.168.14.200:/var/www/default/http/MiUNE1 MiUNE1 -> Pluton
sudo git clone hydra@192.168.69.200:/home/hydra/MiUNE1 /var/www/html/MiUNE1

...A
// Clonar la carpeta de MiUNE2
git clone admindb@192.168.14.200:/var/www/default/http/MiUNECDEnew MiUNE2 -> Pluton
sudo git clone hydra@192.168.69.200:/home/hydra/MiUNE2 /var/www/html/MiUNE2

// Copiar MiUNEDB -> Schema Spy
scp hydra@192.168.69.200:/home/hydra/MiUNEDB.zip /home/$USER
unzip MiUNEDB.zip

copiar el .htaccess (que empieza en MiUNE2) a /MiUNE2/public y dejarlo oculto
crear el archivo de virtualhost(default) que se llama 000-default... (mover el archivo al mismo directorio pero .backup

//Darle permisos a application.log:
cd /var/www/html/MiUNE2/logs
sudo chmod 777 application.log

//Configurar local:
cd /var/www/html/MiUNE2/application/configs
Abrir application.ini con SublimeText o VSCode
//Comentar
;database.params.password = claveune
//Descomentar y cambiar
database.params.password = tucontraseña

//Copiar los archivos de OpenVPN
scp hydra@192.168.69.200:/home/hydra/VPN.zip /home/$USER
unzip VPN.zip
vi VPN/client.ovpn->   Linea 42 Cambiar “omicron.une.edu.ve” a “192.168.1.10”
Activar OpenVPN antes de usar los módulos con Soap Client:
sudo openvpn VPN/client.ovpn

//Soap Client
--Si usas Sublime Text
subl /var/www/html/MiUNE2/application/Models/DbTable/Profit.php
--Si usas VS Code
code /var/www/html/MiUNE2/application/Models/DbTable/Profit.php
Luego cambiar todas las ocurrencias de “192.168.6.8” a “10.8.0.10” menos en la linea 15

//Para refrescar local:
Sacar el archivo .htacces de la carpeta MiUNE2 al escritorio
Entrar a la pagina del local principal y refrescar
Regresar el archivo .htacces a la carpeta MiUNE2
Entrar al local

//Para el escritorio remoto:
sudo add-apt-repository ppa:remmina-ppa-team/remmina-master
sudo apt-get update
sudo apt-get install remmina* -y
