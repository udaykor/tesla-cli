oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tesla-cli
$ tesla-cli COMMAND
running command...
$ tesla-cli (--version)
tesla-cli/0.0.0 darwin-arm64 node-v20.2.0
$ tesla-cli --help [COMMAND]
USAGE
  $ tesla-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tesla-cli actuate PART`](#tesla-cli-actuate-part)
* [`tesla-cli help [COMMANDS]`](#tesla-cli-help-commands)
* [`tesla-cli plugins`](#tesla-cli-plugins)
* [`tesla-cli plugins:install PLUGIN...`](#tesla-cli-pluginsinstall-plugin)
* [`tesla-cli plugins:inspect PLUGIN...`](#tesla-cli-pluginsinspect-plugin)
* [`tesla-cli plugins:install PLUGIN...`](#tesla-cli-pluginsinstall-plugin-1)
* [`tesla-cli plugins:link PLUGIN`](#tesla-cli-pluginslink-plugin)
* [`tesla-cli plugins:uninstall PLUGIN...`](#tesla-cli-pluginsuninstall-plugin)
* [`tesla-cli plugins:uninstall PLUGIN...`](#tesla-cli-pluginsuninstall-plugin-1)
* [`tesla-cli plugins:uninstall PLUGIN...`](#tesla-cli-pluginsuninstall-plugin-2)
* [`tesla-cli plugins update`](#tesla-cli-plugins-update)

## `tesla-cli actuate PART`

Actuate Tesla Trunk

```
USAGE
  $ tesla-cli actuate PART

ARGUMENTS
  PART  Part to actuate

DESCRIPTION
  Actuate Tesla Trunk

EXAMPLES
  $ tesla-cli actuate rear

  $ tesla-cli actuate front
```

_See code: [dist/commands/actuate/index.ts](https://github.com/udaykor/tesla-cli/blob/v0.0.0/dist/commands/actuate/index.ts)_

## `tesla-cli help [COMMANDS]`

Display help for tesla-cli.

```
USAGE
  $ tesla-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tesla-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `tesla-cli plugins`

List installed plugins.

```
USAGE
  $ tesla-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tesla-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/index.ts)_

## `tesla-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tesla-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tesla-cli plugins add

EXAMPLES
  $ tesla-cli plugins:install myplugin 

  $ tesla-cli plugins:install https://github.com/someuser/someplugin

  $ tesla-cli plugins:install someuser/someplugin
```

## `tesla-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tesla-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tesla-cli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/inspect.ts)_

## `tesla-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tesla-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tesla-cli plugins add

EXAMPLES
  $ tesla-cli plugins:install myplugin 

  $ tesla-cli plugins:install https://github.com/someuser/someplugin

  $ tesla-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/install.ts)_

## `tesla-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tesla-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ tesla-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/link.ts)_

## `tesla-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tesla-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tesla-cli plugins unlink
  $ tesla-cli plugins remove
```

## `tesla-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tesla-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tesla-cli plugins unlink
  $ tesla-cli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/uninstall.ts)_

## `tesla-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tesla-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tesla-cli plugins unlink
  $ tesla-cli plugins remove
```

## `tesla-cli plugins update`

Update installed plugins.

```
USAGE
  $ tesla-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
