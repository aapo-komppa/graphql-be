#!/bin/sh
source ./.env

echo "\
print('mongo init start --------------------'); \n\
\n\
db.createUser( \n\
    { \n\
        user: \"$DB_USERNAME\", \n\
        pwd: \"$DB_PASSWORD\", \n\
        roles: [ \n\
            { \n\
                role: \"readWrite\", \n\
                db: \"$DB_NAME\" \n\
            } \n\
        ] \n\
    } \n\
) \n\
\n\
print('mongo init end ----------------------'); \n\
" > mongo-init.js