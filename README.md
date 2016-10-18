Abandoned
==
Please note that while I believe this package works as is, I am not using it myself at the moment. So effectively it is abandoned. I'll accept PR's if they seem ok, but can't do a thourough test/review. If anyone wants to take over or help me with setting up some tests, let me know. 

Accounts-Ldap
==
##Overview##
a package to implement authentication against an LDAP server and retrieval of user attributes from that server in Meteor.js, using activedirectory.js for high level queries against LDP

##Fork of hive:meteor-accounts-ldap##
This is a fork of https://github.com/UK-AS-HIVE/meteor-accounts-ldap, a package to implement authentication against an LDAP server and retrieval of user attributes from that server in Meteor.js

The main difference is that this package uses activedirectory.js in stead of ldapjs directly. This allows users to log in with e.g. their email or sAMAccountName. Also, this package supports recursive group queries. To support this, the  connection to the LDAP server is made using a set of bind credentials, and not the credentials provided by the user.

Usage
==

##Installation##

* `meteor add tdamsma:meteor-accounts-ldap`

##Configuration##
Your server's URL and a DN to search will need to be set in a settings.json file as `url` and `baseDn`, respectively. Furthermore, account settings must be provided for a connection to the LDAP server to perform queries, width 'bindCn' and 'bindPassword'. You can select an array of `autopublishFields` from an LDAP search to add to the user object in Meteor.users. 
With 'groupMembership' a list of groups can be provided for which membership is determined. This is done using a recursive membership query, so if a user is member of a group which itself is member of the group to queried, this also returns true. As these types of queries can very slow, they are done asynchronously. 

##Example##
An example is in `examples/basic/config/settings.json.example`. 

`{{> ldapLogin}}` renders a template with username and password inputs. If login is successful, the user will be added to Meteor.users(). It is up to the app to publish and subscribe fields. By default, only the username is published.

To run example:
- cd tdamsma:accounts-ldap/examples/basic
- meteor --settings config/settings.json

