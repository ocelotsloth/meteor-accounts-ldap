Package.describe({
  'summary': 'Meteor account login via LDAP using activedirectory.js',
  'version': '0.1.5',
  'git' : 'https://github.com/twa16/meteor-accounts-ldap',
  'name' : 'twa16:meteor-accounts-ldap'
});

Npm.depends({'activedirectory' : '0.7.2'});

Package.on_use(function (api) {
  api.use(['coffeescript@1.12.0'], 'server');
  api.use(['accounts-base@1.2.1'], ['client', 'server']);
  api.imply('accounts-base@1.2.1', ['client', 'server']);
  api.use(['templating@1.1.4','jquery@1.11.4'], 'client');
  api.add_files([
    'ldap_client.html',
    'ldap_client.js'], 'client');
  api.add_files('ldap_server.coffee', 'server');
});
