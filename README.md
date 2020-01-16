# R4MP

## Dev setup

Install Rush if you don't already have it:

````
npm install -g @microsoft/rush
```

Install a `v10.x` version of Node.js. `v10.17.0` seems to work nicely.

## Installing dependencies

and use Rush to install dependencies:

```
$ rush update
```

To completely clear and reinstall all dependencies, run `rush update -p --full`:

-   `-p` for purge, to remove all the installed packages
-   `--full` just because it looks important

## Running a dev site

```
$rush serve
```

Fun test page will be found at `http://localhost:8080/`

## Buiding a prod library

```
$ rush build
```

To serve a production build, run `rush host`, and open `http://localhost:3001/host/`
