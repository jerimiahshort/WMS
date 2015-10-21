## WMS - Website Management System

This project is aimed to give [Laravel](http://www.laravel.com) users a jumpstart on their projects. It comes with an extended authentication based on Jeffery Way's excellent videos at [laracasts](http://www.laracasts.com). In addition, several packages are pre-configured and ready to go after installing via npm.

## Getting Started

Once you have a local copy, a few things need to be done to get things going. First off, ensure you have [nodejs](http://www.nodejs.org) and [composer](http://getcomposer.org) installed. This project utilizes npm and gulp and laravel requires composer. You can always ignore npm and gulp and use what you're comfortable with. Once you have everything, open your console.
```sh
$ composer install
$ npm install --global gulp
$ npm install
```
Since everything is pre-configured, npm install will automagically download and install the packages we use with this project. Once that is complete, we can use gulp to generate, minify, and copy our CSS and Javascript to our public directory.
```sh
$ gulp
```
Again, everything is preconfigured to run by default. However, you can also pass gulp the various builds later if you need to update the files. Our available options are:
```sh
$ gulp css
$ gulp js:min
$ gulp js:lib
```
I have decided not to include a watch, however you may go in and uncomment the line to enable it.

### License

This project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
